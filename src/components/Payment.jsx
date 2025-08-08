import React from 'react';

const Payment = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">💳</span>
        <h3 className="text-lg font-semibold text-gray-700">Payment</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">$84,472</p>
    </div>
  );
};

export default Payment;