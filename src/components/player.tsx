import React from 'react';

interface PlayerProps {
  name: string;
  score: number;
  currentScore: number;
  isActive: boolean;
  isWinner: boolean;
}

const Player: React.FC<PlayerProps> = ({ name, score, currentScore, isActive, isWinner }) => {
  return (
    <div
      className={`p-4 rounded-lg text-center w-1/2 ${isActive ? 'bg-gray-700' : 'bg-gray-800'} ${
        isWinner ? 'border-2 border-yellow-400' : ''
      }`}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-5xl font-semibold text-yellow-400">{score}</p>
      <div className="mt-2 p-2 bg-gray-900 rounded">
        <p className="text-2xl font-bold">{currentScore}</p>
      </div>
    </div>
  );
};

export default Player;