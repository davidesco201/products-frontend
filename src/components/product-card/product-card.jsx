import PropTypes from "prop-types";
import Button from "../button/button";
import "./product-card.css";
import ShoppingCartIcon from "../../assets/icons/add_shopping_cart.svg";

const ProductCard = ({
  classList,
  onClickButton,
  product,
  id,
  type = "productItem",
}) => {
  switch (type) {
    case "productItem":
      return (
        <>
          <div id={id} className={`product-card row no-grow ${classList}`}>
            <div className="column gap0">
              <h2>{product.name}</h2>
              <h4>{product.description}</h4>
              <div className="row scroll section">
                <h4>{"$" + product.price}</h4>
                <Button onClick={(event) => onClickButton(event)}>
                  <img src= {ShoppingCartIcon} alt="Shopping Cart Icon" />
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    case "cartItem":
      return (
        <>
          <div id={id} className={`product-card row no-grow ${classList}`}>
            <div className="column gap0">
              <h2>{product.name}</h2>
              <h4>{product.description}</h4>
              <div className="row scroll section">
                <h4>{"$" + product.price}</h4>
              </div>
            </div>
          </div>
        </>
      );
  }
};
ProductCard.propTypes = {
  classList: PropTypes.string,
  onClickButton: PropTypes.func,
  id: PropTypes.string,
  product: PropTypes.object,
  type: PropTypes.string,
};

export default ProductCard;
