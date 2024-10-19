import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import App from './App'
import './style.css';

const Login = () => {
  
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(null);

   const handleSubmit = (event) => {
       event.preventDefault();
       if (username === 'admin' && password === 'password') {
            <App />
       } else {
           setError('Invalid username or password');
       }
   };

   return (
       <div className='square'>

           <form onSubmit={handleSubmit}>
           <div class="login">
			<h2>Login</h2>
			<div class="inputBx">
				<input type="text" placeholder="Username"/>
			</div>
			<div class="inputBx">
				<input type="password" placeholder="Password"/>
			</div>
			<div class="inputBx">
				<input type="submit" value="Log In"/>
                {error && <p style={{ color: 'red' }}>{error}</p>}
			</div>
		</div>
               
           </form>
       </div>
   );
};

export default Login;