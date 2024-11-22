import React from 'react';

const ProductCard = ({ product }) => {
    const { image, title, category, price } = product;

    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <p className="product-category">{category}</p>
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price.toFixed(2)}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
