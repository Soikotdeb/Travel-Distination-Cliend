

import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrUsername: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };


return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ border: "2px solid #ccc", backgroundColor: "#f7f7f7", width: "50%", padding: "20px", borderRadius: "10px"}}>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="emailOrUsername" className="form-label fw-bold">Email or Username</label>
          <input type="text" className="form-control" id="emailOrUsername" name="emailOrUsername" value={formData.emailOrUsername} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold text-decoration-none">Already have an account?<Link to="/login" className="mx-2 text-warning">Login</Link></span>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <button type="submit" className="btn btn-primary fw-bold" >Create an account</button>
          <br />  
        </div>
        <div>
            <button type="button" className="btn btn-outline-primary me-2 fw-bold"> <FaFacebook/> Continue with Facebook</button>
            <button type="button" className="btn btn-outline-primary fw-bold"><FaGoogle/> Continue with Google</button>
          </div>
      </form>
    </div>
  </div>
);
};
export default SignUpForm;

