"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AboutUs from '@/components/AboutUs';
import CardList from '@/components/CardList';
import Feature from '@/components/Features';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CarouselComponent from '@/components/CarouselComponent';
import { FaChevronUp } from 'react-icons/fa';
import Header from '@/components/Header/Header';

const LandingPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-screen'>
      <Header />

      <div className=" container  mx-auto">
        
        <div className="">
          <div className='' id='HOME'>
            <CarouselComponent />
          </div>
          <CardList />

          <div id='FEATURES'>
          <br></br>
          <Feature />
          </div>
          <div id='ABOUTUS'>
          <br></br>
          <AboutUs />
          </div>
          <div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-8 right-8 z-10 bg-gray-900 text-white rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default LandingPage;
