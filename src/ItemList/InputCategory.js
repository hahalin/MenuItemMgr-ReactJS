import React, { useState, useEffect, useRef } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useMenuItems } from "../contexts/MenuItemsContext"


export default function InputCategory(props) {

    const { addCategory} = useMenuItems()

    const [show, setShow] = useState(false);

    const categoryRef=useRef();


    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    function handleSubmit(e) {
        e.preventDefault();
        addCategory({
            category:categoryRef.current.value
        });
        props.handleClose();
    }
    return (
        <Modal show={show} size="lg" >
            <ModalHeader>
                <ModalTitle>Add Category</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="card_">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-group row">
                                <label htmlFor="edItemCategory" className="col-sm-2 col-form-label">Category</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  ref={categoryRef}  required />    
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Save</button>
                                <button className="btn btn-default" type="button" onClick={props.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    )
}
