import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdAdd, IoMdCreate, IoMdTrash } from "react-icons/io";
import AddProductModal from "../components/AddProductModal";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
    useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProductIndex, setDeletingProductIndex] = useState(null);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem(`products_${categoryName}`)) || [];
    setProducts(savedProducts);
  }, [categoryName]);

  const openAddProductModal = () => setIsAddProductModalOpen(true);
  const closeAddProductModal = () => setIsAddProductModalOpen(false);

  const openEditProductModal = (product) => {
    setEditingProduct(product);
    setIsEditProductModalOpen(true);
  };

  const closeEditProductModal = () => {
    setEditingProduct(null);
    setIsEditProductModalOpen(false);
  };

  const openDeleteProductModal = (index) => {
    setDeletingProductIndex(index);
    setIsDeleteProductModalOpen(true);
  };

  const closeDeleteProductModal = () => {
    setDeletingProductIndex(null);
    setIsDeleteProductModalOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem(
      `products_${categoryName}`,
      JSON.stringify(updatedProducts)
    );
  };

  const handleEditProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.name === updatedProduct.name ? updatedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem(
      `products_${categoryName}`,
      JSON.stringify(updatedProducts)
    );
    closeEditProductModal();
  };

  const handleDeleteProduct = () => {
    const updatedProducts = products.filter(
      (_, index) => index !== deletingProductIndex
    );
    setProducts(updatedProducts);
    localStorage.setItem(
      `products_${categoryName}`,
      JSON.stringify(updatedProducts)
    );
    closeDeleteProductModal();
  };

  return (
    <div className="p-4">
      <h1 className="p-5 text-xl">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          onClick={openAddProductModal}
          className="flex justify-center cursor-pointer items-center border p-4 rounded-lg shadow-lg relative"
        >
          <button className="p-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <IoMdAdd size="24px" />
          </button>
        </div>
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg relative">
            <img
              src={product.product_image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <ul>
              {product.variants.map((variant, idx) => (
                <li key={idx}>
                  {variant.size}: ${variant.price}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                onClick={() => openEditProductModal(product)}
                className="text-blue-500"
              >
                <IoMdCreate size="20px" />
              </button>
              <button
                onClick={() => openDeleteProductModal(index)}
                className="text-red-500"
              >
                <IoMdTrash size="20px" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
        onSave={handleAddProduct}
      />
      {editingProduct && (
        <EditProductModal
          isOpen={isEditProductModalOpen}
          onClose={closeEditProductModal}
          product={editingProduct}
          onSave={handleEditProduct}
        />
      )}
      <DeleteProductModal
        isOpen={isDeleteProductModalOpen}
        onClose={closeDeleteProductModal}
        onConfirm={handleDeleteProduct}
      />
    </div>
  );
};

export default CategoryPage;
