import React, { useState } from 'react';

const LeaderboardTable = ({ traders }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedTraders = [...traders].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    
      <table className="min-w-full border border-gray-700 rounded-lg shadow-md">
        <thead className="bg-black text-white">
          <tr>
            <th
              className="p-4 border-b text-left cursor-pointer text-lg font-medium"
              onClick={() => handleSort('rank')}
            >
              Rank
            </th>
            <th
              className="p-4 border-b text-left cursor-pointer text-lg font-medium"
              onClick={() => handleSort('name')}
            >
              Name
            </th>
            <th className="p-4 border-b text-left text-lg font-medium">Trophies</th>
            <th
              className="p-4 border-b text-left cursor-pointer text-lg font-medium"
              onClick={() => handleSort('streaks')}
            >
              Streaks
            </th>
            <th className="p-4 border-b text-left text-lg font-medium">Alerts</th>
            <th className="p-4 border-b text-left text-lg font-medium">Trades</th>
            <th
              className="p-4 border-b text-left cursor-pointer text-lg font-medium"
              onClick={() => handleSort('avgGain')}
            >
              Avg Gain
            </th>
            <th
              className="p-4 border-b text-left cursor-pointer text-lg font-medium"
              onClick={() => handleSort('xscore')}
            >
              Xscore
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTraders.map((trader, index) => (
            <tr
              key={index}
              className={`hover:bg-gradient-to-r from-gray-600 to-gray-400 text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              }`}
            >
              <td className="p-4 border-b text-center">{trader.rank}</td>
              <td className="p-4 border-b">{trader.name}</td>
              <td className="p-4 border-b">{trader.trophies}</td>
              <td className="p-4 border-b">{trader.streaks}</td>
              <td className="p-4 border-b">{trader.alerts}</td>
              <td className="p-4 border-b">{trader.trades}</td>
              <td className="p-4 border-b">{trader.avgGain}%</td>
              <td className="p-4 border-b">{trader.xscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default LeaderboardTable;
