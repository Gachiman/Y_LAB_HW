import { useState } from 'react'
import { mockFetch } from '../../utils/utils.js';
import Input from '../Input/Input.jsx';

import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailVar = e.target.elements.email.value;
    let passVar = e.target.elements.password.value;
    let isValid = true;

    let regExpEmailCheck = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regExpEmailCheck.test(emailVar)) {
      setEmailError("Invalid email");
      isValid = false;
    }
    if (passVar.length < 4) {
      setPassError("Invalid password (need > 3 characters)");
      isValid = false;
    }
    if (!isValid) return;
    
    mockFetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailVar,
        password: passVar,
      }),
    })
      .catch(() => { alert('Something went wrong...')});
  };

    return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate className="auth-form">
        <Input
          label="Email" 
          placeholder="Email@gmail.com" 
          value={email}
          onChange={setEmail} 
          type="email" 
          name="email" 
          id="email"
          error={emailError} 
          errorReset={setEmailError} 
        />
        
        <Input 
          label="Password" 
          placeholder="****" 
          value={pass}
          onChange={setPass} 
          type="password" 
          name="password" 
          id="password"
          error={passError} 
          errorReset={setPassError} 
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;