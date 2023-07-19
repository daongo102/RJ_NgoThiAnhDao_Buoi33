import React, { Component } from "react";

export default class Shoeheader extends Component {
    render() {
        return (
            <div
                className="col-2"
                style={{ position: "sticky", top: 50, height: "100%" }}
            >
                <button
                    style={{
                        width: "100%",
                        textAlign: "left",
                        border: "1px solid #35239b",
                    }}
                    className="btn mb-2"
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
        );
    }
}
