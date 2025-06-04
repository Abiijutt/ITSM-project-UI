
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, BarChart3, FileText, Bell, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useUser } from '@/contexts/UserContext';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface Project {
  id: string;
  title: string;
  service_type: string;
  status: string;
  priority: string;
  progress: number;
  deadline: string;
  created_at: string;
}

interface Booking {
  id: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  status: string;
  created_at: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  is_read: boolean;
  created_at: string;
}

const Dashboard = () => {
  const { user } = useUser();
  const accentColor = useColorShift();
  const [projects, setProjects] = useState<Project[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      const [projectsData, bookingsData, notificationsData] = await Promise.all([
        supabase.from('projects').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
        supabase.from('bookings').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
        supabase.from('notifications').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }).limit(5)
      ]);

      setProjects(projectsData.data || []);
      setBookings(bookingsData.data || []);
      setNotifications(notificationsData.data || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'in_progress': return 'bg-blue-600';
      case 'pending': return 'bg-yellow-600';
      case 'cancelled': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'normal': return 'bg-blue-600';
      case 'low': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-400 mb-8">Please sign in to view your dashboard.</p>
            <Button>Sign In</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Dashboard Header */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
              <p className="text-gray-300 text-lg">Here's an overview of your AI-powered projects and activities.</p>
            </motion.div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Active Projects</p>
                        <p className="text-2xl font-bold">{projects.filter(p => p.status === 'in_progress').length}</p>
                      </div>
                      <FileText className="w-8 h-8" style={{ color: accentColor }} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Completed</p>
                        <p className="text-2xl font-bold">{projects.filter(p => p.status === 'completed').length}</p>
                      </div>
                      <BarChart3 className="w-8 h-8" style={{ color: accentColor }} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Upcoming Meetings</p>
                        <p className="text-2xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</p>
                      </div>
                      <Calendar className="w-8 h-8" style={{ color: accentColor }} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Notifications</p>
                        <p className="text-2xl font-bold">{notifications.filter(n => !n.is_read).length}</p>
                      </div>
                      <Bell className="w-8 h-8" style={{ color: accentColor }} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Projects Tab */}
              <TabsContent value="projects" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Your Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {projects.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-400 mb-4">No projects yet. Ready to start your first AI project?</p>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Start New Project
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {projects.map((project) => (
                            <div key={project.id} className="bg-gray-700 rounded-lg p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                  <p className="text-gray-400">{project.service_type}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Badge className={getStatusColor(project.status)}>
                                    {project.status.replace('_', ' ')}
                                  </Badge>
                                  <Badge className={getPriorityColor(project.priority)}>
                                    {project.priority}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                  <span>Progress</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <Progress value={project.progress} className="h-2" />
                              </div>

                              {project.deadline && (
                                <div className="flex items-center text-sm text-gray-400">
                                  <Clock className="w-4 h-4 mr-2" />
                                  Deadline: {new Date(project.deadline).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Bookings Tab */}
              <TabsContent value="bookings" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Your Appointments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {bookings.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-400 mb-4">No appointments scheduled.</p>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Book Consultation
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {bookings.map((booking) => (
                            <div key={booking.id} className="bg-gray-700 rounded-lg p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-lg font-semibold text-white">{booking.service_type}</h3>
                                  <div className="flex items-center text-gray-400 mt-2">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {new Date(booking.preferred_date).toLocaleDateString()}
                                    <Clock className="w-4 h-4 ml-4 mr-2" />
                                    {booking.preferred_time}
                                  </div>
                                </div>
                                <Badge className={getStatusColor(booking.status)}>
                                  {booking.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Bell className="w-5 h-5 mr-2" />
                        Recent Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {notifications.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-400">No notifications yet.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {notifications.map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`rounded-lg p-4 ${notification.is_read ? 'bg-gray-700' : 'bg-gray-600'}`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold text-white">{notification.title}</h4>
                                  <p className="text-gray-300 text-sm mt-1">{notification.message}</p>
                                  <p className="text-gray-400 text-xs mt-2">
                                    {new Date(notification.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                                {!notification.is_read && (
                                  <div 
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: accentColor }}
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Settings className="w-5 h-5 mr-2" />
                        Account Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-gray-400 mb-2">Email</label>
                              <p className="text-white">{user.email}</p>
                            </div>
                            <div>
                              <label className="block text-sm text-gray-400 mb-2">Member Since</label>
                              <p className="text-white">
                                {new Date(user.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Email notifications</span>
                              <Button variant="outline" size="sm">Configure</Button>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Project updates</span>
                              <Button variant="outline" size="sm">Configure</Button>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Account Actions</h3>
                          <div className="flex gap-4">
                            <Button variant="outline" className="border-gray-600 text-white">
                              Update Profile
                            </Button>
                            <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                              Delete Account
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
