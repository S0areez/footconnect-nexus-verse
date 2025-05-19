
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CareerManagement from '@/components/player/CareerManagement';

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
              Career Management
            </h1>
            <p className="text-lg text-gray-600">
              Take control of your football career, from performance tracking to post-career planning.
            </p>
          </div>
          
          <CareerManagement />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
