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
            <a  id="buts" href="/Services">Services</a>
            <a  id="buts" href="/Contact">Contacts</a>
            <a  id="buts" href="/AddService">Add Mobile</a>
            <a  id="buts" href="/Banner">Banner</a>
            <a  id="buts" href="/Extra">Upcomming</a>
            <a  id="buts" href="/AddUpcomming">Add Upcomming</a>

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