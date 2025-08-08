import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? 'w-64' : 'w-16'
      } bg-gray-800 text-white transition-all duration-300 ease-in-out fixed h-full z-20`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <FaShopify />
            </div>
            <span className="text-xl font-bold">ShopSphere</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden p-2 text-gray-400 hover:text-white"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="space-y-5 my-10">
          <div className="text-gray-400 text-xs uppercase mb-2">Seller Dashboard</div>
          <Link
            to="/manage-products"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">🛍️</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Manage Products</span>
          </Link>
          <Link
            to="/inventory"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">📦</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Inventory</span>
          </Link>
          <Link
            to="/customers"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">👥</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Customer List</span>
          </Link>
          <Link
            to="/sales-analytics"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">📈</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Sales Analytics</span>
          </Link>
          <Link
            to="/revenue"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">💰</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Revenue Reports</span>
          </Link>
          <Link
            to="/seller-graph"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-1">📊</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Graph</span>
          </Link>
          <div className="text-gray-400 text-xs uppercase mb-2 my-2">Pages</div>
          <Link
            to="/"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <span className="mr-2 my-2">👋</span>
            <span className={isSidebarOpen ? 'block' : 'hidden'}>Welcome</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;