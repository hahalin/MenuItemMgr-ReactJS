import React, { useState, useEffect, useRef } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useMenuItems } from "../contexts/MenuItemsContext"


export default function InputItem(props) {

    const { menuItems, addMenuItem,addCategory } = useMenuItems()

    const [show, setShow] = useState(false);

    const idRef = useRef();
    const textRef = useRef();
    const categoryRef=useRef();


    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    function handleSubmit(e) {
        e.preventDefault();
        //addCategory({
        //    category: categoryRef.current.value
        //});
        addMenuItem({
            category:categoryRef.current.value,
            name:idRef.current.value,
            description:textRef.current.value
        });
        props.handleClose();
    }

    return (
        <Modal show={show} size="lg" >
            <ModalHeader>
                <ModalTitle>Add Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="card_">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-group row">
                                <label htmlFor="edItemCategory" className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="edItemCategory" placeholder="Category" ref={categoryRef} required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="edItemId" className="col-sm-2 col-form-label">Id</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="edItemId" placeholder="Id" ref={idRef}  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="edText" className="col-sm-2 col-form-label">Text</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="edText" placeholder="Text" ref={textRef}  />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Save</button>
                                <button className="btn btn-default" onClick={props.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    )
}
