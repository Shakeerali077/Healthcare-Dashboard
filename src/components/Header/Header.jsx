// src/components/Header/index.jsx
import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="search-section">
        <div className='search-section-border'>   
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search-icon" // Use the new class name
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="search-input" // Use the new class name
        />
        </div>
      </div>
      <div className="user-section">
        <div className="user-avatar-wrapper"> {/* Use the new class name */}
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="user-avatar-img" /> {/* Use the new class name */}
        </div>
        <button className="add-button"> {/* Use the new class name */}
          +
        </button>
      </div>
    </header>
  );
};

export default Header;