import React from "react";
import { IoReload } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
const Stats = ({
  elapsedTime,
  wrongClicks,
  gridSize,
  handleGridSizeChange,
  difficulty,
  handleDifficultyChange,
  colorMode,
  setColorMode,
  shuffleNumbers,
  toggleModal,
  resetGame,
  gameOver,
  startTime,
}) => {
  const isGameRunning = !!startTime;

  const handleReloadGame = () => {
    window.location.reload();
  };
  const handleColorModeChange = (e) => {
    setColorMode(e.target.value);
  };

  // Function to check if it's a desktop screen
  const isDesktop = () => {
    return window.innerWidth > 768; // Adjust as per your design breakpoints
  };

  return (
    <div className="w-full md:w-2/5 p-4  text-orange-500 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
      <div className="flex gap-4">
        <button
          className="bg-orange-50 border-4 border-orange-300 text-slate-950 p-2 rounded-lg mt-4 mb-4 rounded-full"
          onClick={handleReloadGame}
          disabled={!isGameRunning} // Enable only when game is running
        >
          <IoReload size={24} fontWeight={2} color="#ff8c63" />
        </button>{" "}
        <button
          className="bg-orange-50 border-4 border-orange-300 text-slate-950 p-2 rounded-lg mt-4 mb-4 rounded-full"
          onClick={shuffleNumbers}
          disabled={isGameRunning} // Disable when game is running
        >
          <GiPerspectiveDiceSixFacesRandom
            size={24}
            fontWeight={2}
            color="#ff8c63"
          />
        </button>
        <button
          className="bg-orange-50 border-4 border-orange-300 text-slate-950 p-2 rounded-lg mt-4 mb-4 rounded-full"
          onClick={toggleModal}
          disabled={isGameRunning} // Disable when game is running
        >
          <MdLeaderboard size={24} fontWeight={2} color="#ff8c63" />
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-4  md:w-3/4 w-full  gap-4 md:text-2xl text-md ">
        <div className="p-2 text-orange-400 font-extrabold">Time</div>
        <div className="bg-orange-400 p-2 text-orange-200 font-extrabold rounded-md flex items-center ">
          {elapsedTime.toFixed(1)}s
        </div>

        <div className="p-2 text-orange-400 font-extrabold">Wrong Clicks</div>
        <div className="bg-orange-400 p-2 text-orange-200 font-extrabold rounded-md flex items-center">
          {wrongClicks}
        </div>
        {/* GRID SIZE */}
        <label className="p-2 text-orange-400 font-extrabold">Grid Size</label>
        <select
          className="bg-orange-400 p-2 text-orange-200 font-extrabold rounded-md flex items-center"
          value={gridSize}
          onChange={handleGridSizeChange}
          disabled={isGameRunning} // Disable when game is running
        >
          <option value="3" className="text-orange-200 font-extrabold">
            3x3
          </option>
          <option value="4" className="text-orange-200 font-extrabold">
            4x4
          </option>
          <option value="5" className="text-orange-200 font-extrabold">
            5x5
          </option>
        </select>
        {/* GRID SIZE */}

        {/* DIFFICULTY */}
        <label className="p-2 text-orange-400 font-extrabold">Difficulty</label>
        <select
          className="bg-orange-400 p-2 text-orange-200 font-extrabold rounded-md flex items-center"
          value={difficulty}
          onChange={handleDifficultyChange}
          disabled={isGameRunning} // Disable when game is running
        >
          <option value="easy" className="text-orange-200 font-extrabold">
            Easy
          </option>
          <option value="medium" className="text-orange-200 font-extrabold">
            Medium
          </option>
          <option value="hard" className="text-orange-200 font-extrabold">
            Hard
          </option>
          {isDesktop() && (
            <>
              <option
                value="extreme"
                className="text-orange-200 font-extrabold"
              >
                Extreme
              </option>
            </>
          )}
          {isDesktop() && (
            <>
              <option
                value="impossible"
                className="text-orange-200 font-extrabold"
              >
                Impossible
              </option>
            </>
          )}
        </select>
        {/* DIFFICULTY */}

        {/* COLOR MODE */}
        <label className="p-2 text-orange-400 font-extrabold">Color Mode</label>
        <select
          className="bg-orange-400 p-2 text-orange-200 font-extrabold rounded-md flex items-center"
          value={colorMode}
          onChange={handleColorModeChange}
          disabled={isGameRunning} // Disable when game is running
        >
          <option value="random" className="text-orange-200 font-extrabold">
            Random Colors
          </option>
          <option value="mono" className="text-orange-200 font-extrabold">
            Mono Color
          </option>
        </select>

        {/* COLOR MODE */}
      </div>

      <div className="mb-4"></div>
    </div>
  );
};

export default Stats;
