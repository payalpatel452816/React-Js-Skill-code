import React from 'react';

const Aboutus = () => {
    return (
        <div className="about-us-container p-8 text-white bg-gray-800">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
                Welcome to MISS CAFE, where we believe in the power of great coffee and community! Established in [Year], our cafe has been serving the local community with passion and love.
            </p>
            <p className="text-lg mb-4">
                Our mission is to provide a cozy space where friends can gather, share stories, and enjoy exceptional coffee and freshly made pastries. We source our beans from the best local roasters and our food is made with high-quality ingredients.
            </p>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Our Values</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Quality: We serve only the best.</li>
                <li>Community: We support local artists and businesses.</li>
                <li>Sustainability: We strive to be eco-friendly in our practices.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Visit Us</h2>
            <p className="text-lg">
                Come visit us at [Your Address]. We can’t wait to share a cup of coffee with you!
            </p>
        </div>
    );
};

export default Aboutus;
