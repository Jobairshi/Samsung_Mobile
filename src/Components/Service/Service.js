import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
     const storedUsername = localStorage.getItem('username');
    console.log(storedUsername)
    const storedPassword = localStorage.getItem('password');
    let isAdmin
  if(storedUsername != null)
  isAdmin = storedUsername.substring(0,5);
    const{_id,name,price,desc,img} = props.realService
    const {handleDeleteService} = props
    return (
        <div>
             <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {
            desc
           }
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h4>
          {
            price
          } Tk only  
          </h4> 
          
        </Card.Footer>

        {(isAdmin === "admin" ||isAdmin === "Admin" )? (
                    <Card.Footer id='mid'>
                    <Link
                     to={`/updateService/${_id}`}>
                            <Button variant="primary gradt" className="ms-4">
                             Update
                            </Button>
                          </Link>
            
                          
                          <Button onClick={()=>handleDeleteService(_id)} variant="primary gradt" className='ms-5'>
                            Delete
                            </Button>
                    </Card.Footer>              
            ) : (
              ""
            )}
        
      </Card>
        </div>
    );
};

export default Service;