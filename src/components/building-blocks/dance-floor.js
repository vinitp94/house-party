import React from 'react';

export default function DanceFloor() {
  return (
    <div className="mv-section mv-dance-floor">
      <div className="bg-img-container">
        <img src="src/assets/images/club.jpg" alt="Club" />
      </div>
      <div className="banner">
        DANCE FLOOR
      </div>
      <a target="_blank" href="https://www.google.com">
        <div className="action-btn">Enter</div>
      </a>

      <a target="_blank" href="https://open.spotify.com/playlist/5LFWI8SdtzlE9JDCWLbsDw?si=dihRkHznRg-ipiZC8UHB9A">
        <div className="action-btn secondary">Add to Playlist</div>
      </a>
    </div>
  );
}
