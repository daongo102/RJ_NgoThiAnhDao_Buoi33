import React, { Component } from "react";
import Modal from "./Modal";

export default class ShoeItem extends Component {
    render() {
        const { item, setStateModal } = this.props;
        return (
            <div className="card text-white">
                <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.alias}
                />
                <div className="card-body bg-black">
                    <h6
                        style={{ fontSize: 15, textTransform: "uppercase" }}
                        className="card-title"
                    >
                        {item.name}
                    </h6>
                    <p
                        style={{ color: "yellow", fontWeight: "bold" }}
                        className="card-text"
                    >
                        {item.price}$
                    </p>
                    <div>
                        <button
                            style={{ fontSize: 13 }}
                            className="btn btn-danger"
                        >
                            Thêm giỏ hàng
                        </button>
                        <button
                            onClick={setStateModal(item)}
                            style={{ fontSize: 13 }}
                            className="btn btn-primary mx-2"
                            data-toggle="modal"
                            data-target={`modal${item.id}`}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}