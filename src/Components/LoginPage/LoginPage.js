import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showMessage, setShowMessage] = useState(false);
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    // fetch user data from server on component mount
    axios.get('http://localhost:5000/UserInfo')
      .then(response => {
        const userData = response.data;
        const userDataArray = Object.keys(userData).map(key => ({ ...userData[key], id: key }));
        setUsers(userDataArray);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === username && user.password === password);
    if (foundUser) {
      window.location.href ='/';
      //setShowMessage(true);
    } else {
      alert('Invalid email or password');
    }
  };
  
  function gotoPage()
  {
    window.location.href ='/RegisterPage';

  }
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button type="submit"  onClick={gotoPage} >create new account</button>
    </div>
  );
}

export default LoginPage;
