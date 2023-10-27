import React from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
  return (
    <>
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="Your Logo" className="logo" />
      </div>
      <div className="center-section">
        <nav className="navbar">
          <ul className="nav-list">
            <li><a className="nav" >Home</a></li>
            <li><a className="nav" >About</a></li>
            <li><a className="nav" >Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <button className="button">Login</button>
        <button className="button">Sign In</button>
      </div>
      
    </header>
    <div className="about-section">
        <div className="about-content">
          <h3>About Dudiligence Report Creator Tool</h3>
          <p>
The Dudiligence Report Creator Tool is an innovative software solution designed to expedite the creation of due diligence reports from pitch decks. By seamlessly integrating with pitch deck materials, it automates the extraction and analysis of critical information, allowing investors and professionals to make informed decisions with efficiency and precision. Dudiligence simplifies the due diligence process, enabling users to focus on what matters most: evaluating and seizing investment opportunities.</p>
        </div>
        <div className="about-image">
          <img
            src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1279997%2Fretina_500x200_cover-investment-due-diligence-438883b146b2e1bc87f9fbc84c91299c.png" // Replace with your image URL
            alt="Company Image"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
