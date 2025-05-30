import React from 'react';

interface DiceProps {
  dice: number | null;
}

const Dice: React.FC<DiceProps> = ({ dice }) => {
  return (
    <div className="text-4xl">
      {dice ? (
        <span role="img" aria-label="dice">
          {['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][dice - 1]}
        </span>
      ) : (
        <span className="text-gray-500">🎲</span>
      )}
    </div>
  );
};

export default Dice;