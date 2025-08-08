import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { fetchProducts } from '../app/features/auth/products/productSlice';

const dummyData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Apr', value: 500 },
    { name: 'May', value: 700 },
  ];

const AverageWeeklySales = () => {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const chartData = items.length > 0
    ? items.map((item) => ({
        name: item.name,
        value: Number(item.price),
      }))
    : dummyData;

    const TotalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0);
    console.log("Total price:",TotalPrice);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
      <p className="text-2xl font-bold text-gray-900">${TotalPrice}</p>
      <span className="text-red-500 text-sm">↑ 8.6%</span>
      <div className="mt-2 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageWeeklySales;