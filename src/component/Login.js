import React, { useState, useContext } from 'react';
import axios from 'axios';
import { store } from '../App'; // Assuming `store` is a Context API store
import { Navigate } from 'react-router-dom'; // Use Navigate instead of redirect

const Login = () => {
  const [token, setToken] = useContext(store); // Access token and setToken from context
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // For handling errors, if any

  // Handle input field changes
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', data)
      .then((res) => {
        setToken(res.data.token); // Save token to the context
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Login failed. Please try again.'); // Handle errors gracefully
      });
  };

  // Redirect to `/myprofile` if token exists
  if (token) {
    return <Navigate to="/myprofile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display errors */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
