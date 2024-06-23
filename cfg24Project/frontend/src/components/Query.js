import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Query() {
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    console.log(inputValue)
    e.preventDefault();
    axios.post('http://localhost:8000/query/',{inputValue: inputValue})
      .then(response => {
        console.log('Data submitted successfully', response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile);

      // Here, you can add your upload logic, e.g., sending the file to a server using fetch or axios
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Example upload logic (replace with your server endpoint)
      fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      height: '100vh',
    },
    row: {
      width: '100%',
      marginTop: '16px',
    },
    textareaRow: {
      width: '100%',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textarea: {
      width: '100%',
      height: '100%',
      padding: '8px',
    },
    button: {
      width: '100%',
      marginTop: '16px',
    },
    submitButtonContainer: {
      width: '100%',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div className="col-12">
          <h2 className="text-center mb-4">Upload Image and Queries</h2>
          <div style={styles.textareaRow}>
        <div className="col-12">
          <textarea
            className="form-control"
            style={styles.textarea}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
          />
        </div>
      </div>
          <div className="custom-file mt-2 mb-2">
            <input type="file" className="custom-file-input" id="customFile" onChange={handleFileChange} />
            <label className="custom-file-label" htmlFor="customFile">
              {selectedFile ? selectedFile.name : 'Choose file'}
            </label>
          </div>
          <button className="btn btn-primary" style={styles.button} onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
      
      <div style={styles.submitButtonContainer}>
        <div className="col-12">
          <button className="btn btn-success" style={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Query;
