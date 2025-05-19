
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trophy, Users, Calendar, Video, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Health Monitoring",
    description: "Track health metrics and receive personalized insights with AI and wearable integration.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Mental Health Support",
    description: "Access confidential consultations with sports psychologists and anonymous peer community.",
    icon: Heart,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Career Management",
    description: "Track statistics, manage contracts and plan for post-career transitions with AI-driven insights.",
    icon: Trophy,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Fan Community",
    description: "Connect with like-minded fans, participate in discussions, and influence team decisions.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Interactive Events",
    description: "Participate in Q&A sessions, online meet-ups, and exclusive virtual events with players.",
    icon: Calendar,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Immersive Viewing",
    description: "Experience games with VR technology, multi-angle views, and real-time statistics.",
    icon: Video,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
            A Complete Ecosystem for Football
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FootConnect provides innovative solutions for both players and fans, creating a unique bridge between them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-none shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
