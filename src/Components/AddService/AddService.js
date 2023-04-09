import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddService = () => {
    const nameRef = useRef()
    const PriceRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()



    const handleAddService=(e)=>{

        const name = nameRef.current.value;
        const price = PriceRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        
        const newService = {
            name,price,desc,img
        }
        //empty form submit kora teke atkai..
        if(newService.name === "")
        {
           alert("No data inserted!!")
           window.location.replace("/AddService");
        }
        e.preventDefault()
        fetch("http://localhost:5000/services",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            //it will conver the data to JSON data
            body:JSON.stringify(newService),
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.insertedId)
            {
                alert("data is inserted Successfully Added in DataBase")
                window.location.replace("/AddService");
            }
        }) 

        
    }


    return (
        <div>
         <Form onSubmit ={handleAddService}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Name</Form.Label>
        {/* //eikane ref use krosi jate konta ki seita DB ke bola jai */}
        <Form.Control ref = {nameRef} type="text" placeholder="Enter Mobile Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Price</Form.Label>
        <Form.Control ref = {PriceRef} type="text" placeholder="Enter Mobile Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Description</Form.Label>
        <Form.Control ref = {descRef} type="text" placeholder="Enter Mobile Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Image Link</Form.Label>
        <Form.Control ref = {imgRef} type="text" placeholder="Enter Mobile Image Link" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default AddService;