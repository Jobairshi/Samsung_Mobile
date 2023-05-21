import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/services')
        .then((res) => res.json())
        .then((data) => setServices(data))
    }, [])
    //console.log(services[0]);

    const handleDeleteService = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
          fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert('deleted successfully')
                const remainingServices = services.filter(
                  (service) => service._id !== id,
                )
                setServices(remainingServices)
              }
            })
        }
      }

      
    return (
        <Container className='text-center'>
            <h1 className='mar'>MOBILES</h1>
            <div className="services">
       {
        services.map((service)=>(
            <Service realService={service}
            handleDeleteService={handleDeleteService}
            ></Service>
        ))
       }
    </div>
        </Container>

    );
};

export default Services;