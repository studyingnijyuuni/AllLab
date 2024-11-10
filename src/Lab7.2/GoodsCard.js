import React from 'react';

const GoodsCard = ({ image, name, price }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default GoodsCard;