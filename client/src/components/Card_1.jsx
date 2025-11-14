import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card_1() {
    return (
    <Card className='m-3'>
      <Card.Header>Titanic  
        <Button variant="primary">9/10</Button></Card.Header>
      <Card.Body>
        <Card.Title>Reviewed by: John Doe</Card.Title>
        <Card.Text>
            An Emotionally charged masterpiece. Beautiful cinematography!
        </Card.Text>
        <h6>Last Updated : 2023-05-15</h6>
      </Card.Body>
    </Card>
  );
}


export default Card_1