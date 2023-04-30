import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add code to submit the login form
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ border: "2px solid #ccc", backgroundColor: "#f7f7f7", width: "50%", padding: "20px", borderRadius: "10px"}}>
  <h1 className='fw-bold' style={{textDecoration: 'none'}}>Login</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="fw-bold">Username or Email address</Form.Label>
      <Form.Control
        type="email"
        name='email'
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="fw-bold">Password</Form.Label>
      <Form.Control
        type="password"
        name='password'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check
        type="checkbox"
        label="Remember me"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
    </Form.Group>

    
    <div className="d-flex justify-content-center mb-4">
          <button type="submit" className="btn btn-primary fw-bold" >Login</button>
          <br />  
        </div>
  </Form>
  <div className="d-flex align-items-center my-3">
    <span className='fw-bold text-decoration-none'>Don't have an account?<Link to="/signup" className="mx-2 text-warning">

      Create an account
    </Link> </span>
    <Link to="" className="mx-2 fw-bold" style={{textDecoration: 'none'}}>
      Forgot password?
    </Link>
  </div>
  <div className="d-flex justify-content-between">
    <Button variant="outline-primary" className="btn btn-block fw-bold mx-2">
     <FaFacebook/> Continue with Facebook
    </Button>
    <Button variant="outline-danger" className="btn btn-block fw-bold mx-2">
      <FaGoogle/> Continue with Google
    </Button>
  </div>
</div>
</div>
  );
};

export default LoginForm;
