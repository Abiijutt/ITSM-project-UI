
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { useColorShift } from '@/hooks/useColorShift';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CircleCheck, Zap, Code, Database } from 'lucide-react';

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const accentColor = useColorShift();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
            <div className="text-sm text-gray-500">
              Account: <span className="font-semibold">{user.email}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
            
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="active">Active Projects</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No active projects yet.</p>
                  <Button 
                    style={{ backgroundColor: accentColor }}
                    className="hover:scale-105 transition-transform"
                    onClick={() => navigate('/services')}
                  >
                    Start a New Project
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="text-center py-8">
                  <p className="text-gray-500">No completed projects yet.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="drafts">
                <div className="text-center py-8">
                  <p className="text-gray-500">No draft projects yet.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Quick Actions</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start hover:bg-gray-50 transition-colors">
                  <Zap className="mr-2" size={18} />
                  Create New Project
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-gray-50 transition-colors">
                  <CircleCheck className="mr-2" size={18} />
                  View AI Reports
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Recent Activity</h3>
              <p className="text-gray-500">You haven't taken any actions yet.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
