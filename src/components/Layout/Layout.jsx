import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="bg-[#0A1929] text-gray-200 font-sans leading-relaxed">
      <Header />
      <main>
        {/* The <Outlet> is where your page content (like HomePage) will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

