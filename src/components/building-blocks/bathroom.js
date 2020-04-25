import React from 'react';

export default function Bathroom() {
  return (
    <div className="mv-section mv-bathroom">
      <div className="bg-img-container">
        <img src="src/assets/images/bathroom.jpg" alt="Bathroom" />
      </div>
      <div className="banner">
        BATHROOM - Write him a message on the wall below!
      </div>
      <a target="_blank" href="https://www.google.com">
        <div className="action-btn">Enter</div>
      </a>
      <div className="iframe-container">
        <iframe width="100%" height="100%" src="https://awwapp.com/b/uda7nnewabdzl/"></iframe>
      </div>
    </div>
  );
}
