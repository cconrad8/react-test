// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api">API Reference</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
