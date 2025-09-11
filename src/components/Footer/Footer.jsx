import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0A1929] border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Performa BI. All Rights Reserved.</p>
                <p className="text-sm mt-2">Empowering UK Entrepreneurs with Data Intelligence.</p>
            </div>
        </footer>
    );
};

export default Footer;

