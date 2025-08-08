import React from 'react';
import AverageWeeklySales from '../components/AverageSales.jsx';
import Orders from '../components/Orders.jsx';
import Income from '../components/Income.jsx';
import Notifications from '../components/Notifications.jsx';
import Payment from '../components/Payment.jsx';
import TotalUsers from '../components/TotalUsers.jsx';
import ActiveUsers from '../components/ActiveUsers.jsx';
import MonthlyStats from '../components/MonthlyStats.jsx';
import YearlyStats from '../components/YearlyStats.jsx';
import OngoingProjects from '../components/OngoingProjects.jsx';
import Campaign from '../components/Campaign.jsx';
import RecentTransactions from '../components/RecentTransactions.jsx';
import Navbar from '../components/Navbar.jsx';
import SalesAndViews from '../components/SalesandViews.jsx';


const Dashboard = () => {
  return (
    <div >
      <Navbar />
      <div className="p-6 ml-72">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Orders />
          <Income />
          <AverageWeeklySales />
          <Notifications />
          <Payment />
          <TotalUsers />
          <ActiveUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;