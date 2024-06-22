import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Typing = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    alert(`Submitted: ${inputValue}`);
  };

  return (
    
    <div className="container vh-100 d-flex flex-column justify-content-between">
      <div className="row my-auto">
        <div className="col-12">
        <h2 className="text-center">User Queries</h2>
          <textarea
            className="form-control"
            rows="15"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Typing;
