import React, { useState, useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Confetti from "react-confetti";
import PastGames from "./Components/PastGames";
import GameBoard from "./Components/GameBoard";
import Stats from "./Components/Stats";
import Modal from "./Components/Modal";
import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [gridSize, setGridSize] = useState(3);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wrongClicks, setWrongClicks] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pastGames, setPastGames] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [colorMode, setColorMode] = useState("mono"); // Start with mono color mode
  const [buttonColors, setButtonColors] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Load past games from localStorage on initial mount
    const storedGames = JSON.parse(localStorage.getItem("pastGames")) || [];
    setPastGames(storedGames);
  }, []);

  useEffect(() => {
    generateNumbers(gridSize, difficulty);
    if (colorMode === "random") {
      generateButtonColors(gridSize);
    }
  }, [gridSize, colorMode, difficulty]);

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
      }, 5000);

      const newGame = {
        elapsedTime: elapsedTime.toFixed(1),
        wrongClicks,
        gridSize,
        difficulty,
      };

      // Retrieve existing games from localStorage
      const storedGames = JSON.parse(localStorage.getItem("pastGames")) || [];

      // Check if the new game already exists in stored games to avoid duplicates
      const gameExists = storedGames.some(
        (game) =>
          game.elapsedTime === newGame.elapsedTime &&
          game.wrongClicks === newGame.wrongClicks &&
          game.gridSize === newGame.gridSize &&
          game.difficulty === newGame.difficulty
      );

      // If the game doesn't exist, add it to the stored games
      if (!gameExists) {
        storedGames.push(newGame);
        localStorage.setItem("pastGames", JSON.stringify(storedGames));
        setPastGames(storedGames);
      }

      return () => clearTimeout(timer);
    }
  }, [gameOver, elapsedTime, wrongClicks, gridSize, difficulty]);

  const generateNumbers = (size, difficulty) => {
    let nums = new Set();

    switch (difficulty) {
      case "easy":
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * (size * size)) + 1);
        }
        break;
      case "medium":
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * (size * size)) + 1);
        }
        break;
      case "hard":
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * 90) + 10); // Two-digit numbers
        }
        break;
      case "extreme":
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * 900) + 100); // Three-digit numbers
        }
        break;
      case "impossible":
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * 999999) + 1); // Random four to six-digit numbers
        }
        break;
      default:
        while (nums.size < size * size) {
          nums.add(Math.floor(Math.random() * (size * size)) + 1);
        }
    }

    setNumbers(Array.from(nums));
  };

  const generateButtonColors = (size) => {
    const colors = Array.from({ length: size * size }, generateRandomColor);
    setButtonColors(colors);
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

  const handleDifficultyChange = (event) => {
    const value = event.target.value;
    setDifficulty(value);
    switch (value) {
      case "easy":
        setGridSize(3);
        break;
      case "medium":
        setGridSize(4);
        break;
      case "hard":
        setGridSize(5);
        break;
      case "extreme":
        setGridSize(6);
        break;
      case "impossible":
        setGridSize(7);
        break;
      default:
        setGridSize(3);
    }
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
    generateNumbers(gridSize, difficulty);
    if (colorMode === "random") {
      generateButtonColors(gridSize);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="min-h-screen bg-yellow-100 md:px-24 px-8 md:py-12 py-8">
      {showConfetti && <Confetti />}
      <Header />
      <div className="md:flex ">
        <GameBoard
          numbers={numbers}
          clickedNumbers={clickedNumbers}
          handleClick={handleClick}
          colorMode={colorMode}
          buttonColors={buttonColors}
          gridSize={gridSize}
          gameOver={gameOver}
          elapsedTime={elapsedTime}
          wrongClicks={wrongClicks}
          resetGame={resetGame}
          className="w-full md:w-3/4"
        />
        <Stats
          elapsedTime={elapsedTime}
          wrongClicks={wrongClicks}
          gridSize={gridSize}
          handleGridSizeChange={handleGridSizeChange}
          difficulty={difficulty}
          handleDifficultyChange={handleDifficultyChange}
          colorMode={colorMode}
          setColorMode={setColorMode}
          shuffleNumbers={shuffleNumbers}
          toggleModal={toggleModal}
          gameOver={gameOver}
          startTime={startTime} // Pass startTime to Stats
          className="w-full md:w-1/4"
        />
      </div>
      {modalOpen && (
        <Modal closeModal={toggleModal}>
          <PastGames pastGames={pastGames} />
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default App;
