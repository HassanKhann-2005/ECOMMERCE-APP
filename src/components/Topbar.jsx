import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBell, FaCog, FaBars } from 'react-icons/fa';
import { showUsers } from '../app/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Topbar = ({ children, isSidebarOpen, setIsSidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  const latestUser = user[user.length - 1] || {};
  const fullName = latestUser.name || 'Guest';
  const firsName = fullName.split(' ')[0];

  console.log('first Name: ', firsName);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/register-seller');
        console.log('User logged out');
      }
    });
  };

  return (
    <div className="flex-1 ml-0 sm:ml-64 transition-all duration-300">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden mr-4 p-2 text-gray-600 hover:text-gray-900"
          >
            <FaBars />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <FaBell />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <FaCog />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center p-2 text-gray-600 hover:text-gray-900"
            >
              <FaUserCircle className="text-2xl" />
              <span className="ml-2 mr-3 hidden sm:block">{firsName}</span>
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 10l5 5 5-5H7z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-gray-800">
                <div className="p-4 border-b">
                  <p className="font-semibold my-3">{latestUser.name}</p>
                  <p className="text-sm my-3 text-gray-600">{latestUser.email}</p>
                </div>
                <div className="p-4">
                  <button
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white p-4 space-y-2 shadow-md">
          <Link
            to="/form"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Form
          </Link>
          <Link
            to="/addProducts"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Add Products
          </Link>
        </div>
      )}

      {/* Main Content Area */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Topbar;