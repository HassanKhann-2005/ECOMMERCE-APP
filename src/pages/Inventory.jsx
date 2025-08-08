import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../app/features/auth/products/productSlice';

const Inventory = () => {

    const{items,loading} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [])

    console.log("Items in inventory:", items);
    console.log("Images",items.image);
    

  return (
    
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-10">
           <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse-slow">
  Product Inventory</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map(product => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <hr className='text-2xl'/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 flex justify-center">{product.name}</h2>
                            <p className="text-lg text-blue-500 font-bold mt-2 flex justify-center">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Inventory
