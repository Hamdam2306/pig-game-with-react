import React, { useState } from 'react';
import Player from './player';
import Dice from './dice';

const Game: React.FC = () => {
  const [scores, setScores] = useState<number[]>([0, 0]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<number>(0);
  const [dice, setDice] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const rollDice = () => {
    if (!gameOver) {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      setDice(diceValue);

      if (diceValue === 1) {
        setCurrentScore(0);
        setActivePlayer(activePlayer === 0 ? 1 : 0);
      } else {
        setCurrentScore(currentScore + diceValue);
      }
    }
  };

  const holdScore = () => {
    if (!gameOver) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScore;
      setScores(newScores);
      setCurrentScore(0);
      setDice(null);

      if (newScores[activePlayer] >= 100) {
        setGameOver(true);
      } else {
        setActivePlayer(activePlayer === 0 ? 1 : 0);
      }
    }
  };

  const resetGame = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setDice(null);
    setGameOver(false);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg text-white max-w-3xl mx-auto">
      <div className="flex justify-between gap-4 m-1">
        <Player
          name="Player 1"
          score={scores[0]}
          currentScore={activePlayer === 0 ? currentScore : 0}
          isActive={activePlayer === 0}
          isWinner={gameOver && scores[0] >= 100} 
          />
        <Player
          name="Player 2"
          score={scores[1]}
          currentScore={activePlayer === 1 ? currentScore : 0}
          isActive={activePlayer === 1}
          isWinner={gameOver && scores[1] >= 100}
        />
      </div>
      <div className="flex flex-col items-center mt-6">
        <Dice dice={dice} />
      </div>
      <div className="flex justify-between m-0 mt-6">
          <button
            onClick={rollDice}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:bg-gray-500"
            disabled={gameOver}
          >
           Hold
          </button>
          <button
            onClick={holdScore}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:bg-gray-500"
            disabled={gameOver}
          >
            Save
          </button>
          <button
            onClick={resetGame}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Restart
          </button>
        </div>
    </div>
  );
};

export default Game;