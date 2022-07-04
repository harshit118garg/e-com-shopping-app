import React, { useState } from "react";
import "./styles/Products.scss";
import list from "../data";
import Card from "./Card";
import Header from "./Header";

const Products = ({addToCart}) => {
  const allCategory = ["all", ...new Set(list.map((item) => item.category))];

  const [categories, setCategories] = useState(allCategory);
  const [menuItems, setMenuItems] = useState(list);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(list);
      return;
    }
    const newItems = list.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <section>
        <Header filterItems={filterItems} categories={categories} />
        <div className="products">
          {menuItems.map((item) => (
            <Card key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
