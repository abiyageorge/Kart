import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the email and password are filled out
    if (!email || !password) {
      setErrorMessage('Please enter both email and password!');
      return;
    }

    // Example login logic (replace this with actual authentication logic)
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      setErrorMessage('');
      // Redirect or perform other actions after successful login
    } else {
      setErrorMessage('Invalid email or password!');
    }
  };

  const loginStyle = {
    backgroundColor: '#f4f4f9',
    padding: '50px 20px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  };

  return (
    <div style={loginStyle}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
