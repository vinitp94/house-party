import React from 'react';

export default function GameRoom() {
  return (
    <div className="mv-section mv-game-room">
      <div className="bg-img-container">
        <img src="src/assets/images/gamer.jpg" alt="GameRoom" />
      </div>
      <div className="banner">
        GAME ROOM
      </div>
      <a target="_blank" href="https://www.google.com">
        <div className="action-btn">Enter</div>
      </a>
    </div>
  );
}
