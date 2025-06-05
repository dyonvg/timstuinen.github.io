import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
    return (
        <header className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-10">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-deep-blue">Modern Photo Website</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="hero" smooth={true} duration={500} className="text-deep-blue hover:text-sunset-orange cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="gallery" smooth={true} duration={500} className="text-deep-blue hover:text-sunset-orange cursor-pointer">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="footer" smooth={true} duration={500} className="text-deep-blue hover:text-sunset-orange cursor-pointer">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;