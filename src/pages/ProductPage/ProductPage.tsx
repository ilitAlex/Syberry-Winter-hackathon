import React from "react";

const product = {
  ownerAvatar:
    "https://uybor.uz/borless/uybor/img/user-images/user_no_photo_200x200.png",
  ownerRating: "4,5",
  name: "Cucumber",
  price: "450",
  valute: "$",
  description:
    "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels — all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.",
  image:
    "https://lh4.googleusercontent.com/f72R3VoIUg1i-0MFkHGgk18fAa5l4dTrt2wX-5b5V8uAnt66LFoRAqZg4YDZIjEURF4_9GyytJLfbPaXk3q-=w914-h927-rw",
};

export const ProductPage = () => {
  return (
    <div className="product__page">
      <div className="product__image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product__title">{product.name}</div>
      <div className="product__description">{product.description}</div>
      <div className="product__value">
        <div className="price">{product.price}</div>
        {product.valute}
      </div>

      <div className="owner__info">
        <div className="owner__avatar">
          <img src={product.ownerAvatar} alt="owner avatar" />
        </div>
        <div className="owner__rating">{product.ownerRating}</div>
      </div>
    </div>
  );
};

export default ProductPage;
