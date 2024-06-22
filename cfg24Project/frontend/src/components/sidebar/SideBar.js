import React, { useState } from 'react'
import { FaHome, FaFire, FaHistory, FaClock, FaThumbsUp, FaChevronDown, FaBars } from "react-icons/fa";
import { BsClipboard2Heart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './SideBar.css'


function SideBar({ isCollapsed, toggleSidebar }) {
    const [activeItem, setActiveItem] = useState("viewProfile");


    const navigate = useNavigate();

    const handleNavigation = () => {
        window.location.href = "https://www.google.com/maps/place/5,+First+St,+Nehru+Colony,+Pazhavanthangal,+Chennai,+Tamil+Nadu+600114/@12.985227,80.1839209,21z/data=!4m10!1m2!2m1!1sG1,+Shah+Flats,+5,+1st+Street,+Thillai+Ganga+Nagar,+Nanganallur,%C2%A0Chennai%C2%A0600061.!3m6!1s0x3a525e01a8badd63:0x4dabbf931600ef65!8m2!3d12.9852134!4d80.1840737!15sClJHMSwgU2hhaCBGbGF0cywgNSwgMXN0IFN0cmVldCwgVGhpbGxhaSBHYW5nYSBOYWdhciwgTmFuZ2FuYWxsdXIswqBDaGVubmFpwqA2MDAwNjEukgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11s9xk05ys?entry=ttu";
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
                        className={`menu-item ${activeItem === "/" ? "active" : ""}`}
                        onClick={() => handleItemClick("")}
                    >
                        <FaHome className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">View All Farmers</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "/all-farmers" ? "active" : ""}`}
                        onClick={() => handleItemClick("")}
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
                        onClick={() => handleItemClick("products")}
                    >
                        <BsClipboard2Heart className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Classify farmers</span>}
                    </li>


                    <li
                        className={`menu-item ${activeItem === "crop" ? "active" : ""}`}
                        onClick={() => handleNavigation()}
                    >
                        <FaHistory className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Crop Availability</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "queries" ? "active" : ""}`}
                        onClick={() => handleItemClick("queries")}
                    >
                        <FaClock className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Address Queries</span>}
                    </li>
                    <li
                        className={`menu-item ${activeItem === "danger" ? "active" : ""}`}
                        onClick={() => handleItemClick("danger")}
                    >
                        <FaThumbsUp className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Danger Information</span>}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar
