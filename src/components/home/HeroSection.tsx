
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-footconnect-dark mb-6 leading-tight">
            Connect Players and Fans in a New Digital Ecosystem
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            FootConnect bridges the gap between athletes and supporters with advanced technologies for health monitoring, career management, and immersive fan experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-footconnect-purple hover:bg-footconnect-purple2 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/player-dashboard">For Players</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-footconnect-purple text-footconnect-purple hover:bg-footconnect-purple hover:text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/fan-zone">For Fans</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-footconnect-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-footconnect-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574" 
                alt="Football player and fans" 
                className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Health Monitoring Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
