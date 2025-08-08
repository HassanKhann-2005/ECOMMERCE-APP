import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 flex flex-col justify-center items-center text-white font-sans p-6'>
        <div className='text-6xl font-extrabold mb-10 text-yellow-400 drop-shadow-lg'>
            Ecommerce <span className='text-blue-300'>App</span>
        </div>
        <p className='mb-10 text-lg text-gray-200 max-w-xl text-center'>
        Welcome to ShopSphere — choose your role to get started. Whether you're a buyer looking for great deals or a seller ready to manage your store, we have you covered.
        </p>
        <div className='flex justify-center items-center gap-5'>
        <Link to="/register-buyer"
          className="px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-full shadow-xl transition-transform transform hover:scale-105 focus:outline-none"
        >
          I'm a Buyer
        </Link>

        <Link to="/register-seller"
          className="px-10 py-4 bg-green-400 hover:bg-green-300 text-blue-900 font-bold rounded-full shadow-xl transition-transform transform hover:scale-105 focus:outline-none"
        >
          I'm a Seller
        </Link>
      
        </div>
       
    </div>
  )
}

export default Home
