import PropTypes from "prop-types";
import "./button.css"

const Button = ({ classList, onClick, children, id, }) => (
    <>
      <button
        className={classList}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        {...(id && { id })}
      >
        {children}
      </button>
    </>
  );
  Button.propTypes = {
    children: PropTypes.node,
    classList: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string,
  };
  
  export default Button;