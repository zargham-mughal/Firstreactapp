import React from 'react';
import siderbarstyle from './sidebar.module.css';
const Sidebar = () => {
    return (
        <aside className={siderbarstyle.mysidebar} >
            <ul className={siderbarstyle.mylist} >
                <li><a href="#home">Dashboard</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#analytics">Analytics</a></li>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#notifications">Notifications</a></li>
                <li><a href="#users">Team Members</a></li>
                <li><a href="#help">Help & Support</a></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;