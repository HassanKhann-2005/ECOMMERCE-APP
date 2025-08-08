import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from '../app/features/auth/authSlice';

const Customer = () => {

    const{user,loading} = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(showUsers());
    }, [dispatch])

    console.log("Users in Customer Page:", user);

    const loggedinuser = user[user.length - 1] || {};
    

    return (
        <div >
          <Navbar />
      <div className='ml-80'>
          <h2 className="text-2xl font-semibold mb-1">Customer List</h2>
          <p className="text-gray-500 mb-4">
           Customers who registered the platform
          </p>
      
      <br/>
          <div className="overflow-x-auto bg-white rounded-lg shadow max-w-5xl">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                
                {user.map((users) => (
                  <tr key={users.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{users.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{users.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{users.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">••••••••</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {users.id === loggedinuser.id ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                ) : (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Inactive
                  </span>
                )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      );
      
      
      
}

export default Customer
