import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import homepage from '../images/homepage.jpeg';

const Home = () => {
  const [showLocationAlert, setShowLocationAlert] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setShowLocationAlert(false);
        },
        (error) => {
          console.error('Error fetching location:', error);
          setShowLocationAlert(true);
        }
      );
    } else {
      setShowLocationAlert(true);
    }
  }, []);

  useEffect(() => {
    if (coordinates) {
      console.log("location: ", coordinates);
    }
  }, [coordinates]);

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setShowLocationAlert(false);
        },
        (error) => {
          console.error('Error fetching location:', error);
          setShowLocationAlert(true);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 relative">
      <Navbar />
      {showLocationAlert && (
        <div className="fixed top-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-lg z-50">
          <p className="font-bold">Enable Location Services</p>
          <p>We need your location to provide better services.</p>
          <button
            onClick={handleEnableLocation}
            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Enable Location
          </button>
        </div>
      )}
      {/* Hero section */}
      <section className="relative bg-gray-100" style={{ backgroundImage: `url(${homepage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '735px' }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-6xl font-bold mb-8">Services </h1>
            <h3 className="text-5xl font-bold mb-8"> at your </h3>
            <p className="text-3xl mb-8">doorsteps</p>
            <Link
              to="/services"
              className="inline-block bg-[#A3E5F0] hover:bg-[#89C5D8] text-black py-3 px-8 rounded-full font-semibold transition duration-300"
            >
              Lets Book
            </Link>
          </div>
        </div>
      </section>

      {/* Services section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> */}
      {/* Service Card */}
      {/* {[
              { image: plumber, title: "Plumber Services", description: "Expert plumbing services to fix leaks, install fixtures, and more." },
              { image: electrician, title: "Electrician Services", description: "Professional electrical services for safe and efficient solutions." },
              { image: painter, title: "Painter Services", description: "Quality painting services to beautify your home or office." },
              { image: gardener, title: "Gardener Services", description: "Skilled gardening services to maintain and enhance your garden." },
              { image: cleaner, title: "House Cleaning Services", description: "Reliable house cleaning services for a spotless home." }
            ].map((service, index) => (
              <div key={index} className="service flex border border-gray-300 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="service-image flex-none mr-6">
                  <img src={service.image} alt={service.title} className="w-40 h-auto rounded-lg" />
                </div>
                <div className="service-description">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />

    </div>
  );
};

export default Home;
