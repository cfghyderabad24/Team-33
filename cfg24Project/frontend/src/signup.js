import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpForm() {
  const [formData, setFormData] = useState({
    filed: '',
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

    if (!formData.filed) {
      errors.filed = 'Field is required';
    }

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

    console.log('Validation Errors:', errors);

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
    <div className="container mt-5">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="farmersname" className="form-label">Farmer's Name:</label>
          <input
            type="text"
            name="farmersname"
            className="form-control"
            placeholder="Enter Farmer's Name..."
            value={formData.farmersname}
            onChange={handleInputChange}
            required
          />
          {formErrors.farmersname && <div className="text-danger">{formErrors.farmersname}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact No:</label>
          <input
            type="tel"
            name="contactNumber"
            className="form-control"
            placeholder="Enter Phone Number..."
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          {formErrors.contactNumber && <div className="text-danger">{formErrors.contactNumber}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="aadharNumber" className="form-label">Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            className="form-control"
            placeholder="Enter Aadhar Number..."
            value={formData.aadharNumber}
            onChange={handleInputChange}
            required
          />
          {formErrors.aadharNumber && <div className="text-danger">{formErrors.aadharNumber}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode:</label>
          <input
            type="text"
            name="pincode"
            className="form-control"
            placeholder="Enter Pincode..."
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
          {formErrors.pincode && <div className="text-danger">{formErrors.pincode}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="areaploughed" className="form-label">Area Ploughed:</label>
          <input
            type="text"
            name="areaploughed"
            className="form-control"
            placeholder="Enter Area Ploughed..."
            value={formData.areaploughed}
            onChange={handleInputChange}
            required
          />
          {formErrors.areaploughed && <div className="text-danger">{formErrors.areaploughed}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="season" className="form-label">Season:</label>
          <select
            name="season"
            value={formData.season}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select Season</option>
            <option value="Kharif">Summer</option>
            <option value="Rabi">Winter</option>
            <option value="Zaid">Rainy</option>
          </select>
          {formErrors.season && <div className="text-danger">{formErrors.season}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="cropGrown" className="form-label">Crop Grown:</label>
          <select
            name="cropGrown"
            value={formData.cropGrown}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select Crop</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Maize">Maize</option>
          </select>
          {formErrors.cropGrown && <div className="text-danger">{formErrors.cropGrown}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="seedUsed" className="form-label">Seed Used:</label>
          <input
            type="text"
            name="seedUsed"
            className="form-control"
            placeholder="Enter Seed Used..."
            value={formData.seedUsed}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateofseedsown" className="form-label">Date of Seed Sown:</label>
          <input
            type="date"
            name="dateofseedsown"
            className="form-control"
            value={formData.dateofseedsown}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="transplanting" className="form-label">Transplanting:</label>
          <input
            type="text"
            name="transplanting"
            className="form-control"
            placeholder="Enter Transplanting Details..."
            value={formData.transplanting}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="irrigationmethod" className="form-label">Irrigation Method:</label>
          <select
            name="irrigationmethod"
            value={formData.irrigationmethod}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select Irrigation Method</option>
            <option value="Drip">Drip</option>
            <option value="Sprinkler">Sprinkler</option>
            <option value="Surface">Surface</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {formErrors.gender && <div className="text-danger">{formErrors.gender}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="fertilizersuse" className="form-label">Fertilizers Used:</label>
          <input
            type="text"
            name="fertilizersuse"
            className="form-control"
            placeholder="Enter Fertilizers Used..."
            value={formData.fertilizersuse}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateofharvesting" className="form-label">Date of Harvesting:</label>
          <input
            type="date"
            name="dateofharvesting"
            className="form-control"
            value={formData.dateofharvesting}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="yield" className="form-label">Yield:</label>
          <input
            type="text"
            name="yield"
            className="form-control"
            placeholder="Enter Yield..."
            value={formData.yield}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            id="allowEmail"
            type="checkbox"
            name="agreeToTerms"
            className="form-check-input"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="allowEmail" className="form-check-label">Agree to the Terms and Conditions</label>
          {formErrors.agreeToTerms && <div className="text-danger">{formErrors.agreeToTerms}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;