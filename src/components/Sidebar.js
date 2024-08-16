// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/getting-started">Getting Started</Link></li>
        <li><Link to="/installation">Installation</Link></li>
        <li><Link to="/usage">Usage</Link></li>
        <li><Link to="/api">API Reference</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
