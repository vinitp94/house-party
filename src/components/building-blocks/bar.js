import React from 'react';

export default function Bar() {
  return (
    <div className="mv-section mv-bar">
      <div className="bg-img-container">
        <img src="src/assets/images/bar.jpg" alt="Bar" />
      </div>
      <div className="banner">
        BAR
      </div>
      <a target="_blank" href="https://www.google.com">
        <div className="action-btn">Enter</div>
      </a>
      <a target="_blank" href="https://makemeacocktail.com/mybar/">
        <div className="action-btn secondary">Make a Drink</div>
      </a>
    </div>
  );
}
