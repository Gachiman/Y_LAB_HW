import { useState } from 'react'
import { mockFetch } from '../../utils/mockFetch.js';
import { emailCheck, passwordCheck } from '../..//utils/validationCheck.js'
import Input from '../Input/Input.jsx';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!emailCheck(email)) {
      setEmailError("Invalid email");
      isValid = false;
    }
    if (!passwordCheck(pass)) {
      setPassError("Invalid password");
      isValid = false;
    }
    if (!isValid) return;

    mockFetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .catch(() => { alert('Something went wrong...')});
  };

    return (
    <div className="auth-container">
      <h2 className="form-header">Login</h2>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Input
          label="Email:" 
          placeholder="Email@gmail.com" 
          value={email}
          onChange={setEmail} 
          type="email" 
          name="email" 
          error={emailError} 
          errorReset={setEmailError} 
        />
        
        <Input 
          label="Password:" 
          placeholder="****" 
          value={pass}
          onChange={setPass} 
          type="password" 
          name="password" 
          error={passError} 
          errorReset={setPassError}
        />

        <button className="submit-button" type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;