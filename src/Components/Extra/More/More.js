import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './More.css'
const More = (props) => {
    // const{_id,name,price,desc,img} = props.realService
    const{name,img} = props.realService
    return (
        <div>
            <Card className='text-center rnd' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Button className='gradt' variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
        </div>
        
    );
};

export default More;