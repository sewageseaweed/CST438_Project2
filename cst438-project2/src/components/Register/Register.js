import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Register.css';

// async function registerUser(credentials) {
//     return fetch('http://localhost:8080/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
// }

export default function Register() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [reenterpassword, setReenterPassword] = useState();
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password
  //   });
  //   setToken(token);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      username: 'admin',
      password: 'admin'
    }
    if ((username === hardcodedCred.username) && (password === hardcodedCred.password) && (password === reenterpassword)) {
      //combination is good. Register them.

    } else {
      //bad combination
      alert('wrong email or password combination');
    }
  }

  return(
    <div className="register-wrapper">
      <form onSubmit={handleSubmit} className="card mx-auto w-50 p-3 m-3">
        <h1>Register</h1>
        <label className="p-3">
          <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label className="p-3">
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label className="p-3">
          <input type="password" placeholder="Reenter Password" onChange={e => setReenterPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  )
}