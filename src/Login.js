import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.config";
import "./Login.css";

const Login = () => {
  let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        // some fancy firebase login shiit
        auth
        .signInWithEmailAndPassword(email, password)

        .then((auth) => {
          if (auth){
            history.push('/')
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage);
        });

         
    }
    const registerButton = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // Successfully Created ACcount!
          if (auth){
            history?.push('/')
          }
          console.log(auth);
        })
        .catch((error) => {
          // .. Cache Error!
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage);
          // some fancy firebase register shiit         
        });
    }
  return (
    <div className="login">
      <Link to='/'>
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
          <h1>Sign In</h1>
          <form action="">

              <h5>Email</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

              <button type='submit' onClick={signIn} className='signInButton'>Sign In</button>
          </form>
          <p>By signing-in you agree to Amazon's Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

          <button onClick={registerButton} className='register_button'>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
