import React, { useState } from 'react';

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
    userType: '',
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

    if (!formData.cropType) {
      errors.cropType = 'Crop Type is required';
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
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form Submitted');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    select: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    label: {
      margin: '10px 0 5px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    error: {
      color: 'red',
      fontSize: '14px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
    submitButton: {
      padding: '10px',
      margin: '20px 0',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#28a745',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    radioGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.radioGroup}>
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
        <label style={styles.label} htmlFor="username">UserName:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Name..."
          style={styles.input}
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && <span style={styles.error}>{formErrors.username}</span>}

        <label style={styles.label} htmlFor="phoneNumber">Contact No:</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter Phone Number..."
          style={styles.input}
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        {formErrors.phoneNumber && <span style={styles.error}>{formErrors.phoneNumber}</span>}

        <label style={styles.label} htmlFor="emailaddress">Email:</label>
        <input
          type="text"
          name="emailaddress"
          placeholder="Enter Email..."
          style={styles.input}
          value={formData.emailaddress}
          onChange={handleInputChange}
        />
        {formErrors.emailaddress && <span style={styles.error}>{formErrors.emailaddress}</span>}

        <label style={styles.label} htmlFor="aadharNumber">Aadhar Number:</label>
        <input
          type="text"
          name="aadharNumber"
          placeholder="Enter Aadhar Number..."
          style={styles.input}
          value={formData.aadharNumber}
          onChange={handleInputChange}
        />
        {formErrors.aadharNumber && <span style={styles.error}>{formErrors.aadharNumber}</span>}

        <label style={styles.label} htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          name="pincode"
          placeholder="Enter Pincode..."
          style={styles.input}
          value={formData.pincode}
          onChange={handleInputChange}
        />
        {formErrors.pincode && <span style={styles.error}>{formErrors.pincode}</span>}

        <label style={styles.label} htmlFor="area">Area:</label>
        <input
          type="text"
          name="area"
          placeholder="Enter Area..."
          style={styles.input}
          value={formData.area}
          onChange={handleInputChange}
        />
        {formErrors.area && <span style={styles.error}>{formErrors.area}</span>}

        <label style={styles.label} htmlFor="cropType">Crop Type:</label>
        <input
          type="text"
          name="cropType"
          placeholder="Enter Crop Type..."
          style={styles.input}
          value={formData.cropType}
          onChange={handleInputChange}
        />
        {formErrors.cropType && <span style={styles.error}>{formErrors.cropType}</span>}

        <div style={styles.checkboxContainer}>
          <input
            id="agreeToTerms"
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
          />
          <label htmlFor="agreeToTerms" style={{ marginLeft: '8px' }}>Agree to the Terms and Conditions</label>
        </div>
        {formErrors.agreeToTerms && <span style={styles.error}>{formErrors.agreeToTerms}</span>}

        <button style={styles.submitButton} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
