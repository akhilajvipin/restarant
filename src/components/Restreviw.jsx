import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Restreviw() {
    const [open, setOpen] = useState(false);
  return (
   <>
 
   <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to See Review</button>
   <Collapse in ={open}>
   <div className='my-2'>
    <hr/>
    <div className='mt-5'>
        <h5>Name and date</h5>
        <h4>Rating</h4>
        <p>Discription</p>
    </div>

   </div>
   </Collapse>
   </>
  )
}

export default Restreviw