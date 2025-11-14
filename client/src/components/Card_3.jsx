import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card_3() {
    return (
    <Card className='m-2'>
      <Card.Header>Review to Share : Titanic          .
        <Button variant="primary">9/10</Button></Card.Header>
      <Card.Body>
        <Card.Text>
            An Emotionally charged masterpiece. Beautiful cinematography!
        </Card.Text>
        <h6>Last Updated : 2023-05-15</h6>
        
      <Button variant="primary">Edit</Button>
      <Button variant="success"  className="ms-2">Share</Button>
      <Button variant="danger"  className="ms-2">Delete</Button>
      </Card.Body>
    </Card>
  );
  
  
}


export default Card_3;