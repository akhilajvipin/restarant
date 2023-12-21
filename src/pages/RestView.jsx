import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Restreviw from '../components/Restreviw';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Restview() {
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);

  const allRestaurant = useSelector((state)=>state.resturantSlice.allRestaurant)
  console.log(allRestaurant);

   const selectedrestuarant = allRestaurant.find(item=>item.id == id)
   console.log(selectedrestuarant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Row>
      <Col md={1}></Col>
      <Col md={3}>
        <img width={'100%'} height={'50%'} className='rounded mt-5' src={selectedrestuarant.photograph} alt="no img" />
      </Col>
      <Col md={7} className='Px-5'>
        <hr/>
        <h4 className='text-center'><span className='text-warning'>RESTAURANT</span>DETAILS </h4>
      <Col md={1}></Col>
      <hr/>
      <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedrestuarant.name}</h4></ListGroup.Item>
      <ListGroup.Item><p>Neighbourhood : {selectedrestuarant.neighborhood}</p></ListGroup.Item>
      <ListGroup.Item><p>Cuisine_type :{selectedrestuarant.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p>Address: {selectedrestuarant.address}</p></ListGroup.Item>
      <ListGroup.Item className='p-3 mb-2'>
      <div className='text-center p-3 mb-2'>
      <button onClick={handleShow} className='btn btn-warning me-4 '>Operating Hours</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday :{selectedrestuarant.operating_hours.Monday} </ListGroup.Item>
      <ListGroup.Item>Tuesday :{selectedrestuarant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday :{selectedrestuarant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday :{selectedrestuarant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday :{selectedrestuarant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday :{selectedrestuarant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday :{selectedrestuarant.operating_hours.Sunday}</ListGroup.Item>



     </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      <Restreviw/>
      </div>
      </ListGroup.Item>
    </ListGroup>
    <hr/>
    </Col>
    <Col className=''>
    </Col>

    </Row>
  )
}

export default Restview