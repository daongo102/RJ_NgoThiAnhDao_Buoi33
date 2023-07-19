import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        const { content, onModal } = this.props;

        return (
            <div>
                <div
                    style={{
                        background: "rgba(0,0,0,0.8)",
                        width: "calc(100vw)",
                        height: "calc(100vw)",
                        position: "fixed",
                        top: 0,
                        left: 0,
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 50,
                            left: 100,
                            right: 100,
                        }}
                    >
                        <div className="modal-content">
                            <div
                                className="mheader"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}
                            >
                                <h4
                                    className="title"
                                    style={{
                                        textAlign: "center",
                                        color: "white",
                                    }}
                                >
                                    Thông tin sản phẩm
                                </h4>
                            </div>
                            <div className="mbody mt-4">
                                <div className="row">
                                    <div className="col-4">
                                        <img
                                            style={{ width: "100%" }}
                                            src={content.image}
                                        />
                                    </div>
                                    <div className="col-8">
                                        <table
                                            className="table"
                                            style={{
                                                fontSize: 13,
                                                borderRadius: 50,
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: 100 }}>
                                                        Tên sản phẩm
                                                    </td>
                                                    <td>{content.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mô tả</td>
                                                    <td>
                                                        {content.description}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Giá</td>
                                                    <td>{content.price}$</td>
                                                </tr>
                                                <tr>
                                                    <td>Số lượng</td>
                                                    <td>{content.quantity}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mfooter"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}
                            >
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={onModal("")}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
