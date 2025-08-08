import React from 'react';

const Notifications = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
      <span className="text-gray-500 mr-2">🔔</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
        <p className="text-2xl font-bold text-gray-900">846</p>
      </div>
    </div>
  );
};

export default Notifications;