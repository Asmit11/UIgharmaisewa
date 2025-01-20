import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { createUserApi } from '../apis/Api';
import logo from '../images/GharMaiSewa.png';

const Register = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeFirstname = (e) => {
    setFirstName(e.target.value);
  }

  const changeLastname = (e) => {
    setLastname(e.target.value);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateName(firstname)) {
      validationErrors.firstname = "Names cannot contain numbers or special characters.";
    }

    if (!validateName(lastname)) {
      validationErrors.lastname = "Names cannot contain numbers or special characters.";
    }

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password
    }

    createUserApi(data)
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate('/login');
        }
      })
      .catch(err => {
        toast.error("Server error");
        console.error(err.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#90D2B5]">

      {/* Logo at the top center */}
      <div className="flex justify-center w-full mb-6">
        <img src={logo} alt="Logo" className="w-36" />
      </div>

      {/* Registration Form */}
      <div className="w-full max-w-md bg-white bg-opacity-30 p-8 rounded-3xl shadow-lg space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-gray-700">First Name</label>
            <input
              onChange={changeFirstname}
              className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none"
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              required
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>
          <div>
            <label htmlFor="lastname" className="block text-gray-700">Last Name</label>
            <input
              onChange={changeLastname}
              className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none"
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              required
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              onChange={changeEmail}
              className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              onChange={changePassword}
              className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="bg-[#A3E5F0] hover:bg-[#89C5D8] text-black py-3 px-8 rounded-full font-semibold transition duration-300">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/login" className="text-[#EE0D0D] font-semibold">Login</Link>
        </p>
        <p className="mt-4 text-center text-sm">
          Register as a service provider<Link to="/provider" className="text-[#EE0D0D] font-semibold"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
