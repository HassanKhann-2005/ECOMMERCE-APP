import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { showUsers } from '../app/features/auth/authSlice';
import { useSelector } from 'react-redux';

const ActiveUsers = () => {
    const{user,loading} = useSelector((state) => state.app);    
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(showUsers());
    }, [dispatch])
    
    const loggedinUser = user[user.length - 1] || {};
    console.log("logged in User: ",loggedinUser);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
      <p className="text-2xl font-bold text-gray-900">{loggedinUser.name}</p>
      <div className="mt-2 h-24 bg-gray-200 rounded"></div> {/* Placeholder for pie chart */}
      <p className="text-sm text-green-500 mt-2">24K users increased from last month</p>
    </div>
  );
};

export default ActiveUsers;