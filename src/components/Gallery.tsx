import React from 'react';

const Gallery: React.FC = () => {
    const images = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
        '/images/photo4.jpg',
        '/images/photo5.jpg',
        '/images/photo6.jpg',
        // Add more image paths as needed
    ];

    return (
        <section className="gallery">
            <h2 className="gallery-title">Photo Gallery</h2>
            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;