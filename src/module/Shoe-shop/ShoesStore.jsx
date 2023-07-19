import React, { Component } from "react";
import { Shoes } from "./dataShoes";
import Modal from "./Modal";
import ShoesList from "./ShoesList";

export default class ShoesStore extends Component {
    state = {
      
        spChiTiet: {

            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },
       
    };
    setStateModal = (sp) => {
        return () => {
            this.setState({ spChiTiet: sp });
        };
    };
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div
                        className="col-2"
                        style={{ position: "sticky", top: 50, height: "100%" }}
                    >
                        <button
                            style={{ width: "100%", textAlign: "left" }}
                            className="btn btn-outline-primary mb-2"
                        >
                            <a href="#">Home</a>
                        </button>
                        <br />
                        <button
                            style={{ width: "100%", textAlign: "left" }}
                            className="btn "
                        >
                            <a>Shoe</a>
                        </button>
                    </div>
                    <div className="col-10">
                        <h2 style={{ textAlign: "center" }}>SHOES SHOP</h2>
                         <ShoesList
                            sanPham={Shoes}
                            setStateModal={this.setStateModal}
                        />
                        <Modal
                            content={this.state.spChiTiet}
                            setStateModal={this.setStateModal}
                        />

                       
                    </div>
                </div>
            </div>
        );
    }
}
