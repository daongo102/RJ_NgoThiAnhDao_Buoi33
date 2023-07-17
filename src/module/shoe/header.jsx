import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <h4
                            style={{
                                color: "black",
                                textAlign: "center",
                                paddingTop: "10px",
                            }}
                        >
                            SHOES SHOP
                        </h4>
                    </div>
                </header>
            </div>
        );
    }
}
