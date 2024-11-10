import React from 'react';
import GoodsCard from './GoodsCard';
import './GoodsGallery.css'

import meat from './buta.jpg'
import eggs from './eggs.jpg'
import bublyk from './bublyk.jpg'
import bolty from './bolty.svg'
import abrams from './abrams.jpg'
import paper from './toipape.jpg'


const ProductGallery = () => {
  const products = [
    { image: meat, name: "М'ясо", price: '₴10.00' },
    { image: eggs, name: 'Яйця', price: '₴15.00' },
    { image: paper, name: 'Папір', price: '₴20.00' },
    { image: bublyk, name: 'Бублик', price: '₴25.00' },
    { image: abrams, name: 'M-1 Abrams', price: '$4.3 мільйона' },
    { image: bolty, name: 'Фірмовий набір болтів', price: '₴5.20' }
  ];

  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <GoodsCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
