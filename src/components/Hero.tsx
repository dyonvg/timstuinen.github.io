import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white p-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Welkom bij onze Fotogalerij</h1>
                <p className="text-xl md:text-2xl mb-8">Ontdek de schoonheid van onze wereld door onze lens.</p>
                <a href="#gallery" className="bg-sunset-orange text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-[#f0a868] transition duration-300">
                    Bekijk de Galerij
                </a>
            </div>
        </section>
    );
};

export default Hero;