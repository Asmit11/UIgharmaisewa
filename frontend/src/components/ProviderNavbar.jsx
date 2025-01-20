import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/GharMaiSewa.png';

const ProviderNavbar = () => {
  const navigate = useNavigate();



  const handleLogout = () => {

    localStorage.clear('user');
    navigate('/login');
  };

  return (
    <nav className="bg-[#90D2B5] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/providerHome">
            <img src={logo} alt="Ghar Mai Sewa" className=" h-16" />
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/providerHome" className="text-black hover:text-gray-300 transition duration-300">My Requests</Link>
          <Link to="/providerProfile" className="text-black hover:text-gray-300 transition duration-300">Profile</Link>
          <button
            onClick={handleLogout}
            className="text-black hover:text-gray-300 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ProviderNavbar;
