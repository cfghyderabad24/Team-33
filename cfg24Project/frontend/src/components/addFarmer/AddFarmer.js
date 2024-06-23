import React, { useState } from 'react';

function AddFarmer() {
  const [formData, setFormData] = useState({
    farmersname: '',
    gender: '',
    age: '',
    pincode: '',
    aadharNumber: '',
    contactNumber: '',
    areaploughed: '',
    season: '',
    cropGrown: '',
    seedUsed: '',
    dateofseedsown: '',
    transplanting: '',
    irrigationmethod: '',
    fertilizersuse: '',
    dateofharvesting: '',
    yield: '',
    userType: '',
    emailaddress: '',
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.farmersname) {
      errors.farmersname = "Farmer's name is required";
    }

    if (!formData.contactNumber.match(/^[0-9]{10}$/)) {
      errors.contactNumber = 'Enter a valid 10-digit phone number';
    }

    if (!formData.aadharNumber.match(/^[0-9]{12}$/)) {
      errors.aadharNumber = 'Enter a valid 12-digit Aadhar number';
    }

    if (!formData.pincode.match(/^[0-9]{6}$/)) {
      errors.pincode = 'Enter a valid 6-digit Pincode';
    }

    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      errors.age = 'Enter a valid age';
    }

    if (!formData.emailaddress || !formData.emailaddress.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.emailaddress = 'Enter a valid email address';
    }

    if (!formData.areaploughed) {
      errors.areaploughed = 'Area ploughed is required';
    }

    if (!formData.season) {
      errors.season = 'Season is required';
    }

    if (!formData.cropGrown) {
      errors.cropGrown = 'Crop Grown is required';
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
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
      console.log('Form submitted: ', formData);
      alert('Form Submitted');
    } else {
      console.log('Form validation failed');
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Farmer</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="farmersname">Farmer's Name:</label>
        <input
          type="text"
          name="farmersname"
          placeholder="Enter Farmer's Name..."
          style={styles.input}
          value={formData.farmersname}
          onChange={handleInputChange}
        />
        {formErrors.farmersname && <span style={styles.error}>{formErrors.farmersname}</span>}

        <label style={styles.label} htmlFor="contactNumber">Contact No:</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Enter Phone Number..."
          style={styles.input}
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        {formErrors.contactNumber && <span style={styles.error}>{formErrors.contactNumber}</span>}

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

        <label style={styles.label} htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter Age..."
          style={styles.input}
          value={formData.age}
          onChange={handleInputChange}
        />
        {formErrors.age && <span style={styles.error}>{formErrors.age}</span>}

        <label style={styles.label} htmlFor="emailaddress">Email Address:</label>
        <input
          type="email"
          name="emailaddress"
          placeholder="Enter Email Address..."
          style={styles.input}
          value={formData.emailaddress}
          onChange={handleInputChange}
        />
        {formErrors.emailaddress && <span style={styles.error}>{formErrors.emailaddress}</span>}

        <label style={styles.label} htmlFor="areaploughed">Area Ploughed:</label>
        <input
          type="text"
          name="areaploughed"
          placeholder="Enter Area Ploughed..."
          style={styles.input}
          value={formData.areaploughed}
          onChange={handleInputChange}
        />
        {formErrors.areaploughed && <span style={styles.error}>{formErrors.areaploughed}</span>}

        <label style={styles.label} htmlFor="season">Season:</label>
        <select
          name="season"
          value={formData.season}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value="">Select Season</option>
          <option value="Kharif">Summer</option>
          <option value="Rabi">Winter</option>
          <option value="Zaid">Rainy</option>
        </select>
        {formErrors.season && <span style={styles.error}>{formErrors.season}</span>}

        <label style={styles.label} htmlFor="cropGrown">Crop Grown:</label>
        <select
          name="cropGrown"
          value={formData.cropGrown}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value="">Select Crop</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
        </select>
        {formErrors.cropGrown && <span style={styles.error}>{formErrors.cropGrown}</span>}

        <label style={styles.label} htmlFor="seedUsed">Seed Used:</label>
        <input
          type="text"
          name="seedUsed"
          placeholder="Enter Seed Used..."
          style={styles.input}
          value={formData.seedUsed}
          onChange={handleInputChange}
        />

        <label style={styles.label} htmlFor="dateofseedsown">Date of Seed Sown:</label>
        <input
          type="date"
          name="dateofseedsown"
          style={styles.input}
          value={formData.dateofseedsown}
          onChange={handleInputChange}
        />

        <label style={styles.label} htmlFor="transplanting">Transplanting:</label>
        <input
          type="text"
          name="transplanting"
          placeholder="Enter Transplanting Details..."
          style={styles.input}
          value={formData.transplanting}
          onChange={handleInputChange}
        />

        <label style={styles.label} htmlFor="irrigationmethod">Irrigation Method:</label>
        <select
          name="irrigationmethod"
          value={formData.irrigationmethod}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value="">Select Irrigation Method</option>
          <option value="Drip">Drip</option>
          <option value="Sprinkler">Sprinkler</option>
          <option value="Surface">Surface</option>
        </select>

        <label style={styles.label} htmlFor="gender">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {formErrors.gender && <span style={styles.error}>{formErrors.gender}</span>}

        <label style={styles.label} htmlFor="fertilizersuse">Fertilizers Used:</label>
        <input
          type="text"
          name="fertilizersuse"
          placeholder="Enter Fertilizers Used..."
          style={styles.input}
          value={formData.fertilizersuse}
          onChange={handleInputChange}
        />

        <label style={styles.label} htmlFor="dateofharvesting">Date of Harvesting:</label>
        <input
          type="date"
          name="dateofharvesting"
          style={styles.input}
          value={formData.dateofharvesting}
          onChange={handleInputChange}
        />

        <label style={styles.label} htmlFor="yield">Yield:</label>
        <input
          type="text"
          name="yield"
          placeholder="Enter Yield..."
          style={styles.input}
          value={formData.yield}
          onChange={handleInputChange}
        />

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

export default AddFarmer;
