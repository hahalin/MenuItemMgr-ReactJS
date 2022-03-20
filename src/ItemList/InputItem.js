import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


export default function InputItem(props) {
    return (
        <Modal show={props.show}>
            <ModalHeader>
                <ModalTitle>Hi</ModalTitle>
            </ModalHeader>
            <ModalBody>asdfasdf</ModalBody>
            <ModalFooter>This is the footer</ModalFooter>
        </Modal>
    )
}
