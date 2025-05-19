
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-footconnect-purple text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Football Experience?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join FootConnect today and be part of the future of football, whether you're a player looking to optimize your performance or a fan seeking deeper connections.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-white text-footconnect-purple hover:bg-gray-100 px-8 py-6 text-lg"
            asChild
          >
            <Link to="/player-dashboard">Get Started as Player</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
            asChild
          >
            <Link to="/fan-zone">Join as Fan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
