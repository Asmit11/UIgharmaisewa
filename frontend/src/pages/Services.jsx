
// import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import React, { useEffect, useState } from 'react';
// import Map, { Marker } from 'react-map-gl';
// import Rating from 'react-rating-stars-component';
// import { toast } from 'react-toastify';
// import {
//   createFavourtieApi,
//   createRequestApi,
//   getServiceProvidersApi
// } from "../apis/Api";
// import Navbar from '../components/Navbar';

// const MAPBOX_TOKEN = 'pk.eyJ1Ijoicm9hZHdheW1hbiIsImEiOiJjbGY3ejR3ZjkwYnlrM3NudjJkYzgxcnRtIn0.jdReqoWAgSK93Ruy1iPRSQ';

// const Services = () => {
//   const [providers, setProviders] = useState([]);
//   const [activeIcons, setActiveIcons] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProviders, setFilteredProviders] = useState([]);
//   const [showPriceModal, setShowPriceModal] = useState(false);
//   const [showBiddingSection, setShowBiddingSection] = useState(false);
//   const [customPrice, setCustomPrice] = useState('');
//   const [selectedProvider, setSelectedProvider] = useState(null);
//   const [coordinates, setCoordinates] = useState(null);

//   useEffect(() => {
//     fetchProviders();
//     getUserLocation();
//   }, []);

