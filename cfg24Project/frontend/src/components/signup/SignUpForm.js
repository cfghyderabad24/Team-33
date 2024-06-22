import React, { useState } from 'react';
import './SignUpForm1.css';
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    emailaddress: '',
    aadharNumber: '',
    pincode: '',
    area: '',
    cropType: '',
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.username) {
      errors.username = 'Username is required';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phoneNumber.match(phonePattern)) {
      errors.phoneNumber = 'Enter a valid 10-digit phone number';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailaddress.match(emailPattern)) {
      errors.emailaddress = 'Enter a valid email address';
    }

    const aadharPattern = /^[0-9]{12}$/;
    if (!formData.aadharNumber.match(aadharPattern)) {
      errors.aadharNumber = 'Enter a valid 12-digit Aadhar number';
    }

    const pincodePattern = /^[0-9]{6}$/;
    if (!formData.pincode.match(pincodePattern)) {
      errors.pincode = 'Enter a valid 6-digit Pincode';
    }

    if (!formData.area) {
      errors.area = 'Area is required';
    }


    if (!formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  
  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    axios.post('http://localhost:8000/create/record/', formData)
      .then(response => {
        console.log('Data submitted successfully', response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='form-container'>
      <h1>Sign Up</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className="radio-group">
          <label>
            <input
              type="radio"
              name="userType"
              value="Farmer"
              checked={formData.userType === 'Farmer'}
              onChange={handleInputChange}
            />
            Farmer
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="Admin"
              checked={formData.userType === 'Admin'}
              onChange={handleInputChange}
            />
            Admin
          </label>
        </div>
      <label htmlFor="User type">UserName:</label>
      
        
        <input
          type="text"
          name="username"
          placeholder="Enter Name...."
          className="input"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && <span className="error">{formErrors.username}</span>}
        
        <label>Contact no:</label>
        <input
          type="tel"
          name="phoneNumber"

          placeholder="Enter Phone Number...."
          className="input"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
        
        <label>Email:</label>
        <input
          type="text"
          name="emailaddress"
          placeholder="Enter Email...."
          className="input"
          value={formData.emailaddress}
          onChange={handleInputChange}
        />
        {formErrors.emailaddress && <span className="error">{formErrors.emailaddress}</span>}
        
        <label>Aadhar Number:</label>
        <input
          type="text"
          name="aadharNumber"
          placeholder="Enter Aadhar Number...."
          className="input"
          value={formData.aadharNumber}
          onChange={handleInputChange}
        />
        {formErrors.aadharNumber && <span className="error">{formErrors.aadharNumber}</span>}
        
        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          placeholder="Enter Pincode...."
          className="input"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        {formErrors.pincode && <span className="error">{formErrors.pincode}</span>}
        
        <label>Area:</label>
        <input
          type="text"
          name="area"
          placeholder="Enter Area...."
          className="input"
          value={formData.area}
          onChange={handleInputChange}
        />
        {formErrors.area && <span className="error">{formErrors.area}</span>}
        
        <div className='marketing'>
          <input
            id="allowEmail"
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
          />
          <label htmlFor="allowEmail">Agree to the Terms and Conditions</label>
        </div>
        {formErrors.agreeToTerms && <span className="error">{formErrors.agreeToTerms}</span>}
        
        <button className='submit' type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
