import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { PostProducts } from '../app/features/auth/products/productSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [formData, setformData] = useState({
        name: "",
        price: "",
        image: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => {
            const updatedFormData = { ...prev, [name]: value };
            return updatedFormData;
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(PostProducts(formData));

        console.log("Form Data:", formData);

        setformData({
            name: "",
            price: "",
            image: "",
        });
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Product added successfully!',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/inventory");
            }
        });
       
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700">Add New Product</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Product Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={formData.name}
                        required
                        placeholder="Product Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Price</label>
                    <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        placeholder="Product Price"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
                    <input
                        name="image"
                        type="url"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct
