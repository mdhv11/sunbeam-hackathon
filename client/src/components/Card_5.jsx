import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card_5() {
    return (
    <Card className='m-3'>
      <Card.Body>
        <Card.Text >
          <h6>Rating(1-10)</h6>
        <input value={9} style={{width:'90%'}}></input>
         <h6>Your Review</h6>
        <textarea value={'An Emotionally charged masterpiece. Beautiful cinematography!'} style={{width:'90%', height:'100px'}}></textarea>
        </Card.Text>
       <Button variant="primary">Update Review</Button>
      <Button style={{backgroundColor:'gray'}}  className="ms-2">Cancel</Button>
     </Card.Body>
    </Card>
  );
  
}


export default Card_5;