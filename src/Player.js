import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player=(props) => {
    console.log("Player props;",props)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.players.image} />
    <Card.Body>
      <Card.Title>{props.players.name}</Card.Title>
      <Card.Text>
      <h4> Age : {props.players.age}</h4>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Player