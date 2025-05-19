
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LiveEvents = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
    <Card className="border-none shadow-lg overflow-hidden">
      <div className="relative h-48">
        <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 m-2 rounded text-sm font-medium">LIVE</div>
        <img 
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2670" 
          alt="Training session" 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Training Session: Team Alpha</CardTitle>
        <CardDescription>Live from the training grounds - get exclusive access</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Heart size={16} /> 2.4K
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageCircle size={16} /> 487
            </Button>
          </div>
          <Button className="bg-footconnect-purple hover:bg-footconnect-purple2 text-white">Watch Now</Button>
        </div>
      </CardContent>
    </Card>

    <Card className="border-none shadow-lg overflow-hidden">
      <div className="relative h-48">
        <div className="absolute top-0 left-0 bg-amber-600 text-white px-3 py-1 m-2 rounded text-sm font-medium">STARTING SOON</div>
        <img 
          src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2649" 
          alt="Q&A session" 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Q&A With Star Striker</CardTitle>
        <CardDescription>Starting in 15 minutes - Submit your questions now!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Heart size={16} /> 1.8K
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageCircle size={16} /> 912
            </Button>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">Get Notified</Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const CommunityPosts = () => (
  <div className="space-y-6 animate-fade-in">
    {[1, 2, 3].map((post) => (
      <Card key={post} className="border-none shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4">
            <img 
              src={`https://i.pravatar.cc/150?img=${20 + post}`} 
              alt="User avatar" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Fan Member #{post}</p>
              <p className="text-sm text-gray-500">Posted 2 hours ago</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-700 mb-4">
            {post === 1 ? 
              "Amazing game yesterday! The team showed incredible spirit in the second half. What did everyone think of the new formation?" :
              post === 2 ?
              "Just spotted our captain at the local café! He was so nice to all the fans asking for photos. True legend on and off the pitch." :
              "My prediction for the next match: 2-0 victory! Our defense has been solid lately."
            }
          </p>
          {post === 2 && (
            <img 
              src="https://images.unsplash.com/photo-1605135693932-f1d6fb1be3cc?q=80&w=2564" 
              alt="Fan with player" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Heart size={16} /> {125 * post}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageCircle size={16} /> {42 * post}
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share size={16} /> Share
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const VrExperiences = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
    {[
      {
        title: "Stadium Tour",
        description: "Explore behind the scenes in our state-of-the-art stadium",
        image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=2676"
      },
      {
        title: "Match Day Experience",
        description: "Feel like you're on the pitch during the big game",
        image: "https://images.unsplash.com/photo-1523323522388-de94c17f6648?q=80&w=2670"
      },
      {
        title: "Training Ground",
        description: "Join the team during an exclusive training session",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2493"
      }
    ].map((experience, idx) => (
      <Card key={idx} className="border-none shadow-lg overflow-hidden">
        <div className="h-40">
          <img 
            src={experience.image} 
            alt={experience.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{experience.title}</CardTitle>
          <CardDescription>{experience.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-footconnect-purple hover:bg-footconnect-purple2 text-white">
            Enter VR Experience
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

const FanZone = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-footconnect-purple to-footconnect-teal p-6 md:p-10 rounded-xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome to the Fan Zone</h2>
        <p className="text-white/80 mb-6">Connect with other fans, interact with players, and experience the game like never before.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">15K</CardTitle>
              <CardDescription className="text-white/70">Active Fans</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">3</CardTitle>
              <CardDescription className="text-white/70">Live Events</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">87%</CardTitle>
              <CardDescription className="text-white/70">Satisfaction Rate</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="live">Live Events</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="vr">VR Experiences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="live">
          <LiveEvents />
        </TabsContent>
        
        <TabsContent value="community">
          <CommunityPosts />
        </TabsContent>
        
        <TabsContent value="vr">
          <VrExperiences />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FanZone;
