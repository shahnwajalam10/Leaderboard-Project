import React from 'react';

function KeyMetrics({ metrics }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-xl hover:border-l-4 hover:border-blue-500"
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mb-4 shadow-md">
            <img src={metric.icon} alt={metric.title} className="w-8 h-8" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-black">{metric.title}</h3>

          {/* Value */}
          <p className="text-3xl font-bold text-cyan-600 mt-2">{metric.value}</p>

          {/* Description */}
          <p className="text-sm text-gray-700 mt-2 text-center">{metric.description}</p>
        </div>
      ))}
    </div>
  );
}

export default KeyMetrics;
