
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const { toast } = useToast();
  
  const handleSignIn = () => {
    toast({
      title: "Sign in coming soon",
      description: "This feature is under development",
    });
  };

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-footconnect-purple">Foot<span className="text-footconnect-teal">Connect</span></span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-footconnect-purple transition-colors">Home</Link>
          <Link to="/player-dashboard" className="text-gray-700 hover:text-footconnect-purple transition-colors">Player Dashboard</Link>
          <Link to="/fan-zone" className="text-gray-700 hover:text-footconnect-purple transition-colors">Fan Zone</Link>
          <Link to="/mental-health" className="text-gray-700 hover:text-footconnect-purple transition-colors">Mental Health</Link>
          <Link to="/career" className="text-gray-700 hover:text-footconnect-purple transition-colors">Career</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={handleSignIn}
            className="border-footconnect-purple text-footconnect-purple hover:bg-footconnect-purple hover:text-white"
          >
            Sign In
          </Button>
          <Button 
            className="bg-footconnect-purple hover:bg-footconnect-purple2 text-white"
            onClick={handleSignIn}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
