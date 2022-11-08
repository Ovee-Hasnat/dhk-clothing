import React from "react";
import './catagory-item.scss'

const catagory = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
]

const CatagoryItem = () => {
    return (
        <div className="categories-container">
            {catagory.map(item => (
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