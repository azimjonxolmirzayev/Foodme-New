import React, { useState } from "react";

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [variants, setVariants] = useState([{ size: "", price: "" }]);

  const handleAddVariant = () => {
    setVariants([...variants, { size: "", price: "" }]);
  };

  const handleRemoveVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (name && productImage && variants.length) {
      const newProduct = {
        name,
        description,
        product_image: productImage,
        variants,
      };
      onSave(newProduct);
      setName("");
      setDescription("");
      setProductImage("");
      setVariants([{ size: "", price: "" }]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-auto shadow-lg w-80 p-4">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Product name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Product description"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Product Image URL</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Variants</label>
          {variants.map((variant, index) => (
            <div key={index} className="mb-2 flex gap-2 items-center">
              <input
                type="text"
                value={variant.size}
                onChange={(e) => {
                  const updatedVariants = [...variants];
                  updatedVariants[index].size = e.target.value;
                  setVariants(updatedVariants);
                }}
                className="w-1/2 p-2 border rounded"
                placeholder="Size"
              />
              <input
                type="number"
                value={variant.price}
                onChange={(e) => {
                  const updatedVariants = [...variants];
                  updatedVariants[index].price = e.target.value;
                  setVariants(updatedVariants);
                }}
                className="w-1/2 p-2 border rounded"
                placeholder="Price"
              />
              <button
                onClick={() => handleRemoveVariant(index)}
                className="text-red-500 ml-2"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            onClick={handleAddVariant}
            className="text-blue-500 hover:underline"
          >
            Add Variant
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
