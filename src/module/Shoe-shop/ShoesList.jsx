import React, { Component } from "react";
import ShoeItem from "./ShoeItem";

export default class ShoesList extends Component {
    render() {
        const { sanPham, setStateModal} = this.props;
        return (
            <div className="row">
                {sanPham.map((sp) => {
                    return (
                        <div className="col-4 mt-4" key={sp.id}>
                           <ShoeItem item={sp} setStateModal={setStateModal}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}
