import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import { json, Link, Navigate, redirect, useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const UpdateService = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [serviceId])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updatedService = {
      name: updatedName,
      price: service.price,
      img: service.img,
      desc: service.desc,
    }
    setService(updatedService)
  }
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value
    const updatedService = {
      name: service.name,
      price: updatedPrice,
      img: service.img,
      desc: service.desc,
    }
    setService(updatedService)
  }
  const handledescChange = (e) => {
    const updateddesc = e.target.value
    const updatedService = {
      name: service.name,
      price: service.price,
      img: service.img,
      desc: updateddesc,
    }
    setService(updatedService)
  }
  const handleImageChange = (e) => {
    const updatedImg = e.target.value
    const updatedService = {
      name: service.name,
      price: service.price,
      img: updatedImg,
      desc: service.desc,
    }
    setService(updatedService)
  }

  

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/services/${serviceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) 
        {
            if(window.confirm('Update Successful,Want to navigate to index page'))
            {
                window.location.replace("/");
                
              //  alert('sdasldkjsd');
            }
           
           // setService({})
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || ''}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Price</Form.Label>
          <Form.Control
            type="text"
            value={service.price || ''}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service desc</Form.Label>
          <Form.Control
            type="text"
            value={service.desc || ''}
            onChange={handledescChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Image</Form.Label>
          <Form.Control
            type="text"
            value={service.img || ''}
            onChange={handleImageChange}
          />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Update
        </Button>
       
        
      
      </Form>
    </div>
  )
}

export default UpdateService