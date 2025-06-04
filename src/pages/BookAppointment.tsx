
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useUser } from '@/contexts/UserContext';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Brand Package',
  'Website & UX',
  'Social & Content',
  'Video Ads & AI Copy',
  '3D Rickshaw Bot',
  'Complete Digital Transformation',
  'Consultation'
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const BookAppointment = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const accentColor = useColorShift();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    contact_email: user?.email || '',
    contact_phone: '',
    notes: '',
    service_details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to book an appointment.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{
          user_id: user.id,
          ...formData
        }]);

      if (error) throw error;

      toast({
        title: 'Booking successful!',
        description: 'We\'ll contact you soon to confirm your appointment.',
      });

      // Reset form
      setFormData({
        service_type: '',
        preferred_date: '',
        preferred_time: '',
        contact_email: user?.email || '',
        contact_phone: '',
        notes: '',
        service_details: ''
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: 'Booking failed',
        description: 'Please try again or contact support.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Book Your AI Consultation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Schedule a personalized consultation with our AI experts to discuss your project requirements and explore how we can transform your business.
            </motion.p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Schedule Your Meeting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Selection */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Service Type *
                        </label>
                        <Select 
                          value={formData.service_type} 
                          onValueChange={(value) => handleInputChange('service_type', value)}
                        >
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map(service => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date and Time */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Preferred Date *
                          </label>
                          <Input
                            type="date"
                            min={minDate}
                            value={formData.preferred_date}
                            onChange={(e) => handleInputChange('preferred_date', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Preferred Time *
                          </label>
                          <Select 
                            value={formData.preferred_time} 
                            onValueChange={(value) => handleInputChange('preferred_time', value)}
                          >
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map(time => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={formData.contact_email}
                            onChange={(e) => handleInputChange('contact_email', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.contact_phone}
                            onChange={(e) => handleInputChange('contact_phone', e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                      </div>

                      {/* Service Details */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Details
                        </label>
                        <Textarea
                          value={formData.service_details}
                          onChange={(e) => handleInputChange('service_details', e.target.value)}
                          placeholder="Tell us about your project requirements..."
                          className="bg-gray-700 border-gray-600 text-white"
                          rows={3}
                        />
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Notes
                        </label>
                        <Textarea
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="Any specific requirements or questions..."
                          className="bg-gray-700 border-gray-600 text-white"
                          rows={3}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={loading}
                      >
                        {loading ? 'Booking...' : 'Book Appointment'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info Panel */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span>Detailed discussion of your project requirements and goals</span>
                      </li>
                      <li className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span>Personalized recommendations based on your industry and needs</span>
                      </li>
                      <li className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span>Timeline and budget estimation for your project</span>
                      </li>
                      <li className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span>Live demonstration of our AI-powered solutions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Meeting Details</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-3" style={{ color: accentColor }} />
                      <span>Duration: 30-60 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3" style={{ color: accentColor }} />
                      <span>Available: Monday to Friday, 9 AM to 6 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-3" style={{ color: accentColor }} />
                      <span>Format: Video call or phone (your preference)</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
                    <p className="text-sm text-purple-100">
                      This initial consultation is completely free with no obligations. 
                      Get expert advice and see how AI can transform your business.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find a suitable time slot? Have urgent questions? Contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookAppointment;
