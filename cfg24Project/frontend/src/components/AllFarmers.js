import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const farmers = [
    {
        name: 'John Doe',
        phone: '+91 98765 43210',
        place: 'Vellore',
        land: '10 acres'
    },
    {
        name: 'Jane Smith',
        phone: '+91 87654 32109',
        place: 'Chennai',
        land: '5 acres'
    },
    {
        name: 'Sam Wilson',
        phone: '+91 76543 21098',
        place: 'Hyderabad',
        land: '8 acres'
    },
    {
        name: 'Lisa Ray',
        phone: '+91 65432 10987',
        place: 'Vijayawada',
        land: '12 acres'
    },
    {
        name: 'Paul Adams',
        phone: '+91 54321 09876',
        place: 'Chennai',
        land: '6 acres'
    },
    {
        name: 'John Wick',
        phone: '+91 70951 09876',
        place: 'Narsapur',
        land: '6 acres'
    },
];

function AllFarmers() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFarmers = farmers.filter(farmer => 
        farmer.place.toLowerCase().includes(searchTerm.toLowerCase())
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
                                    <h2 className="card-title text-success">{farmer.name}</h2>
                                    <p className="card-text"><strong>Phone:</strong> <a href={`tel:${farmer.phone}`}>{farmer.phone}</a></p>
                                    <p className="card-text"><strong>Place:</strong> {farmer.place}</p>
                                    <p className="card-text"><strong>Land:</strong> {farmer.land}</p>
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
