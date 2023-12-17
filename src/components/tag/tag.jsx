import PropTypes from "prop-types";
import "./tag.css"

const Tag = ({onClick, text, id,}) => (
    <>
      <h5
        className="tag row no-grow"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        {...(id && { id })}
      >
        {text}
      </h5>
    </>
  );
  Tag.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string,
  };
  
  export default Tag;