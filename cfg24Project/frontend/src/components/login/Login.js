import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [phoneNum, setPhoneNum] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();

    const onButtonClick = () => {
        setPhoneNumError('');
        setNameError('');

        if (phoneNum === '') {
            setPhoneNumError('Please enter your Mobile Number');
            return;
        }

        if (phoneNum.length !== 10) {
            setPhoneNumError('Please enter a valid Mobile Number');
            return;
        }

        if (name === '') {
            setNameError('Please enter your name');
            return;
        }

        if (userType === 'admin') {
            navigate('/admin');
        } else if (userType === 'farmer') {
            navigate('/farmerDashboard');
        } else {
            alert('Please select a user type');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label>User type</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="userType"
                                        id="admin"
                                        value="admin"
                                        onChange={(ev) => setUserType(ev.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="admin">
                                        Admin
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="userType"
                                        id="Farmer"
                                        value="farmer"
                                        onChange={(ev) => setUserType(ev.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="Farmer">
                                        Farmer
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phoneNum">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNum"
                                    value={phoneNum}
                                    placeholder="Enter your Mobile Number"
                                    onChange={(ev) => setPhoneNum(ev.target.value)}
                                />
                                {phoneNumError && <div className="text-danger">{phoneNumError}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={(ev) => setName(ev.target.value)}
                                />
                                {nameError && <div className="text-danger">{nameError}</div>}
                            </div>
                            <div className="form-group mb-3 text-center">
                                <button className="btn btn-primary" onClick={onButtonClick}>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
