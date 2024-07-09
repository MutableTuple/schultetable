import React from "react";

const PastGames = ({ pastGames }) => {
  return (
    <div className="mt-4 ">
      <h3 className="text-lg font-bold mb-2 font-bold text-orange-400">
        Past Games
      </h3>
      <table className="w-full bg-orange-300 rounded-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-orange-400">Game</th>
            <th className="border px-4 py-2 bg-orange-400 ">Time (s)</th>
            <th className="border px-4 py-2 bg-orange-400">Wrong Clicks</th>
            <th className="border px-4 py-2 bg-orange-400">Grid Size</th>
            <th className="border px-4 py-2 bg-orange-400">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {pastGames.map((game, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{game.elapsedTime}</td>
              <td className="border px-4 py-2">{game.wrongClicks}</td>
              <td className="border px-4 py-2">
                {game.gridSize}x{game.gridSize}
              </td>
              <td className="border px-4 py-2">{game.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastGames;
