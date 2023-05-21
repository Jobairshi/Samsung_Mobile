import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/UserInfo')
      .then(response => {
        const userData = response.data;
        const userDataArray = Object.keys(userData).map(key => ({ ...userData[key], id: key }));
        setUsers(userDataArray);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === username && user.password === password);
    if (foundUser) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('logggin', true);

      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }
  };

  function gotoPage() {
    window.location.href = '/RegisterPage';
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button type="button" className="create-account-button" onClick={gotoPage}>
        Create New Account
      </button>
    </div>
  );
}

export default LoginPage;
