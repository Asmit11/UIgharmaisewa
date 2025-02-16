// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { createUserApi } from '../apis/Api';
// import registerImg from '../images/Register.jpg';

// const ServiceProvider = () => {
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [service, setService] = useState('');
//   const [firstnameError, setFirstNameError] = useState('');
//   const [lastnameError, setLastnameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [serviceError, setServiceError] = useState('');
//   const navigate = useNavigate();

//   const changeFirstname = (e) => {
//     setFirstName(e.target.value);
//     if (e.target.value === '') {
//       setFirstNameError('Firstname is required.');
//     } else {
//       setFirstNameError('');
//     }
//   };

//   const changeLastname = (e) => {
//     setLastname(e.target.value);
//     if (e.target.value === '') {
//       setLastnameError('Lastname is required.');
//     } else {
//       setLastnameError('');
//     }
//   };

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

//   const changeService = (e) => {
//     setService(e.target.value);
//     if (e.target.value === '') {
//       setServiceError('Please select a service.');
//     } else {
//       setServiceError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!firstname || !lastname || !email || !password || !service) {
//       toast.error('Please fill out all fields.');
//       return;
//     }

//     const data = {
//       firstName: firstname,
//       lastName: lastname,
//       email: email,
//       password: password,
//       service: service
//     };

//     createUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           navigate('/login');
//         }
//       })
//       .catch(err => {
//         toast.error("Server error");
//         console.error(err.message);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-3/4 max-w-4xl">
//         {/* Image section */}
//         <div className="hidden md:block md:w-1/2">
//           <img src={registerImg} alt="Register" className="w-full h-full object-cover" />
//         </div>
//         {/* Form section */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>
//           <form className="max-w-[400px] mx-auto">
//             <label htmlFor="firstname" className="block text-gray-700">Firstname</label>
//             <input onChange={changeFirstname} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="text" id="firstname" placeholder="Enter your firstname" />
//             {firstnameError && <p className="text-red-500 text-sm">{firstnameError}</p>}
//             <label htmlFor="lastname" className="block text-gray-700 mt-4">Lastname</label>
//             <input onChange={changeLastname} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="text" id="lastname" placeholder="Enter your lastname" />
//             {lastnameError && <p className="text-red-500 text-sm">{lastnameError}</p>}
//             <label htmlFor="email" className="block text-gray-700 mt-4">Email</label>
//             <input onChange={changeEmail} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="email" id="email" placeholder="Enter your email" />
//             {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
//             <label htmlFor="password" className="block text-gray-700 mt-4">Password</label>
//             <input onChange={changePassword} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="password" id="password" placeholder="Enter your password" />
//             {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
//             <label htmlFor="service" className="block text-gray-700 mt-4">Service</label>
//             <select onChange={changeService} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" id="service">
//               <option value="">Select Service</option>
//               <option value="plumber">Plumber</option>
//               <option value="electrician">Electrician</option>
//               <option value="cleaner">Cleaner</option>
//             </select>
//             {serviceError && <p className="text-red-500 text-sm">{serviceError}</p>}
//             <button onClick={handleSubmit} className="w-full mt-6 bg-teal-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">Sign Up</button>
//             <p className="mt-4 text-center">Already have an account? <a href="/login" className="text-blue-500 underline">Sign in here</a></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceProvider;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { createUserApi } from '../apis/Api';

const ServiceProvider = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState('');
  const [firstnameError, setFirstNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serviceError, setServiceError] = useState('');
  const navigate = useNavigate();

  const changeFirstname = (e) => {
    setFirstName(e.target.value);
    if (e.target.value === '') {
      setFirstNameError('Firstname is required.');
    } else {
      setFirstNameError('');
    }
  };

  const changeLastname = (e) => {
    setLastname(e.target.value);
    if (e.target.value === '') {
      setLastnameError('Lastname is required.');
    } else {
      setLastnameError('');
    }
  };

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

  const changeService = (e) => {
    setService(e.target.value);
    if (e.target.value === '') {
      setServiceError('Please select a service.');
    } else {
      setServiceError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !service) {
      toast.error('Please fill out all fields.');
      return;
    }

    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      service: service
    };

    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
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
  };

  return (
    <div className="flex justify-center items-center min-h-screen " style={{ backgroundColor: '#90D2B5' }}>
      {/* <div className="absolute top-10 flex justify-center w-full h-min">
        <img
          src={logo}
          alt="Logo"
          className="h-40 w-auto"
        />
      </div> */}
      <div className="flex flex-col bg-white rounded-lg shadow-lg w-3/4 max-w-md p-8">
        {/* Form section */}
        <form className="max-w-[400px] mx-auto">
          <label htmlFor="firstname" className="block text-gray-700">Firstname</label>
          <input onChange={changeFirstname} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="text" id="firstname" placeholder="Enter your firstname" />
          {firstnameError && <p className="text-red-500 text-sm">{firstnameError}</p>}
          <label htmlFor="lastname" className="block text-gray-700 mt-4">Lastname</label>
          <input onChange={changeLastname} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="text" id="lastname" placeholder="Enter your lastname" />
          {lastnameError && <p className="text-red-500 text-sm">{lastnameError}</p>}
          <label htmlFor="email" className="block text-gray-700 mt-4">Email</label>
          <input onChange={changeEmail} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="email" id="email" placeholder="Enter your email" />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <label htmlFor="password" className="block text-gray-700 mt-4">Password</label>
          <input onChange={changePassword} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" type="password" id="password" placeholder="Enter your password" />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <label htmlFor="service" className="block text-gray-700 mt-4">Service</label>
          <select onChange={changeService} className="w-full rounded-lg bg-gray-100 mt-2 p-2 focus:outline-none" id="service">
            <option value="">Select Service</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="cleaner">Cleaner</option>
          </select>
          {serviceError && <p className="text-red-500 text-sm">{serviceError}</p>}
          <button onClick={handleSubmit} className="w-full mt-6 bg-teal-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">Sign Up</button>
          <p className="mt-4 text-center">Already have an account? <a href="/login" className="text-blue-500 underline">Sign in here</a></p>
        </form>
      </div>
    </div>
  );
}

export default ServiceProvider;