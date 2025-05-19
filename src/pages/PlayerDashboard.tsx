
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HealthDashboard from '@/components/player/HealthDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlayerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-footconnect-dark mb-4">
              Player Health Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Monitor your health metrics, track performance, and get AI-powered insights to prevent injuries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-footconnect-purple">72</CardTitle>
                <CardDescription>Avg. Heart Rate (bpm)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-600">85%</CardTitle>
                <CardDescription>Recovery Status</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-amber-600">Medium</CardTitle>
                <CardDescription>Current Injury Risk</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-blue-600">7.5h</CardTitle>
                <CardDescription>Sleep Last Night</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <HealthDashboard />
          
          <div className="mt-10 p-6 bg-footconnect-lightpurple rounded-xl">
            <h2 className="text-xl font-bold text-footconnect-purple mb-4">Your Personal AI Health Coach Says:</h2>
            <div className="text-gray-800">
              <p className="mb-4">Based on today's readings, I recommend focusing on recovery. Your hamstring tension is elevated - consider 20 minutes of targeted stretching.</p>
              <p>For tomorrow's training, maintain 80% intensity and prioritize technique over power to reduce injury risk.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayerDashboard;
