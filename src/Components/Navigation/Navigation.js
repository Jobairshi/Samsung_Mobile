
import React, {} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
  const storedUsername = localStorage.getItem('username');
  console.log(storedUsername)
  const storedPassword = localStorage.getItem('password');
  const loggin = localStorage.getItem('logggin');
  let isAdmin
  if(storedUsername != null)
  isAdmin = storedUsername.substring(0,5);
  function LogOUtt()
  {
    const con = window.confirm('are sure to logout??');
    if(con)
    {
      localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.setItem('logggin',false);
    }
    
  }
  
  // console.log("logged in " + loggin);
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
           

          {(isAdmin === "admin" ||isAdmin === "Admin" )? (
                         <Nav.Link  id="buts" href="/Services">All mobile</Nav.Link>             
            ) : (
              ""
            )}

            <Nav.Link  id="buts" href="/Contact">Contacts</Nav.Link>
            

            {(isAdmin === "admin" ||isAdmin === "Admin" )? (
              <Nav.Link  id="buts" href="/AddService">Add Mobile</Nav.Link>  
                          
            ) : (
              ""
            )}

            {(isAdmin === "admin" ||isAdmin === "Admin" )? (
                         <Nav.Link  id="buts" href="/AddUpcomming">Add Upcomming</Nav.Link>              
            ) : (
              ""
            )}
            <Nav.Link  id="buts" href="/Banner">Banner</Nav.Link>
            <Nav.Link  id="buts" href="/Extra">Upcomming</Nav.Link>
            
            
             {storedPassword? (
              <Nav.Link id="buts"onClick={LogOUtt} href="/">Logout</Nav.Link>
              
            ) : (
              <Nav.Link id="buts" href="/LoginPage">Login</Nav.Link>
            )}
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