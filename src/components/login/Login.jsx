import { useState } from 'react'
import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} 
               type="email" placeholder="Youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} 
               type="password" placeholder="Your password" id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;