import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        const { content, setStateModal } = this.props;
        console.log(content);
        return (
            <div>
                {/* <button
                    type="button"
                    className="btn btn-primary"
                   
                >
                    Launch demo modal
                </button> */}

                <div
                // className="modal fade show"
                id={`modal${content.id}`}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div
                            className="modal-content"
                            style={{ maxWidth: 800, width: 800 }}
                        >
                            <div className="modal-header">
                                <h4 className="modal-title" style={{textAlign: "center"}}>
                                    Thông tin sản phẩm
                                </h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-4">
                                        <img
                                            style={{ width: "100%" }}
                                            src={content.image}
                                        />
                                    </div>
                                    <div className="col-8">
                                    
                                        <table className="table" style={{fontSize: 13}}>
                                            <tbody>
                                                <tr>
                                                    <td style={{width: 100}}>Tên sản phẩm</td>
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
                                                    <td>{content.price}</td>
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
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    
                                 
                                
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
