import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import "./ProductCard.css";

// const props = {
//   ownerAvatar:
//     "https://uybor.uz/borless/uybor/img/user-images/user_no_photo_200x200.png",
//   ownerRating: "4,5",
//   name: "Cucumber",
//   price: "450",
//   valute: "$",
//   image:
//     "https://z-p3-scontent.fkiv1-1.fna.fbcdn.net/v/t1.15752-9/131983508_950793792115565_5211953739151766204_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=8a5iOSWEFC4AX8NTyjX&_nc_oc=AQk1oYhR8oH9YcgN5hdi4znhvGpUnp65N0_8AKV_IB25bcN45RHhUckvdt61kQG1grI&_nc_ht=z-p3-scontent.fkiv1-1.fna&oh=ce08a13ed50fd39ea39a688c0ad31597&oe=60060660",
// };
interface ProductCard {
  ownerAvatar: string;
  ownerRating: string;
  name: string;
  price: string;
  valute: string;
  image: string;
}

export const ProductCard = (props: ProductCard) => {
  return (
    <div className="ProductCard">
      <img width="240px" height="250px" src={props.image} alt={props.name} />

      <div className="product--info">
        <div className="owner">
          <img
            className="avatar"
            width="56px"
            height="56px"
            src={props.ownerAvatar}
            alt="avatar"
          />
          <div className="rating">
            <h3 className="owner__rating lightgreen">{props.ownerRating}</h3>
            <GradeIcon className="lightgreen" />
          </div>
        </div>

        <div className="product__details">
          <span className="product__name accent">{props.name} </span>
          <span className="price accent">{props.price}</span>
          <span className="description">{props.valute}</span>
        </div>
      </div>
    </div>
  );
};
