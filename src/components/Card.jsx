import React, { useState } from "react";
import "./styles/Card.scss";

const Card = ({ item, addToCart }) => {
  const { id, title, price, image, rating, category, description } = item;
  const { rate, count } = rating;

  const shortDesc = (str) => {
    return str.substring(0, 100) + " ..........";
  };

  return (
    <>
      <div className="card py-3 mb-4 mx-3">
        <div className="imgBox">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <p>{title}</p>
          <p>{category}</p>
          <p>{shortDesc(description)}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p>{price} $</p>
            </li>
            <li className="list-group-item">
              <p>
                <span>{count}</span> people rated this product{" "}
                <span>{rate}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-block w-100" onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
