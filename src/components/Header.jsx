import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/resturantSlice';


function Header() {
  const dispatch = useDispatch()
  return (
    <div>
         <Navbar >
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-c2119aff1d9a65251729cbc3510375e7_screen.jpg?ts=1629395591"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          <h5 className='text-warning mt-3 ms-4' > <span className='text-danger' >Food</span> Circle</h5>
          </Navbar.Brand>
          
         <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25' placeholder='Search by Neighbourhood' />
        

        </Container>
      </Navbar>
    </div>
  )
} 

export default Header