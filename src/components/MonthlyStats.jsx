import React from 'react';

const MonthlyStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Monthly</h3>
      <p className="text-2xl font-bold text-gray-900">65,127</p>
      <p className="text-sm text-green-500 mt-2">16.5% $52.21 USD</p>
      <div className="mt-2 h-24 bg-gray-200 rounded"></div> {/* Placeholder for donut chart */}
    </div>
  );
};

export default MonthlyStats;