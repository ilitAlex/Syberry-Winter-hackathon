import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

const data = [
  {
    name: "Most popular products",
    items: [
      {
        ownerAvatar:
          "https://uybor.uz/borless/uybor/img/user-images/user_no_photo_200x200.png",
        ownerRating: "4,5",
        name: "Cucumber",
        price: "450",
        valute: "$",
        image:
          "https://z-p3-scontent.fkiv1-1.fna.fbcdn.net/v/t1.15752-9/131983508_950793792115565_5211953739151766204_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=8a5iOSWEFC4AX8NTyjX&_nc_oc=AQk1oYhR8oH9YcgN5hdi4znhvGpUnp65N0_8AKV_IB25bcN45RHhUckvdt61kQG1grI&_nc_ht=z-p3-scontent.fkiv1-1.fna&oh=ce08a13ed50fd39ea39a688c0ad31597&oe=60060660",
      },
    ],
  },
];

export const MainPage = () => {
  console.log(data);

  return (
    <div className="main__page">
      {data.map((e) => (
        <div className="container">
          <div className="container__name">{e.name}</div>
          <div className="container__loyout">
            {e.items.map((item) => (
              <ProductCard
                ownerAvatar={item.ownerAvatar}
                ownerRating={item.ownerRating}
                name={item.name}
                price={item.price}
                valute={item.valute}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
