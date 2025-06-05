import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-deep-blue text-white text-center py-8 px-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Jouw Fotowebsite. Alle rechten voorbehouden.</p>
            <div className="mt-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sunset-orange mx-2">Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sunset-orange mx-2">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sunset-orange mx-2">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;