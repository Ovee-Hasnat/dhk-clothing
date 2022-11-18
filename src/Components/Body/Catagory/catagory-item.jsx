import React from "react";
import { useNavigate } from "react-router-dom";

import "./catagory-item.scss";
import ItemData from "../../../Data/item-data";

const CatagoryItem = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      {ItemData.map((item) => (
        <div
          key={item.id}
          className="category-container"
            onClick={() => {
              navigate(item.route)
            }}
        >
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{item.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatagoryItem;
