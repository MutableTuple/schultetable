import React, { useEffect } from "react";
import { motion } from "framer-motion";
import * as Tone from "tone";

const GameBoard = ({
  numbers,
  clickedNumbers,
  handleClick,
  colorMode,
  buttonColors,
  gridSize,
  gameOver,
  elapsedTime,
  wrongClicks,
  resetGame,
}) => {
  useEffect(() => {
    if (gameOver) {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n"); // Play a sound when the game is over
    }
  }, [gameOver]);

  const getButtonSize = () => {
    let baseFontSize = "text-lg"; // Base font size for most cases

    if (gridSize === 7) {
      baseFontSize = "text-md"; // Reduce font size for largest grid size
    }

    if (colorMode === "random") {
      baseFontSize = "text-lg"; // Adjust font size for random color mode
    }

    if (window.innerWidth < 768) {
      baseFontSize = "text-sm"; // Reduce font size on smaller screens
    }

    if (
      gridSize === 7 &&
      (colorMode === "impossible" || window.innerWidth < 768)
    ) {
      baseFontSize = "text-sm"; // Further reduce font size for impossible mode or on smaller screens
    }

    return baseFontSize;
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const handleButtonClick = (number) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A3", "22n"); // Play a sound on every button click
    const clickedNumber = clickedNumbers.find((n) => n.number === number);
    if (clickedNumber) {
      if (clickedNumber.correct) {
        const synthCorrect = new Tone.Synth().toDestination();
        synthCorrect.triggerAttackRelease("G4", "8n"); // Play a sound for correct clicks
      } else {
        const synthWrong = new Tone.Synth().toDestination();
        synthWrong.triggerAttackRelease("C2", "8n"); // Play a sound for wrong clicks
      }
    }

    handleClick(number);
  };

  return (
    <div className="w-full md:w-3/5 p-4 overflow-auto">
      {gameOver ? (
        <div className="text-center">
          <h2 className="md:text-3xl text-orange-500 text-xl font-extrabold mb-4">
            Congratulations... 🥳🥳
          </h2>
          <p className="font-bold text-orange-700">
            Total Time : ⌛ {elapsedTime.toFixed(1)}s
          </p>
          <p className="font-bold text-orange-700">
            Wrong Clicks : ❌ {wrongClicks}
          </p>
          <div>
            {" "}
            <button
              className="mt-4 bg-orange-400 text-orange-100 p-2 rounded-lg font-bold"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className={`grid gap-4`}
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          }}
          initial="hidden"
          animate="visible"
        >
          {numbers.map((number, index) => (
            <motion.button
              key={number}
              className={`rounded-lg font-bold text-xl transform p-2 transition-transform duration-150 hover:scale-105 active:scale-95 ${
                clickedNumbers.find((n) => n.number === number)
                  ? clickedNumbers.find((n) => n.number === number).correct
                    ? "bg-green-500"
                    : "bg-red-400 text-red-900"
                  : colorMode === "random"
                  ? ""
                  : "bg-yellow-50 text-yellow-950"
              } ${getButtonSize()}`} // Apply button size dynamically
              style={{
                backgroundColor:
                  colorMode === "random" ? buttonColors[index] : "",
                color: colorMode === "random" ? "white" : "",
              }}
              onClick={() => handleButtonClick(number)}
              variants={buttonVariants}
              custom={index}
            >
              {number}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default GameBoard;
