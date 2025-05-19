
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FanZone from '@/components/fan/FanZone';

const FanZonePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
              Fan Zone
            </h1>
            <p className="text-lg text-gray-600">
              Connect with other fans, interact with players, and experience the game like never before.
            </p>
          </div>
          
          <FanZone />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FanZonePage;
