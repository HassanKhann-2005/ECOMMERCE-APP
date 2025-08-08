import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUsers } from '../app/features/auth/authSlice';
import {createUsers} from '../app/features/auth/authSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterSeller = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setvalue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setvalue((prev) => {
          const updatedUsers = { ...prev, [name]: value };
          return updatedUsers;
        });
      };

      console.log(value);

      const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createUsers(value));
        setvalue({
            name:"",
            email:"",
            password:""
            
        })
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'User created successfully!',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/seller-dashboard');
          }
        });
      }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
      onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center capitalize">
          Registration
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={value.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={value.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterSeller
