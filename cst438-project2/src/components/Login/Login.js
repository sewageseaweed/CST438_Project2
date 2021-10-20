import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect, useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Login.css';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
// }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  // const handleSubmit = async e => {
  //   const user = { username, password };

  //   const response = await.axios.post (
  //     //http login api request here
  //   );

  //   //Set state
  //   setUser(response.data);
  //   //store in localstorage
  //   localStorage.setItem('user', response.data)
  // }
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //hardcoded method below vvvvvvvvvvvvvvvvvvvvvv
    let hardcodedCred = {
      username: 'admin',
      password: 'admin'
    }
    if ((username === hardcodedCred.username) && (password === hardcodedCred.password)) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = '123456abcdef';
      setToken(token);
    } else {
      //bad combination
      alert('wrong email or password combination');
    }
  }
  return(
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="card mx-auto w-50 p-3 m-3">
      <h1>Log In</h1>
        <label className="p-3">
          <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label className="p-3">
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>

    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}