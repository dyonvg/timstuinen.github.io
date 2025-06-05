import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Gallery />
            <Footer />
        </div>
    );
};

export default HomePage;