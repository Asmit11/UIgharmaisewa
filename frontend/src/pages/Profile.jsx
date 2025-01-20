import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserApi } from '../apis/Api';
import Footer from '../components/Footer'; // Import the Footer component
import Example from '../components/Navbar';
import img from '../images/icons/user.png';

const Profile = () => {
  const storedUserData = localStorage.getItem('user');
  const parsedUserData = JSON.parse(storedUserData);
  const { firstName, lastName, email } = parsedUserData;
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      const response = await deleteUserApi(parsedUserData._id); // Assuming _id is the user's ID
      if (response.data.success) {
        toast.success('Account deleted successfully');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/register'); // Redirect to the registration page or any other appropriate page
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error deleting account');
      console.error(error.message);
    }
  };

  return (
    <>
      <Example />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md relative">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Profile</h2>

          <div className="flex flex-col items-center mb-6">
            <img
              src={img}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg font-semibold text-gray-900">{`${firstName} ${lastName}`}</p>
            <p className="text-gray-600">{email}</p>
          </div>

          <div className="text-center mb-6">
            <Link
              to="/updateProfile"
              className="bg-[#A3E5F0] text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Update Profile
            </Link>
          </div>

          <div className="flex justify-center">
            <Link to="/requests" className="block">
              <div className="bg-[#90D2B5] text-white p-6 rounded-md shadow-md text-center hover:bg-blue-600 transition duration-300">
                <h3 className="text-xl font-semibold">Bookings</h3>
                <p>View and manage your service bookings</p>
              </div>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-red-600 transition duration-300"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer at the end */}
    </>
  );
};

export default Profile;
