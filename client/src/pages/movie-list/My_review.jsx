import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/Navbar'
import Card_3 from '../../components/Card_3'
function My_review() {
  return (
    <div>
        <Navbar />
      <h3 className='m-3'>
        My Reviews
      </h3>
      <table b>

      </table>
      <div className='row m-3'>
        <Card_3 />
        <Card_3 />
        <Card_3 />
      </div>
      
    </div>
  )
}

export default My_review