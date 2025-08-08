import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Navbar from './Navbar';
import { fetchProducts } from '../app/features/auth/products/productSlice';

const dummyData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
];

const SellerGraph = () => {

    const {items} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [])
    
    const chartData = items.map((item) => ({
        name: item.name,
        value: Number(item.price), 
      }));
    

  return (
    <div>
       
    <div className="flex justify-center items-start pt-4">
      <div className="w-[600px] h-[300px] bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Prices Overview</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
   
  );
};

export default SellerGraph;
