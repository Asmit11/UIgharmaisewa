import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GharMaiSewa.png';
import facebook from '../images/icons/fb.png';
import insta from '../images/icons/insta.png';
import twitter from '../images/icons/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#73AB93] text-black py-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <img src={logo} alt="Logo" />
                    <p>&copy; 2024 Ghar Mai Sewa, All Rights Reserved</p>
                </div>
                <div className="flex flex-col items-start">
                    <Link to="/provider" className="flex-shrink-0">
                        <h3 className="text-xl font-bold mb-4">Become a service provider</h3>
                    </Link>
                    <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
                    <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p>Tel: +977-9856345689</p>
                    <p>Email: info@gharmaisewa.com</p>
                    <p>Call center time: 8am - 8pm</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4">Find us on</h3>
                    <div className="flex space-x-4 items-center">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" className="w-10 h-10" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-10 h-10" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
