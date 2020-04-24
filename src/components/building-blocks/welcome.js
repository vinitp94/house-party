import React from 'react';

export default function Welcome() {
  return (
    <div className="mv-welcome">
      <div className="welcome">Welcome to Project Akash</div>
      <div className="covid-free">100% COVID-free</div>

      <div className="separator"></div>

      <div className="house-container">
        <img src="src/assets/images/house-drawing.png" alt="House" />
      </div>

      <div className="punch-line">
        Feel free to roam around the house as you wish...
      </div>
    </div>
  );
}
