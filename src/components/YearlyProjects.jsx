import React from 'react';

const YearlyStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Yearly</h3>
      <p className="text-2xl font-bold text-gray-900">984,246</p>
      <p className="text-sm text-purple-500 mt-2">24.9% 267.35 USD</p>
      <div className="mt-2 h-24 bg-gray-200 rounded"></div> {/* Placeholder for donut chart */}
    </div>
  );
};

export default YearlyStats;