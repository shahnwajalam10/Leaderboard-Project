import React from "react";

function Trader({ traders }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {traders.map((trader, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-between transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-3 hover:bg-gray-100"
        >
          {/* 3D Background Color Animation */}
          <div className="absolute inset-0 z-0 transform-gpu animate-bg-color"></div>

          {/* Ranking */}
          <div
            className={`absolute top-2 left-2 text-black text-xl font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
              index === 0
                ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 hover:animate-pulse"
                : index === 1
                ? "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:animate-pulse"
                : "bg-yellow-600 hover:bg-yellow-500"
            }`}
          >
            {index + 1}
            {index === 0 ? "st" : index === 1 ? "nd" : "rd"}
          </div>

          {/* Avatar */}
          <img
            src={trader.avatar}
            alt={`${trader.name} avatar`}
            className="w-28 h-28 rounded-full border-4 border-white mb-4 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
          />

          {/* Name and Trading Style */}
          <h2 className="text-2xl font-semibold text-black transition-colors duration-300 ease-in-out hover:text-gray-600">
            {trader.name}
          </h2>
          <p className="text-sm text-black mb-4 transition-colors duration-300 ease-in-out hover:text-gray-600">
            {trader.tradingStyle}
          </p>

          {/* Stats */}
          <div className="flex justify-between w-full text-center text-sm text-black mb-4">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-black">Alerts</p>
              <p className="font-bold text-blue-300">{trader.alerts}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-black">Trades</p>
              <p className="font-bold text-green-300">{trader.trades}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-black">Avg Gain</p>
              <p className="font-bold text-yellow-300">{trader.averageGain}%</p>
            </div>
          </div>

          {/* Profile Button */}
          <button className="w-full mt-auto bg-black text-white py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-800 hover:translate-y-1">
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}

export default Trader;

