import React, { useContext, useState, useEffect } from 'react';
import { store } from '../App';
import { Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect for react-router-dom v6+
import axios from 'axios';

const Myprofile = () => {
  const [token, ] = useContext(store); // Access token and setToken from context
  const [data, setData] = useState(null); // State for user profile data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/myprofile', {
          headers: {
            'x-token': token, // Pass token in headers
          },
        })
        .then((res) => {
          setData(res.data); // Set profile data
          setLoading(false); // Stop loading
        })
        .catch((err) => {
          setError('Failed to fetch profile data.'); // Set error message
          setLoading(false); // Stop loading
        });
    }
  }, [token]); // Dependency array ensures this effect runs when the token changes

  // Redirect to login if token does not exist
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Show loading indicator or error message
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  // Render profile data if available
  return (
    <div>
      {data && (
        <center>
          <h1>Welcome, {data.name}!</h1>
          <p>Email: {data.email}</p>
          {/* Render additional data if needed */}
        </center>
      )}
    </div>
  );
};

export default Myprofile;
