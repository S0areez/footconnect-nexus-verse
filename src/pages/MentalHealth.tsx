
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MentalHealthSupport from '@/components/player/MentalHealthSupport';

const MentalHealth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
              Mental Health Support
            </h1>
            <p className="text-lg text-gray-600">
              Access confidential resources, connect with professionals, and maintain your mental wellbeing.
            </p>
          </div>
          
          <MentalHealthSupport />
          
          <div className="mt-10 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Upcoming Wellness Sessions:</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm w-24 text-center">Tomorrow</div>
                <div>
                  <p className="font-medium">Group Mindfulness Session</p>
                  <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm w-24 text-center">May 25</div>
                <div>
                  <p className="font-medium">Performance Anxiety Workshop</p>
                  <p className="text-sm text-gray-600">2:00 PM - 3:30 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm w-24 text-center">May 28</div>
                <div>
                  <p className="font-medium">Personal Consultation (Dr. Santos)</p>
                  <p className="text-sm text-gray-600">11:30 AM - 12:15 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentalHealth;
