import React from "react";

import { ProductCard } from "../ProductCard/ProductCard";
import "./Profile.css"


// const LINK = "http://kvuzu.ru/api/GetFarmersWithProducts.php/"



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
                currency: "$",
                image:
                    "https://z-p3-scontent.fkiv1-1.fna.fbcdn.net/v/t1.15752-9/131983508_950793792115565_5211953739151766204_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=8a5iOSWEFC4AX8NTyjX&_nc_oc=AQk1oYhR8oH9YcgN5hdi4znhvGpUnp65N0_8AKV_IB25bcN45RHhUckvdt61kQG1grI&_nc_ht=z-p3-scontent.fkiv1-1.fna&oh=ce08a13ed50fd39ea39a688c0ad31597&oe=60060660",
            },
        ],
    },
];

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addingCard: false,
            cardImg: "",
            cardName: "",
            cardDescription: "",
            cardCurrency: "",
            farmer_id: "2",
            data: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.Submit = this.Submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {


        fetch("http://kvuzu.ru/api/GetFarmersWithProducts.php/")
            .then(response => {
                    return response.json()
            })
            .then(d => {
                this.data = d.products;
            })
            .catch(err => console.log(err));
    };

    handleClick() {
        this.setState({addingCard: true});

    };

    handleChange(e) {
        this.setState({value: e.target.value});
        console.log(e.target.value)
    };
    Submit(e) {
        console.log("submit");
        alert("your product is adding to server ")
        this.setState({addingCard: false});
        e.preventDefault();
        console.log(e.target)
    }
    render() {
        return (
            <div className="main__page">

                <div className="container__name">Farmer's name</div>


                <button className="button"
                        onClick={this.handleClick}
                >add new product
                </button>
                { this.state.addingCard || data.map((e) => (
                    <div>
                        <div className="container__name">Farmer's products:</div>
                        <div className="container">
                            <div className="container__loyout">
                                {e.items.map((item) => (
                                    <>
                                        <ProductCard
                                            ownerAvatar={item.ownerAvatar}
                                            ownerRating={item.ownerRating}
                                            name={item.name}
                                            price={item.price}
                                            currency={item.currency}
                                            image={item.image}
                                        />
                                        <ProductCard
                                            ownerAvatar={item.ownerAvatar}
                                            ownerRating={item.ownerRating}
                                            name={item.name}
                                            price={item.price}
                                            currency={item.currency}
                                            image={item.image}
                                        />
                                        <ProductCard
                                            ownerAvatar={item.ownerAvatar}
                                            ownerRating={item.ownerRating}
                                            name={item.name}
                                            price={item.price}
                                            currency={item.currency}
                                            image={item.image}
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>


                ))}

                { this.state.addingCard === false ||

                <form name="form" className="form">
                    <label className="button block">
                        Name: <input type="text" name="name" />
                    </label>
                    <label className="button block">
                        description: <textarea type="text" name="description" onChange={
                        (e) => {
                            // console.log(e.target.value);
                            // // this.setState({cardDescription: e.target.value}).bind(this);
                            // console.log(state);
                        }

                    }/>
                    </label>
                    <label className="button block">
                        currency: <input type="text" name="currency"
                                         // value={this.state.cardCurrency}
                                         // onChange={this.handleChange}
                    />
                    </label>
                    <label className="button block">
                        image: <input type="file" name="file" value={this.state.cardImg} onChange={
                        (e) => {
                            console.log(this.state);
                            // this.setState({cardImg: e.target.files[0]})
                            // console.log(e.target.files[0].name);
                            // console.log(this.state);

                        }

                    }/>
                    </label>
                    <input className="button block" type="submit" value="Submit" onClick={this.Submit}/>
                    <input className="button block" type="submit" value="go back" onClick={this.addingCard = false}/>
                </form>
                }
            </div>
        );
    }

};

export default Profile;


