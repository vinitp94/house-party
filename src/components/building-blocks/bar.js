import React from 'react';

export default function Bar() {
  // <a target="_blank" href="https://makemeacocktail.com/mybar/">
  //   <div className="action-btn secondary">Make a Drink</div>
  // </a>
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
      <div className="iframe-container">
        <iframe width="100%" height="100%" src="https://makemeacocktail.com/mybar/"></iframe>
      </div>
    </div>
  );
}
