import React, { useState } from 'react';

const Notify = () => {
  const [formData, setFormData] = useState({
    location: '',
    type: '',
    crop: '',
    soil: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="container mt-5">
      <h2>Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <textarea
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="organic"
                value="organic"
                onChange={handleChange}
                checked={formData.type === 'organic'}
              />
              <label className="form-check-label" htmlFor="organic">Organic</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="inorganic"
                value="inorganic"
                onChange={handleChange}
                checked={formData.type === 'inorganic'}
              />
              <label className="form-check-label" htmlFor="inorganic">Inorganic</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="crop" className="form-label">Crop</label>
          <textarea
            className="form-control"
            id="crop"
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="soil" className="form-label">Soil Type</label>
          <textarea
            className="form-control"
            id="soil"
            name="soil"
            value={formData.soil}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="query" className="form-label">Query</label>
          <textarea
            className="form-control"
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}; 

export default Notify;
