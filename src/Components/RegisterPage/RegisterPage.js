import React, { useState } from 'react';
import './RegisterPage.css';
import axios from 'axios';

function RegisterPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( email.substring(0,5).toLowerCase() === "admin")
    {
      alert("unsupported Mail Type.Try a new email")
     // window.location.href = '/RegisterPage'
      throw new Error('unsupported Mail Type');
    }
    const newService = {
      email,password
  }

  fetch("http://localhost:5000/UserInfo",{
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
        window.location.href ='/LoginPage';
    }
}) 
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {showMessage && (
        <div className="message-box">
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
