import React, { Component } from "react";

export default class ShoeItem extends Component {
    render() {
        const { item, onModal } = this.props;
        return (
            <div className="card text-white">
                <img
                    style={{ background: "#f0f0f0" }}
                    className="card-img-top"
                    src={item.image}
                    alt={item.alias}
                />
                <div className="card-body" style={{ background: "#272727" }}>
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
                            style={{ fontSize: 13, background: "#fdcd00" }}
                            className="btn"
                        >
                            Thêm giỏ hàng
                        </button>
                        <button
                            onClick={onModal(item)}
                            style={{
                                fontSize: 13,
                                background: "#35239b",
                                color: "white",
                            }}
                            className="btn mx-2"
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
