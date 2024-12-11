import React from 'react';
import './styles.css';
import Header from '../assets/Header.png';
import Avatar from '../assets/Avatar.png';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';

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

        {/* Profile Info Section */}
        <div className="profile-info">
          <h1>Nompumelelo Mahlangu</h1>
          <p>Frontend Developer</p>
        </div>

        {/* Additional Information */}
        <div className="additional-info" style={{ textAlign: 'left' }}>
          <p><FaBriefcase /> Available</p>
          <p><FaBirthdayCake /> 30 September 1997</p>
          <p><FaMapMarkerAlt /> Soshanguve</p>
        </div>

        {/* Navigation Links */}
        <div className="navigation-links" style={{ textAlign: 'left' }}>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
