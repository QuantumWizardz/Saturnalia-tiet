//@ts-nocheck

import React from 'react';
import logo from '../../public/tietlogo.png';
import satLogo from '../../public/satLogo.png';


const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[80%] bg-[rgba(120,72,24,0.85)] shadow-md z-990 flex items-center justify-between py-1 px-4 rounded-full border-2 border-yellow-400">
            <div className="navbar-brand flex items-center">
                <a href="/" className="navbar-item">
                    <div className=" rounded-xl p-1 flex items-center justify-center h-14 w-14 bg-transparent">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-10 object-contain"
                        />
                    </div>
                </a>
            </div>
            <div className="ml-16">
                <ul className="flex space-x-8 items-center">
                    <li><a href="#events" className="text-white text-xl font-medium hover:text-gray-300">About</a></li>
                    <li><a href="#about" className="text-white text-xl font-medium hover:text-gray-300">FAQS</a></li>
                    <li>
                        <img src={satLogo} alt="Saturnalia" className="h-12 w-auto object-contain" />
                    </li>
                    <li><a href="#faq" className="text-white text-xl font-medium hover:text-gray-300">Events</a></li>
                    <li><a href="#contact" className="text-white text-xl font-medium hover:text-gray-300">Team</a></li>
                </ul>
            </div>
            <div>
                <button className='bg-yellow-400 text-white text-xl font-semibold py-1 px-8 rounded-full border-2 border-yellow-400 hover:bg-yellow-500 transition'>
                    Register
                </button>
            </div>
        </nav>
    );
}

export default Navbar;