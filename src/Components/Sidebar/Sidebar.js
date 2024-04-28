import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function SidebarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  
  // :P
  const youtubeUrl = 'https://shattereddisk.github.io/rickroll/rickroll.mp4';
  // HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA
  
  return (
    <div className="sidebar-container">
      {/* Toggle Sidebar button with different class name */}
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        {sidebarOpen ? 'Close Menu' : 'Menu'}
      </button>
      {sidebarOpen && (
        <Sidebar>
          <Menu
            
          >
            <MenuItem>
              <Link to="/">Login/Sign up</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/account">Account</Link>
            </MenuItem>
            <MenuItem>
              <Link to={youtubeUrl} target="_blank" rel="noopener noreferrer">Cool Feature</Link>
            </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </div>
  );
}

export default SidebarComponent;
