import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/features/auth/products/productSlice';
import { Link } from 'react-router-dom';

const Orders = () => {

    const{items,loading} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])

    console.log("Products:",items)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">🛒</span>
        <h3 className="text-lg font-semibold text-gray-700">Products</h3>
        {/* <Link className=" ml-78 w-fit bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300">Products</Link> */}
      </div>
      <p className="text-2xl font-bold text-gray-900">{items.length}</p>
      
    </div>
  );
};

export default Orders;