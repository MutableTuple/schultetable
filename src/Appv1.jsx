import React, { useState, useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Confetti from "react-confetti";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [gridSize, setGridSize] = useState(5);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wrongClicks, setWrongClicks] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    generateNumbers(gridSize);
  }, [gridSize]);

  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [startTime]);

  useEffect(() => {
    if (gameOver) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Confetti duration: 5 seconds
      return () => clearTimeout(timer);
    }
  }, [gameOver]);

  const generateNumbers = (size) => {
    const nums = Array.from({ length: size * size }, (_, i) => i + 1);
    nums.sort(() => Math.random() - 0.5);
    setNumbers(nums);
  };

  const shuffleNumbers = () => {
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);
  };

  const handleClick = (number) => {
    if (!startTime) {
      setStartTime(Date.now());
    }

    const correctNumber = Math.min(...numbers);
    if (number === correctNumber) {
      setClickedNumbers((prev) => [...prev, { number, correct: true }]);
      const newNumbers = numbers.filter((num) => num !== number);
      setNumbers(newNumbers);

      if (newNumbers.length === 0) {
        setGameOver(true);
        clearInterval(startTime);
        setStartTime(null);
      }
    } else {
      setClickedNumbers((prev) => [...prev, { number, correct: false }]);
      setWrongClicks(wrongClicks + 1);
    }
  };

  const handleGridSizeChange = (event) => {
    setGridSize(parseInt(event.target.value));
    resetGame();
  };

  const resetGame = () => {
    setNumbers([]);
    setStartTime(null);
    setElapsedTime(0);
    setWrongClicks(0);
    setGameOver(false);
    setClickedNumbers([]);
    setShowConfetti(false);
    generateNumbers(gridSize);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-3/5 p-4">
          {gameOver ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Game Over</h2>
              <p>Total Time: {elapsedTime.toFixed(1)}s</p>
              <p>Wrong Clicks: {wrongClicks}</p>
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
                onClick={resetGame}
              >
                Play Again
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-4`}
              style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              }}
            >
              {numbers.map((number) => (
                <button
                  key={number}
                  className={`p-4 rounded-lg text-2xl font-bold transform transition-transform duration-150 hover:scale-105 active:scale-95 ${
                    clickedNumbers.find((n) => n.number === number)
                      ? clickedNumbers.find((n) => n.number === number).correct
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handleClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-full md:w-2/5 p-4 bg-gray-200 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <h2 className="text-xl font-bold mb-4">Stats</h2>
          <p className="mb-2">Time: {elapsedTime.toFixed(1)}s</p>
          <p className="mb-2">Wrong Clicks: {wrongClicks}</p>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Grid Size</label>
            <select
              className="p-2 rounded-lg bg-white"
              value={gridSize}
              onChange={handleGridSizeChange}
            >
              <option value="3">3x3</option>
              <option value="4">4x4</option>
              <option value="5">5x5</option>
            </select>
          </div>
          <button
            className="bg-stone-50 text-black p-2 rounded-lg mt-4"
            onClick={shuffleNumbers}
          >
            Randomize Grid
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
