import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function SidebarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Toggle Sidebar button with different class name */}
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      {sidebarOpen && (
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0) {
                  return {
                    color: disabled ? 'black' : 'black',
                    backgroundColor: active ? '#eecef9' : undefined,
                  };
                }
              },
            }}
          >
            {/* Menu items */}
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/account">Account</Link>
            </MenuItem>
          </Menu>
        </Sidebar>
      )}
      {/* Separate button with a different class name */}
    </div>
  );
}

export default SidebarComponent;
