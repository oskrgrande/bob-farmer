import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-6xl font-bold text-black mb-4">404</h1>
            <h2 className="text-2xl text-black mb-8">Page Not Found</h2>
            <p className="text-black mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <a
                href="/"
                className="px-6 py-3 bg-[#06C167] text-black rounded-md"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;