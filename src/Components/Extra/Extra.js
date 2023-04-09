import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import More from './More/More';
import './Extra.css'
import video from '../../Media/up.mp4'

const Extra = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/upcomming')
        .then((res) => res.json())
        .then((data) => setServices(data))
    }, [])
   console.log(services[0]);
    return (
    <Container className='mar text-center'>
      <h1>Upcomming</h1>
     <div>
       <Row className='extra'>
       <Col >
      
          <video height="100%" loop autoPlay controls width="100%" src={video}/>
        </Col>
        <Col className='extra'>
          
          {
        services.map((service)=>(
            <More realService={service}
           
            ></More>
        ))
       }
        </Col>
       </Row>
     </div>
    </Container>
    );
};

export default Extra;