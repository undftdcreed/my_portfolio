import React from "react";


const About = ({ about }) => {
  return (
    <div className="about-container">
      <h2>My Contact Info</h2>
      <h3>{about.email}</h3>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/brandonjbay/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> My LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/undftdcreed" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> My GitHub
          </a>
        </li>
        {/* Add more social links here */}
      </ul>
    </div>
  );
};

export default About;