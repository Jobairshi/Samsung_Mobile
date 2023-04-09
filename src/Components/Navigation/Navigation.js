import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {

    return (
        <div>
        <Navbar className='Nav' collapseOnSelect expand="lg" bg="white">
         <Container>
        <Navbar.Brand href="/">
        <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link  id="buts" href="/Services">Services</Nav.Link>
            <Nav.Link  id="buts" href="/Contact">Contacts</Nav.Link>
            <Nav.Link  id="buts" href="/AddService">Add Mobile</Nav.Link>
            <Nav.Link  id="buts" href="/Banner">Banner</Nav.Link>
            <Nav.Link  id="buts" href="/Extra">Upcomming</Nav.Link>
            <Nav.Link  id="buts" href="/AddUpcomming">Add Upcomming</Nav.Link>

          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;