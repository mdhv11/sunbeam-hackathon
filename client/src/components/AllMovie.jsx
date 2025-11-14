import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Avatar</Card.Title>
        <Card.Text>
        Release Date : 2009-02-21
        </Card.Text>
        <Button variant="primary">Review This Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;