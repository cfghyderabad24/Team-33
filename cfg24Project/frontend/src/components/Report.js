import React from 'react';

const Report = () => {
  const formData = {
    username: 'John Doe',
    address: '1234 Elm Street, Springfield, IL',
    aadhaar: '1234-5678-9012',
    mobile: '9876543210',
    farmSize: '5 acres'
  };

  const soilData = [
    { parameter: 'Nitrogen', testValue: '20', unit: 'mg/kg', rating: 'Good' },
    { parameter: 'Phosphorus', testValue: '15', unit: 'mg/kg', rating: 'Moderate' },
    { parameter: 'Potassium', testValue: '25', unit: 'mg/kg', rating: 'Excellent' },
    { parameter: 'pH', testValue: '6.5', unit: '', rating: 'Neutral' }
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="mb-4">Soil Report</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                rows="2"
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="aadhaar" className="form-label">Aadhaar Number</label>
              <input
                type="text"
                className="form-control"
                id="aadhaar"
                name="aadhaar"
                value={formData.aadhaar}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="farmSize" className="form-label">Farm Size</label>
              <input
                type="text"
                className="form-control"
                id="farmSize"
                name="farmSize"
                value={formData.farmSize}
                readOnly
              />
            </div>
            <h4 className="mt-4">Soil Chemical Compositions</h4>
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Test Value</th>
                  <th>Unit</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {soilData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="parameter"
                        value={row.parameter}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="testValue"
                        value={row.testValue}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="unit"
                        value={row.unit}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="rating"
                        value={row.rating}
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