//   const fetchProviders = async () => {
//     try {
//       const res = await getServiceProvidersApi();
//       setProviders(res.data.providers);
//       const initialActiveIcons = {};
//       res.data.providers.forEach((item) => {
//         initialActiveIcons[item._id] = false;
//       });
//       setActiveIcons(initialActiveIcons);
//     } catch (error) {
//       toast.error('Error fetching providers');
//     }
//   };

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCoordinates({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         () => {
//           toast.error('Error fetching location');
//         }
//       );
//     } else {
//       toast.error('Geolocation is not supported by this browser.');
//     }
//   };

//   useEffect(() => {
//     const filtered = providers.filter((item) =>
//       item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProviders(filtered);
//   }, [searchQuery, providers]);

//   const toggleIcon = (id) => {
//     setActiveIcons((prevIcons) => ({
//       ...prevIcons,
//       [id]: !prevIcons[id],
//     }));
//   };

//   const handleAdd = (e, providerId) => {
//     e.preventDefault();
//     const storedUserData = localStorage.getItem('user');

//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       const userId = parsedUserData._id;

//       const data = { userId, providerId };

//       createFavourtieApi(data)
//         .then((res) => {
//           toast.success(res.data.message);
//         })
//         .catch(() => {
//           toast.error('Server error');
//         });
//     }
//   };

//   const handleRequest = (e, providerId) => {
//     e.preventDefault();
//     setSelectedProvider(providerId);
//     setShowPriceModal(true);
//     setShowBiddingSection(false);
//   };

//   const handleCustomPriceSubmit = () => {
//     const storedUserData = localStorage.getItem('user');

//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       const userId = parsedUserData._id;

//       const data = {
//         userId,
//         providerId: selectedProvider,
//         price: customPrice,
//       };

//       createRequestApi(data)
//         .then((res) => {
//           toast.success(res.data.message);
//         })
//         .catch(() => {
//           toast.error('Server error');
//         });

//       setShowPriceModal(false);
//       setCustomPrice('');
//       setSelectedProvider(null);
//     }
//   };

//   const handleDirectRequest = () => {
//     const storedUserData = localStorage.getItem('user');

//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       const userId = parsedUserData._id;

//       const data = { userId, providerId: selectedProvider };

//       createRequestApi(data)
//         .then((res) => {
//           toast.success(res.data.message);
//         })
//         .catch(() => {
//           toast.error('Server error');
//         });

//       setShowPriceModal(false);
//       setSelectedProvider(null);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto my-8 px-4 bg-gray-100 py-8 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-4 border rounded-md shadow-sm text-lg"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">All Service Providers</h2>
//             <div className="h-[500px] overflow-y-scroll grid grid-cols-1 gap-4">
//               {filteredProviders.map((provider) => (
//                 <div
//                   key={provider._id}
//                   className="bg-blue-50 border border-blue-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="text-xl font-semibold mb-2">
//                     Name: {provider.firstName || ''}
//                   </div>
//                   <p className="text-gray-600 mb-4">Service: {provider.service || ''}</p>
//                   <p className="text-gray-800 font-bold mb-4">Price: {provider.price || 'N/A'}</p>
//                   <Rating
//                     count={5}
//                     value={provider.ratingSum / provider.ratingCount}
//                     size={24}
//                     activeColor="#ffd700"
//                     edit={false}
//                   />
//                   <div className="flex justify-between items-center mt-4">
//                     {/* <button
//                       className="text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
//                       onClick={(e) => {
//                         toggleIcon(provider._id);
//                         handleAdd(e, provider._id);
//                       }}
//                     >
//                       <img
//                         src={activeIcons[provider._id] ? favIconActive : favIcon}
//                         alt="Favorite Icon"
//                         className="w-6 h-6"
//                       />
//                     </button> */}
//                     <button
//                       className="text-white p-2 rounded-full bg-[#A3E5F0] hover:bg-[#A3E5F0] transition-colors duration-300"
//                       onClick={(e) => handleRequest(e, provider._id)}
//                     >
//                       BOOK
//                     </button>
//                     {/* <Link to={`/user/userfeedback/${provider._id}`}>
//                       <button className="text-white p-2 rounded-full bg-[#A3E5F0] hover:bg-[#A3E5F0] transition-colors duration-300">
//                         <img src={feedback} alt="Feedback Icon" className="w-6 h-6" />
//                       </button>
//                     </Link> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white opacity-90">

//           {coordinates && (
//             <Map
//               initialViewState={{
//                 longitude: coordinates.longitude,
//                 latitude: coordinates.latitude,
//                 zoom: 14,
//               }}
//               style={{ width: '100%', height: 600 }}
//               mapStyle="mapbox://styles/mapbox/streets-v11"
//               mapboxAccessToken={MAPBOX_TOKEN}
//             >
//               <Marker
//                 longitude={coordinates.longitude}
//                 latitude={coordinates.latitude}
//                 anchor="bottom"
//               >
//                 <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="red" />
//               </Marker>
//               {providers.map(
//                 (provider) =>
//                   provider.coordinates && (
//                     <Marker
//                       key={provider._id}
//                       longitude={provider.coordinates.longitude}
//                       latitude={provider.coordinates.latitude}
//                       anchor="bottom"
//                     >
//                       <div className="relative">
//                         <FontAwesomeIcon icon={faUser} size="2x" color="blue" />
//                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-white text-sm text-gray-800 p-1 rounded shadow-lg">
//                           {provider.firstName}
//                         </div>
//                       </div>
//                     </Marker>
//                   )
//               )}
//             </Map>
//           )}
//         </div>
//       </div>
//       {/* {showPriceModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-5 rounded-lg shadow-lg">
//             {!showBiddingSection && (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Booking Confirmation</h2>
//                 <p></p>
//                 <div className="flex justify-between mt-4">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
//                     onClick={handleDirectRequest}
//                   >
//                     Confirm
//                   </button>

//                   <button className='bg-red-600 text-black px-4 py-2 rounded-lg'
//                     onClick={() => setShowPriceModal(false)}
//                   >
//                     Cancel
//                   </button>

//                 </div>
//               </>
//             )}

//           </div>
//         </div>
//       )} */}
//       showPriceModal && (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
//           {!showBiddingSection && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Shyam Bahadur</h2>
//               <p className="text-lg font-semibold mb-2">Cleaning</p>
//               <p className="text-xl text-gray-800 font-bold mb-4">-10,000</p>

//               {/* <div className="mb-4">
//                 <p className="text-lg font-semibold">Availability:</p>
//                 <div className="flex gap-2 mt-2">
//                   <span className="bg-green-200 text-black px-3 py-1 rounded-full">Oct 10</span>
//                   <span className="bg-green-200 text-black px-3 py-1 rounded-full">Oct 11</span>
//                   <span className="bg-green-200 text-black px-3 py-1 rounded-full">Oct 13</span>
//                   <span className="bg-green-200 text-black px-3 py-1 rounded-full">Oct 14</span>
//                 </div>
//               </div> */}

//               {/* <div className="mb-4">
//                 <label htmlFor="location" className="block text-lg font-semibold mb-2">Location</label>
//                 <select
//                   id="location"
//                   className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 >
//                   <option value="Baneshwor">Baneshwor</option>
//                   <option value="Koteshwor">Koteshwor</option>
//                   <option value="Lalitpur">Lalitpur</option>
//                 </select>
//               </div> */}

//               <div className="flex justify-between mt-6">
//                 <button
//                   className="bg-[#A3E5F0] text-black px-6 py-2 rounded-xl font-semibold hover:bg-blue-600"
//                   onClick={handleDirectRequest}
//                 >
//                   Book
//                 </button>

//                 <button
//                   className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600"
//                   onClick={() => setShowPriceModal(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       )
//     </>
//   );
// };

// export default Services;
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import Rating from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import {
  createRequestApi,
  getServiceProvidersApi,
} from '../apis/Api';
import Navbar from '../components/Navbar';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicm9hZHdheW1hbiIsImEiOiJjbGY3ejR3ZjkwYnlrM3NudjJkYzgxcnRtIn0.jdReqoWAgSK93Ruy1iPRSQ';

const Services = () => {
  const [providers, setProviders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    fetchProviders();
    getUserLocation();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await getServiceProvidersApi();
      setProviders(res.data.providers);
    } catch (error) {
      toast.error('Error fetching providers');
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          toast.error('Error fetching location');
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    const filtered = providers.filter((item) =>
      item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProviders(filtered);
  }, [searchQuery, providers]);

  const handleRequest = (e, provider) => {
    e.preventDefault();
    setSelectedProvider(provider);
    setShowPriceModal(true);
  };

  const handleBooking = async () => {
    try {
      const storedUserData = localStorage.getItem('user');
      const parsedUserData = JSON.parse(storedUserData);
      const userId = parsedUserData._id;

      // Ensure location is provided
      if (!selectedProvider.location || selectedProvider.location.trim() === '') {
        toast.error('Please provide a location.');
        return;
      }

      const bookingData = {
        userId,
        providerId: selectedProvider._id,
        price: selectedProvider.price,
        location: selectedProvider.location,
      };

      const response = await createRequestApi(bookingData);
      if (response.data.success) {
        toast.success('Booking confirmed!');
        setShowPriceModal(false); // Close the modal after success
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error confirming booking');
      console.error('Booking Error:', error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 px-4 bg-gray-100 py-8 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 border rounded-md shadow-sm text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">All Service Providers</h2>
            <div className="h-[500px] overflow-y-scroll grid grid-cols-1 gap-4">
              {filteredProviders.map((provider) => (
                <div
                  key={provider._id}
                  className="bg-blue-50 border border-blue-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-xl font-semibold mb-2">
                    Name: {provider.firstName || ''}
                  </div>
                  <p className="text-gray-600 mb-4">Service: {provider.service || ''}</p>
                  <p className="text-gray-800 font-bold mb-4">Price: {provider.price || 'N/A'}</p>
                  <Rating
                    count={5}
                    value={provider.ratingSum / provider.ratingCount}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <div className="flex justify-between items-center mt-4">
                    <button
                      className="text-black p-2 rounded-full bg-[#A3E5F0] hover:bg-[#A3E5F0] transition-colors duration-300"
                      onClick={(e) => handleRequest(e, provider)}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white opacity-90">
          {coordinates && (
            <Map
              initialViewState={{
                longitude: coordinates.longitude,
                latitude: coordinates.latitude,
                zoom: 14,
              }}
              style={{ width: '100%', height: 600 }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                anchor="bottom"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="red" />
              </Marker>
              {providers.map(
                (provider) =>
                  provider.coordinates && (
                    <Marker
                      key={provider._id}
                      longitude={provider.coordinates.longitude}
                      latitude={provider.coordinates.latitude}
                      anchor="bottom"
                    >
                      <div className="relative">
                        <FontAwesomeIcon icon={faUser} size="2x" color="blue" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-white text-sm text-gray-800 p-1 rounded shadow-lg">
                          {provider.firstName}
                        </div>
                      </div>
                    </Marker>
                  )
              )}
            </Map>
          )}
        </div>
      </div>
      {showPriceModal && selectedProvider && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-2xl font-bold mb-4">Name: {selectedProvider.firstName}</h2>
            <p className="text-lg font-semibold mb-2">Service: {selectedProvider.service}</p>
            <p className="text-xl text-gray-800 font-bold mb-4">- {selectedProvider.price}</p>
            <p className="text-lg mb-4">Payment: <span className="font-semibold">Cash</span></p>
            <div className="mb-4">
              <label htmlFor="location" className="block text-lg font-semibold mb-2">
                Location:
              </label>
              <input
                type="text"
                id="location"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your location"
                value={selectedProvider.location || ''}
                onChange={(e) =>
                  setSelectedProvider((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-[#A3E5F0] text-black px-6 py-2 rounded-xl font-semibold hover:bg-[#A3E5F0]"
                onClick={handleBooking}
              >
                Book
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600"
                onClick={() => setShowPriceModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
