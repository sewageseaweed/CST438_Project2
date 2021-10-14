import React, { useState } from 'react';
import Login from '../Login/Login';

export default function Dashboard() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return(
    <h2>Dashboard</h2>

  );
}