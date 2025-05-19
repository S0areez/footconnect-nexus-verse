
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', goals: 3, assists: 2, games: 4 },
  { month: 'Feb', goals: 2, assists: 3, games: 4 },
  { month: 'Mar', goals: 4, assists: 1, games: 5 },
  { month: 'Apr', goals: 1, assists: 4, games: 4 },
  { month: 'May', goals: 5, assists: 2, games: 5 },
  { month: 'Jun', goals: 2, assists: 3, games: 3 },
];

const CareerStats = () => (
  <div className="animate-fade-in">
    <Card className="border-none shadow-lg mb-6">
      <CardHeader>
        <CardTitle>Performance Statistics</CardTitle>
        <CardDescription>Track your progress over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="goals" fill="#6E59A5" name="Goals" />
              <Bar dataKey="assists" fill="#33C3F0" name="Assists" />
              <Bar dataKey="games" fill="#8E9196" name="Games Played" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Season Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Games Played</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Goals</span>
              <span className="font-semibold">17</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Assists</span>
              <span className="font-semibold">13</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Minutes Played</span>
              <span className="font-semibold">2,160</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Yellow Cards</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Red Cards</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Pass Accuracy</span>
                <span className="font-semibold">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Shot Accuracy</span>
                <span className="font-semibold">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Tackle Success</span>
                <span className="font-semibold">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Duels Won</span>
                <span className="font-semibold">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Personal Bests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-footconnect-lightpurple rounded-lg">
              <div className="font-semibold text-footconnect-purple">Most Goals in a Game</div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-gray-600">vs. Team Bravo, March 15</div>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="font-semibold text-blue-700">Longest Goal Streak</div>
              <div className="text-2xl font-bold">4 Games</div>
              <div className="text-sm text-gray-600">February 10 - March 5</div>
            </div>
            
            <div className="p-3 bg-amber-50 rounded-lg">
              <div className="font-semibold text-amber-700">Highest Match Rating</div>
              <div className="text-2xl font-bold">9.2</div>
              <div className="text-sm text-gray-600">vs. Team Delta, May 22</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const ContractManagement = () => (
  <div className="animate-fade-in space-y-6">
    <Card className="border-none shadow-lg">
      <CardHeader>
        <CardTitle>Current Contract</CardTitle>
        <CardDescription>Details of your active contract</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Team</p>
              <p className="font-semibold">São Paulo FC</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Position</p>
              <p className="font-semibold">Attacking Midfielder</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Start Date</p>
              <p className="font-semibold">August 15, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">End Date</p>
              <p className="font-semibold">July 30, 2026</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Contract Duration</span>
              <span className="text-sm">1 year, 2 months remaining</span>
            </div>
            <Progress value={42} className="h-2" />
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg mt-4">
            <p className="text-blue-800 font-medium">Contract Milestones:</p>
            <ul className="list-disc list-inside text-blue-700 text-sm space-y-1 mt-2">
              <li>Performance bonus activated: 10 goals reached (February)</li>
              <li>Upcoming bonus: 15 assists (3 more needed)</li>
              <li>Contract extension option available after 2025 season</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Endorsement Opportunities</CardTitle>
          <CardDescription>Potential sponsorships and partnerships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                company: "SportTech Gear",
                offer: "Equipment sponsorship",
                status: "Pending Review",
                match: "92%"
              },
              {
                company: "Vitality Nutrition",
                offer: "Brand ambassador",
                status: "New Offer",
                match: "87%"
              },
              {
                company: "Elite Training App",
                offer: "Featured athlete",
                status: "Negotiating",
                match: "78%"
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600">{item.offer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{item.status}</p>
                  <p className="text-xs text-green-600">{item.match} match to your brand</p>
                </div>
              </div>
            ))}
            
            <Button className="w-full mt-2 bg-footconnect-purple hover:bg-footconnect-purple2 text-white">
              View All Opportunities
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Agent Communications</CardTitle>
          <CardDescription>Recent messages from your representation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "May 18, 2025",
                subject: "Contract Extension Discussion",
                preview: "We should start considering options for your next..."
              },
              {
                date: "May 12, 2025",
                subject: "New Endorsement Opportunity",
                preview: "SportTech Gear is interested in discussing a potential..."
              },
              {
                date: "May 5, 2025",
                subject: "Performance Bonus Update",
                preview: "Congratulations! Your recent goal has activated the..."
              },
            ].map((msg, idx) => (
              <div key={idx} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <p className="text-xs text-gray-500">{msg.date}</p>
                <p className="font-medium">{msg.subject}</p>
                <p className="text-sm text-gray-600 truncate">{msg.preview}</p>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-2">
              Open Inbox
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const PostCareerPlanning = () => (
  <div className="animate-fade-in space-y-6">
    <Card className="border-none shadow-lg">
      <CardHeader>
        <CardTitle>Career Transition Timeline</CardTitle>
        <CardDescription>Planning for your future beyond playing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {[
            {
              phase: "Active Career Phase",
              timeline: "Current - 5+ years",
              status: "Current",
              desc: "Focus on peak performance while building skills and network for post-career",
              color: "bg-green-500"
            },
            {
              phase: "Preparation Phase",
              timeline: "3-5 years before retirement",
              status: "Upcoming",
              desc: "Begin education and training in chosen post-career field",
              color: "bg-blue-500"
            },
            {
              phase: "Transition Phase",
              timeline: "1-2 years before retirement",
              status: "Future",
              desc: "Reduce playing time while increasing involvement in new career path",
              color: "bg-purple-500"
            },
            {
              phase: "Post-Career Launch",
              timeline: "Retirement onward",
              status: "Future",
              desc: "Full transition to new career with support from established network",
              color: "bg-amber-500"
            }
          ].map((phase, idx) => (
            <div key={idx} className="relative pl-10 pb-8">
              <div className={`absolute left-2 top-2 h-6 w-6 rounded-full border-4 border-white ${phase.color} shadow-md`}></div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{phase.phase}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    phase.status === "Current" ? "bg-green-100 text-green-800" :
                    phase.status === "Upcoming" ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{phase.timeline}</p>
                <p className="text-gray-700">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Education Pathways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                course: "Sports Management",
                provider: "Global Sports University",
                format: "Online, Part-time",
                compatibility: "High"
              },
              {
                course: "Business Administration",
                provider: "Business Excellence School",
                format: "Hybrid, Flexible",
                compatibility: "Medium"
              },
              {
                course: "Sports Psychology",
                provider: "Mind & Performance Institute",
                format: "Online Certification",
                compatibility: "High"
              },
            ].map((edu, idx) => (
              <div key={idx} className="p-3 border rounded-lg">
                <p className="font-medium">{edu.course}</p>
                <p className="text-sm text-gray-600">{edu.provider}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>{edu.format}</span>
                  <span className={`
                    ${edu.compatibility === "High" ? "text-green-600" : "text-amber-600"}
                  `}>
                    {edu.compatibility} match for your profile
                  </span>
                </div>
              </div>
            ))}
            <Button className="w-full mt-2 bg-footconnect-purple hover:bg-footconnect-purple2 text-white">
              Explore All Programs
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Financial Planning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Retirement Fund</span>
                <span className="font-semibold">65% of goal</span>
              </div>
              <Progress value={65} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Investment Portfolio</span>
                <span className="font-semibold">42% of goal</span>
              </div>
              <Progress value={42} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Emergency Fund</span>
                <span className="font-semibold">90% of goal</span>
              </div>
              <Progress value={90} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg mt-2">
              <p className="text-green-800 font-medium">Financial Health:</p>
              <p className="text-green-700 text-sm">
                You're on track with your retirement savings. Consider increasing investment diversification for long-term growth.
              </p>
            </div>
            
            <Button variant="outline" className="w-full mt-2 border-footconnect-purple text-footconnect-purple hover:bg-footconnect-purple hover:text-white">
              Schedule Financial Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Network & Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                role: "Sports Commentator",
                org: "Global Sports Network",
                type: "Media",
                match: "Very High"
              },
              {
                role: "Youth Academy Director",
                org: "Football Development Foundation",
                type: "Coaching",
                match: "High"
              },
              {
                role: "Brand Ambassador",
                org: "SportTech Industries",
                type: "Marketing",
                match: "Medium"
              },
            ].map((opp, idx) => (
              <div key={idx} className="p-3 border rounded-lg">
                <p className="font-medium">{opp.role}</p>
                <p className="text-sm text-gray-600">{opp.org}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{opp.type}</span>
                  <span className={`
                    ${opp.match === "Very High" ? "text-green-600" : 
                    opp.match === "High" ? "text-blue-600" : "text-amber-600"}
                  `}>
                    {opp.match} match for your skills
                  </span>
                </div>
              </div>
            ))}
            <Button className="w-full mt-2 bg-footconnect-purple hover:bg-footconnect-purple2 text-white">
              Explore Career Paths
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const CareerManagement = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-footconnect-purple to-footconnect-teal p-6 md:p-10 rounded-xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Career Management</h2>
        <p className="text-white/80 mb-6">Track your performance, manage contracts, and plan for the future.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">17</CardTitle>
              <CardDescription className="text-white/70">Goals This Season</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">13</CardTitle>
              <CardDescription className="text-white/70">Assists</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">2026</CardTitle>
              <CardDescription className="text-white/70">Contract End</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">3</CardTitle>
              <CardDescription className="text-white/70">Pending Offers</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="stats" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="stats">Career Statistics</TabsTrigger>
          <TabsTrigger value="contracts">Contract Management</TabsTrigger>
          <TabsTrigger value="planning">Post-Career Planning</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats">
          <CareerStats />
        </TabsContent>
        
        <TabsContent value="contracts">
          <ContractManagement />
        </TabsContent>
        
        <TabsContent value="planning">
          <PostCareerPlanning />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareerManagement;
