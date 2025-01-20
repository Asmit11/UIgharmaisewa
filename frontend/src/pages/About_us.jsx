import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import logo from '../images/GharMaiSewa.png';
import homepage from '../images/homepage.jpeg';

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-gray-100"
        style={{
          backgroundImage: `url(${homepage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '735px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-30"></div>

        <div className="container mx-auto py-16 h-full flex items-center relative">
          <div className="w-1/2">
            {/* Centered Title */}
            <h1 className="text-5xl font-bold mb-6 text-left text-black-100">
              GHAR MAI SEWA
            </h1>
            {/* Left-Aligned Text */}
            <div className="text-left max-w-lg mx-auto md:ml-0">
              <p className="text-xl text-black-300 mb-2">
                Connects You With Trusted Professionals For All Your
              </p>
              <p className="text-xl text-black-300 mb-2">
                Home Needs From Cleaning To Repairs Right At Your
              </p>
              <p className="text-xl text-black-300 mb-2">
                Doorsteps With Easy Booking, Secure Payments And
              </p>
              <p className="text-xl text-black-300 mb-2">
                Reliable Services, We Make Quality Home Care
              </p>
              <p className="text-xl text-black-300 mb-2">
                Convenient And Accessible.
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={logo}
              alt="Ghar Mai Sewa Logo"
              className="w-1/2 h-auto max-w-xs"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
