import React, { useState } from 'react';
import './AddFarmer.css';

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

  return (
    <div className='form-container mt-5 ' >
      <h1>Add Farmer</h1>
      <form className='form' onSubmit={handleSubmit}>
        
        <label htmlFor="farmersname">Farmer's Name:</label>
        <input
          type="text"
          name="farmersname"
          placeholder="Enter Farmer's Name..."
          className="input"
          value={formData.farmersname}
          onChange={handleInputChange}
        />
        {formErrors.farmersname && <span className="error">{formErrors.farmersname}</span>}

        <label htmlFor="contactNumber">Contact No:</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Enter Phone Number..."
          className="input"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}

        <label htmlFor="aadharNumber">Aadhar Number:</label>
        <input
          type="text"
          name="aadharNumber"
          placeholder="Enter Aadhar Number..."
          className="input"
          value={formData.aadharNumber}
          onChange={handleInputChange}
        />
        {formErrors.aadharNumber && <span className="error">{formErrors.aadharNumber}</span>}

        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          name="pincode"
          placeholder="Enter Pincode..."
          className="input"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        {formErrors.pincode && <span className="error">{formErrors.pincode}</span>}

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter Age..."
          className="input"
          value={formData.age}
          onChange={handleInputChange}
        />
        {formErrors.age && <span className="error">{formErrors.age}</span>}

        <label htmlFor="emailaddress">Email Address:</label>
        <input
          type="email"
          name="emailaddress"
          placeholder="Enter Email Address..."
          className="input"
          value={formData.emailaddress}
          onChange={handleInputChange}
        />
        {formErrors.emailaddress && <span className="error">{formErrors.emailaddress}</span>}

        <label htmlFor="areaploughed">Area Ploughed:</label>
        <input
          type="text"
          name="areaploughed"
          placeholder="Enter Area Ploughed..."
          className="input"
          value={formData.areaploughed}
          onChange={handleInputChange}
        />
        {formErrors.areaploughed && <span className="error">{formErrors.areaploughed}</span>}

        <label htmlFor="season">Season:</label>
        <select
          name="season"
          value={formData.season}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Season</option>
          <option value="Kharif">Summer</option>
          <option value="Rabi">Winter</option>
          <option value="Zaid">Rainy</option>
        </select>
        {formErrors.season && <span className="error">{formErrors.season}</span>}

        <label htmlFor="cropGrown">Crop Grown:</label>
        <select
          name="cropGrown"
          value={formData.cropGrown}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Crop</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
        </select>
        {formErrors.cropGrown && <span className="error">{formErrors.cropGrown}</span>}

        <label htmlFor="seedUsed">Seed Used:</label>
        <input
          type="text"
          name="seedUsed"
          placeholder="Enter Seed Used..."
          className="input"
          value={formData.seedUsed}
          onChange={handleInputChange}
        />

        <label htmlFor="dateofseedsown">Date of Seed Sown:</label>
        <input
          type="date"
          name="dateofseedsown"
          className="input"
          value={formData.dateofseedsown}
          onChange={handleInputChange}
        />

        <label htmlFor="transplanting">Transplanting:</label>
        <input
          type="text"
          name="transplanting"
          placeholder="Enter Transplanting Details..."
          className="input"
          value={formData.transplanting}
          onChange={handleInputChange}
        />

        <label htmlFor="irrigationmethod">Irrigation Method:</label>
        <select
          name="irrigationmethod"
          value={formData.irrigationmethod}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Irrigation Method</option>
          <option value="Drip">Drip</option>
          <option value="Sprinkler">Sprinkler</option>
          <option value="Surface">Surface</option>
        </select>

        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {formErrors.gender && <span className="error">{formErrors.gender}</span>}

        <label htmlFor="fertilizersuse">Fertilizers Used:</label>
        <input
          type="text"
          name="fertilizersuse"
          placeholder="Enter Fertilizers Used..."
          className="input"
          value={formData.fertilizersuse}
          onChange={handleInputChange}
        />

        <label htmlFor="dateofharvesting">Date of Harvesting:</label>
        <input
          type="date"
          name="dateofharvesting"
          className="input"
          value={formData.dateofharvesting}
          onChange={handleInputChange}
        />

        <label htmlFor="yield">Yield:</label>
        <input
          type="text"
          name="yield"
          placeholder="Enter Yield..."
          className="input"
          value={formData.yield}
          onChange={handleInputChange}
        />

        <div className='marketing'>
          <input
            id="agreeToTerms"
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
          />
          <label htmlFor="agreeToTerms">Agree to the Terms and Conditions</label>
        </div>
        {formErrors.agreeToTerms && <span className="error">{formErrors.agreeToTerms}</span>}

        <button className='submit' type="submit">
          Sign Up
        </button>
      </form>
      </div>
  );
}

export default AddFarmer;
