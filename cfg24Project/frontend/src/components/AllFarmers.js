import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const farmers = [
];


    

function AllFarmers() {
    const [searchTerm, setSearchTerm] = useState('');
    const [farmers, setfarmers] = useState([]);

    useEffect(() => {
        const fetchfarmers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/show/record/');
                console.log(response);
                setfarmers(response.data);
            } catch (error) {
                console.error('Error fetching farmers:', error);
            }
        };

        fetchfarmers();
    }, []);
    const filteredFarmers = farmers.filter(farmer => 
        farmer.area.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container my-5">
            <main className="py-4">
                <div className="mb-4">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search by place..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4 farmer-list">
                    {filteredFarmers.map((farmer, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h2 className="card-title text-success">{farmer.f_name}</h2>
                                    <p className="card-text"><strong>Contact Number:</strong> {farmer.contact_no}</p>
                                    <p className="card-text"><strong>Place:</strong> {farmer.area}</p>
                                    <p className="card-text"><strong>PinCode:</strong> {farmer.pincode}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <style>{`
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    color: #000000;
                }

                .farmer-list {
                    max-height: 80vh;
                    overflow-y: auto;
                }

                .farmer-list::-webkit-scrollbar {
                    width: 10px;
                }

                .farmer-list::-webkit-scrollbar-thumb {
                    background: #555;
                    border-radius: 5px;
                }

                .farmer-list::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                .card-title {
                    font-size: 1.5rem;
                }

                .card-text a {
                    color: #2E8B57;
                    text-decoration: none;
                }

                .card-text a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .row-cols-md-2 {
                        row-cols: 1;
                    }
                }
            `}</style>
        </div>
    );
}

export default AllFarmers;
