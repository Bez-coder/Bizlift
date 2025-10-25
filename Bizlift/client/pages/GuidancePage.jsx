import React from 'react';
import { Link } from 'react-router-dom';
import './GuidancePage.css';

const GuidancePage = () => {
  return (
    <div className="guidance-container">
      <h2>Startup Guidance</h2>
      <div className="guidance-cards">
        <div className="guidance-card">
          <h3>Business Registration</h3>
          <p>Learn how to register your business in Ethiopia.</p>
          <Link to="/guidance/business-registration">Read More</Link>
        </div>
        <div className="guidance-card">
          <h3>TIN Application</h3>
          <p>Step-by-step guide to obtaining a Taxpayer Identification Number.</p>
          <Link to="/guidance/tin-application">Read More</Link>
        </div>
        <div className="guidance-card">
          <h3>Licensing</h3>
          <p>Understand the licensing requirements for your business.</p>
          <Link to="/guidance/licensing">Read More</Link>
        </div>
        <div className="guidance-card">
          <h3>Documentation Templates</h3>
          <p>Access essential templates for your business documents.</p>
          <Link to="/guidance/templates">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default GuidancePage;
