import React from "react";
import './styles/Header.scss';

const Header = ({ filterItems, categories }) => {
  return (
    <>
      <div className="itemCategories mb-2">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="btn mx-2"
              onClick={() => filterItems(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Header;
