import React,{useState} from 'react'
import SideBar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';



function Admin() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div>
            <SideBar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <div style={{ marginLeft: isSidebarCollapsed ? "65px" : "240px" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin
