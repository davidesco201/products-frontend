import { useState, useEffect } from "react";
import api from "../../api/axiosInstance";
import ProductCard from "../../components/product-card/product-card";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Product 0",
      description: "Description for Product 0",
      price: 0,
      category: "Category O",
    },
  ]);

  const getAllProducts = () => {
    api
      .get(`/cart`)
      .then((response) => {
        setProducts(response.data.cart);
      })
      .catch((error) => console.error("Error getting the form data:", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <ProductCard
        key={product.name}
        product={product}
        type="cartItem"
      />
    );
  });
  return (
    <>
      <div className="header row">
        <h1>Davidesco Cart</h1>
      </div>
      <div className="content-wrapper">
        <div className="grid-container">{renderProducts}</div>
      </div>
    </>
  );
};

export default Cart;
