import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If on another page, navigate to home and then scroll.
        // This logic will be improved when we add <Link> tags.
        window.location.href = '/'; 
    }
  };

  const Logo = () => (
    <img 
      src="/logo.png" 
      alt="Performa BI Logo" 
      className="h-7"
    />
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1929]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'portfolio', 'process'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-gray-300 hover:text-[#088f8f] transition-colors duration-300">
              {item}
            </button>
          ))}
          <a href="https://calendar.app.google/GY63Q6ifdmtxVemeA" target="_blank" rel="noopener noreferrer" className="bg-[#088f8f] hover:bg-[#086086] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105">
            Book a Call
          </a>
        </nav>
        <div className="md:hidden">
        </div>
      </div>
    </header>
  );
};

export default Header;
