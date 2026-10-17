import React from "react";

const GameOver: React.FC<{ score: number; onNewGame: () => void }> = ({ score, onNewGame }) => (
  <div id="game-over">
    <div id="game-over-title">{score === 300 ? "Perfect Game!" : "Game Over"}</div>
    <div id="game-over-score">Final score: {score}</div>
    <button id="new-game-button" onClick={onNewGame} autoFocus>
      Play again
    </button>
  </div>
);

export default GameOver;
