import { useState, useEffect } from "react";
import "./product.css";
import api from "../../api/axiosInstance";
import ProductCard from "../../components/product-card/product-card";
import Tag from "../../components/tag/tag";
import CartIcon from "../../assets/icons/shopping_cart.svg";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Product 0",
      description: "Description for Product 0",
      price: 0,
      category: "Category O",
    },
  ]);
  const [categories, setCategories] = useState(["Category A", "Category B"]);
  const [message, setMessage] = useState("");
  const getAllProducts = () => {
    api
      .get(`/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error getting the form data:", error));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [message]);
  
  useEffect(() => {
    const list = [];
    if (products.length === 0) {
      setCategories([]);
    }
    list.push("All");
    products.forEach((product) => {
      if (!list.includes(product.category)) {
        list.push(product.category);
      }
    });
    setCategories(list);
  }, [products]);

  const addProduct = (product) => {
    api
      .post("/cart", { product_id: product.id })
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.response.data.error)
        console.error("Error getting the form data:", error)
      });
  };
  const renderProducts = products.map((product) => {
    const onAddHandler = () => {
      addProduct(product);
    };
    return (
      <ProductCard
        key={product.name}
        product={product}
        onClickButton={onAddHandler}
      />
    );
  });

  const filterProducts = (category) => {
    api
      .get(`/products/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error getting the form data:", error));
  };

  const renderCategories = categories.map((category) => {
    const onClickCategoryHandler = () => {
      if (category === "All") {
        getAllProducts();
      } else {
        filterProducts(category);
      }
    };
    return (
      <Tag key={category} text={category} onClick={onClickCategoryHandler} />
    );
  });

  const renderMessage = () => {
    return (<h4>{message}</h4>);
  };
  return (
    <>
      <div className="header row">
        <h1>Davidesco Products</h1>
        <Link to="/cart">
          <Button classList={"no-grow secondary"}>
            <img className="no-grow" src={CartIcon} alt="Cart Icon" />
          </Button>
        </Link>
      </div>
      <div className="content-wrapper">
        <div className="row scroll">{renderCategories}</div>
        <div className="grid-container">{renderProducts}</div>
        <div>{renderMessage()}</div>
      </div>
    </>
  );
};

export default Product;
