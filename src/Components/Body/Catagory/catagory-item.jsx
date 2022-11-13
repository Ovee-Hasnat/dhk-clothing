import React from "react";
import './catagory-item.scss'
import ItemData from "../../../Data/item-data";


const CatagoryItem = () => {
    return (
        <div className="categories-container">
            {ItemData.map(item => (
                <div key={item.id} className="category-container">
                    <div 
                        className="background-image"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`
                        }} />
                    <div className="category-body-container">
                        <h2>{item.title}</h2>
                        <p>Shop Now</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default CatagoryItem;