
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Calendar, Users, Shield } from "lucide-react";

const MentalHealthSupport = () => {
  const handleBookSession = () => {
    console.log('Book session clicked');
    // Implement booking functionality
  };

  const handleJoinCommunity = () => {
    console.log('Join community clicked');
    // Implement community join functionality
  };

  return (
    <div className="space-y-8">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Mental Wellness Overview</CardTitle>
          <CardDescription>Your current mental health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Stress Level</span>
                <span className="text-amber-600 font-medium">45%</span>
              </div>
              <Progress value={45} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Sleep Quality</span>
                <span className="text-purple-600 font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-gray-200" indicatorClassName="bg-purple-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Mood Rating</span>
                <span className="text-blue-600 font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Performance Anxiety</span>
                <span className="text-red-600 font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2 bg-gray-200" indicatorClassName="bg-red-500" />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">Personalized Insight:</p>
            <p className="text-blue-700 text-sm">
              Your stress levels have decreased by 12% this week. Continue with your mindfulness practices which are showing positive results.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-2">
              <MessageSquare size={24} />
            </div>
            <CardTitle className="text-lg">Professional Support</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600">
              Confidential access to licensed sports psychologists and mental health professionals.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-footconnect-purple hover:bg-footconnect-purple2 text-white" onClick={handleBookSession}>
              Book Session
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-2">
              <Calendar size={24} />
            </div>
            <CardTitle className="text-lg">Wellness Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600">
              Structured programs for stress management, focus improvement, and sleep enhancement.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full border-footconnect-purple text-footconnect-purple hover:bg-footconnect-purple hover:text-white"
            >
              Explore Programs
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-2">
              <Users size={24} />
            </div>
            <CardTitle className="text-lg">Anonymous Community</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600">
              Connect with peers anonymously to share experiences and gain support in a safe environment.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full border-footconnect-purple text-footconnect-purple hover:bg-footconnect-purple hover:text-white"
              onClick={handleJoinCommunity}
            >
              Join Community
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-2">
              <Shield size={24} />
            </div>
            <CardTitle className="text-lg">Crisis Support</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600">
              Immediate access to support resources for urgent mental health concerns.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Get Help Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MentalHealthSupport;
