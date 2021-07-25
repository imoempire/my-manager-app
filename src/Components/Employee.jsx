import React, { useState } from "react";
import Card from "react-bootstrap/esm/Card";
import EditEmployeeForm from "./EditEmployeeForm";
import Modal from "react-bootstrap/esm/Modal"
import  ListGroup  from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

export default function Employee({ Employ, handleDelete, handleEdit }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteButton = (e)=>{
    handleDelete(Employ.id)
  }
  return (
    <>
    <div className="input">
      <Card className="employee mb-4">
      <Card.Header>FirstName: {Employ.First} </Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item>LastName: {Employ.Last} </ListGroup.Item>
      <ListGroup.Item>Email: {Employ.Email}</ListGroup.Item>
      <ListGroup.Item>Phone: {Employ.Phone}</ListGroup.Item>
      <ListGroup.Item>Home Address: {Employ.HomeAddress}</ListGroup.Item>
      <ListGroup.Item>Job Role: {Employ.Role}</ListGroup.Item>
      <ListGroup.Item>Salary: {Employ.Salary}</ListGroup.Item>
      </ListGroup>
      <Button onClick={handleShow}>Edit</Button>
      <Button onClick={handleDeleteButton}>Delete</Button>
      </Card>
    </div>

    <Modal size="lg" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Employee Data</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <EditEmployeeForm 
      Employ={Employ}
      handleEdit={handleEdit}
      closeModal={handleClose}/> 
    </Modal.Body>
  </Modal>
  </>
  );
}
