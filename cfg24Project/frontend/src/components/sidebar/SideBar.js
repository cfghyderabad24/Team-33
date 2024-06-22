import React, { useState } from 'react'
import { FaHome, FaFire, FaHistory, FaClock, FaThumbsUp, FaChevronDown, FaBars } from "react-icons/fa";
import { BsClipboard2Heart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './SideBar.css'


function SideBar({ isCollapsed, toggleSidebar }) {
    const [activeItem, setActiveItem] = useState("viewProfile");


    const navigate = useNavigate();

    const handleNavigation = () => {
        window.location.href = "http://localhost:8501";
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        navigate(`/admin/${item}`);
    };


    return (
        <div className="side-menu-container">
            <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
                <ul className="menu-items">

                    <li className="menu-item" onClick={toggleSidebar}>
                        <FaBars className="menu-icon" />
                        {!isCollapsed&& <span className="menu-text">Toggle</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "/all-farmers" ? "active" : ""}`}
                        onClick={() => handleItemClick("all-farmers")}
                    >
                        <FaHome className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">View All Farmers</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "/add-farmer" ? "active" : ""}`}
                        onClick={() => handleItemClick("add-farmer")}
                    >
                        <FaHome className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">New Farmer Entry</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "notify-farmers" ? "active" : ""}`}
                        onClick={() => handleItemClick("notify-farmers")}
                    >
                        <FaFire className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Notify farmers</span>}
                    </li>

                    <li
                        className={`menu-item ${activeItem === "classify-farmers" ? "active" : ""}`}
                        onClick={() => handleNavigation()}
                    >
                        <BsClipboard2Heart className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Visualize farmers data</span>}
                    </li>


                    <li
                        className={`menu-item ${activeItem === "available" ? "active" : ""}`}
                        onClick={() => handleItemClick("available")}
                    >
                        <FaHistory className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Availabilities</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "queries" ? "active" : ""}`}
                        onClick={() => handleItemClick("queries")}
                    >
                        <FaClock className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Address Queries</span>}
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
export default SideBar
