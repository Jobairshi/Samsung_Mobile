
import React, { useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
// slide
const Banner = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div >
          <Container className='caro'>
          <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Row >
        <Col className='desc' sm={4}>
          <h1 className='head'>
             Galaxy Z Flip4
          </h1>
        CPU Speed 2.99GHz,Resolution: 2340 x 1080 FHD+Front Camera: 12.0 MP +50.0,MP Rear Camera: - 12MP,Ram:8GB,ROM: 128GB
        <Button  variant="primary bg-black" className="ms-4 butt">
                 Buy
        </Button>
        <Button variant="primary bg-black" className="ms-4 butt">
                 Add To cart
        </Button>
        </Col>
        <Col className='image' sm={8}>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/bd/smartphones/galaxy-z-flip4/images/galaxy-z-flip4_highlights_kv.jpg"
          alt="First slide"/>
        </Col>
      </Row>
      </Carousel.Item>
      
      <Carousel.Item>
      <Row>
        <Col className='desc' sm={4}>
          <h1 className='head'>
            Galaxy S22+ 
          </h1>
        CPU Speed 2.99GHz,Resolution 2340 x 1080 (FHD+),Rear Camera 12.0 MP +50.0 MP Rear Camera - 12MP,Ram:8GB,ROM: 128GB
        <Button  variant="primary bg-black" className="ms-4 butt">
                 Buy
        </Button>
        <Button variant="primary bg-black" className="ms-4 butt">
                 Add To cart
        </Button>
        </Col>
        <Col className='image' sm={8}>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/p6pim/bd/2202/gallery/bd-galaxy-s22-plus-s906-sm-s906ezwgbkd-531015755?$592_472_PNG$"
          alt="First slide"/>
        </Col>
      </Row>
      </Carousel.Item>

      <Carousel.Item>
       <Row>
        <Col className='desc' sm={4}>
          <h1 className='head'>
            Galaxy Note 20
          </h1>
        CPU Speed 2.99GHz,Resolution 2340 x 1080 (FHD+),Rear Camera 12.0 MP +50.0 MP Rear Camera - 12MP,Ram:8GB,ROM: 128GB
        <Button  variant="primary bg-black" className="ms-4 butt">
                 Buy
        </Button>
        <Button variant="primary bg-black" className="ms-4 butt">
                 Add To cart
        </Button>
        </Col>
        <Col className='image' sm={8}>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/p6pim/bd/feature/142466126/bd-feature-a-stunning-array-of-mystic-hues-that-redefine-work-and-play-470405501?$FB_TYPE_A_JPG$"
          alt="First slide"/>
        </Col>
      </Row>
      </Carousel.Item>
      </Carousel>
     </Container>
    </div>
    );
};

export default Banner;