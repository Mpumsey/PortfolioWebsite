import React from 'react';
import './styles.css';
import Header from '../assets/Header.png';  // Import Header image
import Avatar from '../assets/Avatar.png';  // Import Avatar image
import { Link } from 'react-router-dom';  // Import Link for routing

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <div className="header-container">
        {/* Cover Photo */}
        <div className="header-image">
          <img src={Header} alt="Cover" />
        </div>

        {/* Profile Picture */}
        <div className="avatar-image">
          <img src={Avatar} alt="Profile" />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="profile-info">
        <h1>Nompumelelo Mahlangu</h1>
        <p>Frontend Developer</p>
      </div>

      {/* Navigation Links */}
      <div className="navigation-links">
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
};

export default LandingPage;
