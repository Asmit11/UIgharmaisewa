import {
  Navigate,
  Route,
  BrowserRouter as Router, // BrowserRouter wraps Routes here
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About_us from './pages/About_us';
import AdminPage from './pages/Admin/AdminPage';
import FaqPage from './pages/Faq';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Login from './pages/Login';
import NotificationPage from './pages/NotificationPage';
import Profile from './pages/Profile';
import AdminRoutes from './pages/Protected/AdminRoutes';
import ProviderRoutes from './pages/Protected/ProviderRoutes';
import UserRoutes from './pages/Protected/UserRoutes';
import ProviderHome from './pages/Provider/ProviderHome';
import ProviderProfile from './pages/Provider/ProviderProfile';
import UpdateProviderProfile from './pages/Provider/UpdateProviderProfile';
import Register from './pages/Register';
import ServiceProvider from './pages/Register Admin';
import Requests from './pages/Requests';
import Services from './pages/Services';
import UpdateProfile from './pages/UpdateProfile';
import UserFeedbackPage from './pages/UserFeedback';
import ForgotPassword from './pages/ForgetPassword';

function App() {
  return (
    <Router> {/* Wrapping Routes with BrowserRouter */}
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider" element={<ServiceProvider />} />

        {/* User Protected Routes */}
        <Route element={<UserRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/user/userFeedback/:id" element={<UserFeedbackPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
        </Route>

        {/* Provider Protected Routes */}
        <Route element={<ProviderRoutes />}>
          <Route path="/providerHome" element={<ProviderHome />} />
          <Route path="/providerProfile" element={<ProviderProfile />} />
          <Route path="/updateProviderProfile" element={<UpdateProviderProfile />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        {/* Fallback for Undefined Routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </Router >
  );
}

export default App;
