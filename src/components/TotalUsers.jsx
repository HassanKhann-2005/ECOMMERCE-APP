import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from '../app/features/auth/authSlice';

const TotalUsers = () => {
    const{user,loading} = useSelector((state) => state.app);
    const dispatch = useDispatch();

useEffect(() => {
 dispatch(showUsers());
}, [dispatch])


  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
      <p className="text-2xl font-bold text-gray-900">{user.length}</p>
      <div className="mt-2 h-24 bg-gray-200 rounded"></div> {/* Placeholder for bar chart */}
      <p className="text-sm text-green-500 mt-2">12.5% from last month</p>
    </div>
  );
};

export default TotalUsers;