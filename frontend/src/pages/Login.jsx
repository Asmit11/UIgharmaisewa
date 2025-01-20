// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { loginUserApi } from '../apis/Api';
// import LoginImg from '../images/LoginImg.jpg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//     if (e.target.value === '' || !/\S+@\S+\.\S+/.test(e.target.value)) {
//       setEmailError('Please enter a valid email.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//     if (e.target.value === '' || e.target.value.length < 6) {
//       setPasswordError('Password must be at least 6 characters long.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error('Please fill out all fields.');
//       return;
//     }

//     const data = {
//       email: email,
//       password: password
//     };

//     loginUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);

//           // Set token and user data in local storage
//           localStorage.setItem('token', res.data.token);

//           // Set user data
//           localStorage.setItem('user', JSON.stringify(res.data.userData));

//           // Redirect based on user role
//           if (res.data.userData.isAdmin && !res.data.userData.provider) {
//             navigate('/admin');
//           } else if (!res.data.userData.provider) {
//             navigate('/home');
//           } else if (res.data.userData.provider) {
//             navigate('/providerhome');
//           }
//         }
//       })
//       .catch((err) => {
//         toast.error("Server Error");
//         console.error(err.message);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${LoginImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="bg-gray-100 p-8 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)' }}>
//         <h2 className="text-4xl font-bold text-center mb-6">Welcome Back</h2>
//         <form className="max-w-[400px] mx-auto" onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input type="email" id="email" value={email} onChange={changeEmail} className="w-full rounded-lg bg-gray-200 py-2 px-4 focus:outline-none" />
//             {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">Password</label>
//             <input type="password" id="password" value={password} onChange={changePassword} className="w-full rounded-lg bg-gray-200 py-2 px-4 focus:outline-none" />
//             {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
//           </div>
//           <button type="submit" className="w-full bg-teal-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">Login</button>
//         </form>
//         <p className="mt-4 text-center">Don't have an account? <Link to="/register" className="text-blue-500 underline">Sign up here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginUserApi } from '../apis/Api';
import logo from '../images/GharMaiSewa.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '' || !/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === '' || e.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill out all fields.');
      return;
    }

    const data = {
      email: email,
      password: password
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);

          // Set token and user data in local storage
          localStorage.setItem('token', res.data.token);

          // Set user data
          localStorage.setItem('user', JSON.stringify(res.data.userData));

          // Redirect based on user role
          if (res.data.userData.isAdmin && !res.data.userData.provider) {
            navigate('/admin');
          } else if (!res.data.userData.provider) {
            navigate('/home');
          } else if (res.data.userData.provider) {
            navigate('/providerhome');
          }
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#90D2B5' }}>
      <div className="absolute top-16 flex justify-center w-full">
        <img
          src={logo}
          alt="Logo"
          className="h-40 w-auto"
        />
      </div>
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg opacity-80 bg-white">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={changeEmail}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={changePassword}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 0 12 0c1.373 0 2.675.26 3.875.734M21 21l-2-2"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.464-1.09C20.514 7.6 16.584 5 12 5c-1.523 0-2.97.244-4.312.694M4.638 9.11l-2.186-2.19m16.98 9.674l-2.188-2.19"
                    />
                  )}
                </svg>
              </span>
            </div>
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>
          <div className="flex justify-between items-center mb-4">
            {/* <Link to="/forgot-password" className="text-sm text-teal-600 underline">
              Forgot Password?
            </Link> */}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/6 bg-[#A3E5F0] text-black py-2 rounded-2xl font-semibold hover:bg-teal-600 transition duration-200"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#EE0D0D]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;