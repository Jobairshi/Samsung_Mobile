import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import video from '../../Media/sam.mp4'
import Extra from '../Extra/Extra';
import './Home.css'
const Home = () => {
    return (
    <div>
      <Banner/>
       
      <Container>
    
      <div className='text-center fon'>
        
        <h1>
          Explore all the new products 
        </h1>
         <h1>
          from UNPACKED
        </h1>
        <img src='https://images.samsung.com/is/image/samsung/assets/bd/2208/pfs/00-ft02-line-pc-1440x84.jpg?$FB_TYPE_A_JPG$' alt=' '/>
      </div>
       
       <div className='ash'>
       <Row>
        <Col sm={3}>
          <h1 className='mid'>
            Galaxy Z Flip4
          </h1>
          <h5 className='m'>
            Capture life with new perspective.
          </h5>
        </Col>
        <Col sm={9}>
        <video loop autoPlay controls width="70%" height="100%" src={video}>
          
          </video>
        </Col>
      </Row>
       </div>
        
      
      </Container>
      <Services/>

      <Container>
      <Extra/>
       
      </Container>
      
    </div>
    );
};

export default Home;