
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { day: 'Mon', heartRate: 72, recovery: 85, stress: 20 },
  { day: 'Tue', heartRate: 68, recovery: 87, stress: 18 },
  { day: 'Wed', heartRate: 74, recovery: 82, stress: 25 },
  { day: 'Thu', heartRate: 70, recovery: 84, stress: 22 },
  { day: 'Fri', heartRate: 76, recovery: 80, stress: 30 },
  { day: 'Sat', heartRate: 65, recovery: 90, stress: 15 },
  { day: 'Sun', heartRate: 68, recovery: 92, stress: 12 },
];

const injuryRiskData = [
  {
    bodyPart: "Knee",
    risk: 15,
    color: "bg-green-500",
  },
  {
    bodyPart: "Ankle",
    risk: 35,
    color: "bg-yellow-500",
  },
  {
    bodyPart: "Hamstring",
    risk: 62,
    color: "bg-orange-500",
  },
  {
    bodyPart: "Lower back",
    risk: 28,
    color: "bg-yellow-500",
  }
];

const HealthDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="col-span-full border-none shadow-lg">
        <CardHeader>
          <CardTitle>Weekly Health Overview</CardTitle>
          <CardDescription>Monitoring your vital statistics and recovery</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="heartRate" stroke="#6E59A5" strokeWidth={2} name="Heart Rate (bpm)" />
                <Line type="monotone" dataKey="recovery" stroke="#33C3F0" strokeWidth={2} name="Recovery %" />
                <Line type="monotone" dataKey="stress" stroke="#F97316" strokeWidth={2} name="Stress Level" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
          <CardDescription>Today's metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Recovery Status</span>
                <span className="text-green-600 font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Training Readiness</span>
                <span className="text-amber-600 font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Mental Focus</span>
                <span className="text-blue-600 font-medium">90%</span>
              </div>
              <Progress value={90} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Sleep Quality</span>
                <span className="text-purple-600 font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-gray-200" indicatorClassName="bg-purple-500" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Injury Risk Assessment</CardTitle>
          <CardDescription>AI-powered risk prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {injuryRiskData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{item.bodyPart}</span>
                  <span className={`font-medium ${
                    item.risk < 30 ? "text-green-600" : 
                    item.risk < 60 ? "text-yellow-600" : "text-orange-600"
                  }`}>
                    {item.risk}% risk
                  </span>
                </div>
                <Progress 
                  value={item.risk} 
                  className="h-2 bg-gray-200" 
                  indicatorClassName={item.color}
                />
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 font-medium">Attention Required:</p>
              <p className="text-amber-700 text-sm">
                Your hamstring shows elevated risk. Consider targeted stretching and reduced intensity for the next 48 hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;
