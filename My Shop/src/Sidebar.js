import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <ul>
                <li><a href="#store">Store</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#jewelry">Jewelry</a></li>
                <li><a href="#electronic">Electronic</a></li>
                <li><a href="#clothing">Clothing</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
