import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-900 py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-[#464646]">© {new Date().getFullYear()} Bob Farmer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;