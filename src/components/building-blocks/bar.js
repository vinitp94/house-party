import React from 'react';

export default function Bar() {
  return (
    <div className="mv-section mv-bar">
      <div className="bg-img-container">
        <img src="src/assets/images/bar.jpg" alt="Bar" />
      </div>
      <div className="banner">
        BAR - Blow your stimulus check here.
      </div>
      <a target="_blank" href="https://meet.jit.si/ProjectAkashBar">
        <div className="action-btn">Enter</div>
      </a>
      <div className="iframe-container">
        <iframe width="100%" height="100%" src="https://makemeacocktail.com/mybar/"></iframe>
      </div>
    </div>
  );
}
