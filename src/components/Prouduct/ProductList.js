import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/images/pizza1.jpg",
    title: "Pugliese pizza",
    description: "A classic Italian pizza with tomato, onion, and mozzarella.",
    price: 9.0,
  },
  {
    image: "/images/pizza2.jpg",
    title: "Pizza in the United States",
    description:
      "American-style pizza with a thick crust and various toppings.",
    price: 16.0,
  },
  {
    image: "/images/pizza3.jpg",
    title: "New York-style pizza",
    description: "A hand-tossed pizza with a characteristic large slice.",
    price: 12.0,
  },
  {
    image: "/images/pizza4.jpg",
    title: "Hawaiian pizza",
    description: "Pizza topped with pineapple, ham, and mozzarella.",
    price: 14.0,
  },
  {
    image: "/images/pizza5.jpg",
    title: "Neapolitan pizza",
    description: "Traditional pizza with tomatoes, mozzarella, and basil.",
    price: 10.0,
  },
  {
    image: "/images/pizza6.jpg",
    title: "Tesero pizza",
    description: "A simple, no-cheese pizza with a variety of fresh toppings.",
    price: 5.0,
  },
];

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <CategoryFilter />
      <h1 className="text-2xl font-semibold mt-6 mb-4">Pizza</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
