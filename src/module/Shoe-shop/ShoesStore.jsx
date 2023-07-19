import React, { Component } from "react";
import { Shoes } from "./dataShoes";
import Modal from "./Modal";
import ShoesList from "./ShoesList";
import Shoeheader from "./Shoeheader";

export default class ShoesStore extends Component {
    state = {
        spChiTiet: "",
    };
    handleModal = (sp) => {
        return () => {
            this.setState({ spChiTiet: sp });
        };
    };
    renderModal = () => {
        if (this.state.spChiTiet) {
            return (
                <Modal
                    content={this.state.spChiTiet}
                    onModal={this.handleModal}
                />
            );
        } else {
            return "";
        }
    };
    render() {
        return (
            <div className="shoe container-fluid">
                <div className="row my-5">
                    <Shoeheader />
                    <div className="col-10">
                        <h2 style={{ textAlign: "center" }}>SHOES SHOP</h2>
                        <ShoesList sanPham={Shoes} onModal={this.handleModal} />
                        {this.renderModal()}
                    </div>
                </div>
            </div>
        );
    }
}
