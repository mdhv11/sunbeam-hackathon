import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card_2() {
    return (
    <Card>
      <Card.Header>Review to Share : Titanic          .
        <Button variant="primary">9/10</Button></Card.Header>
      <Card.Body>
        <Card.Text>
            An Emotionally charged masterpiece. Beautiful cinematography!
        </Card.Text>
        <h6>Last Updated : 2023-05-15</h6>
      </Card.Body>
    </Card>
  );
  
}


export default Card_2;