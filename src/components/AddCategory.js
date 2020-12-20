import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategoriesFn }) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategoriesFn((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategoriesFn: PropTypes.func.isRequired,
};
