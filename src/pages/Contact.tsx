
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accentColor = useColorShift();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@aiwala.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 AI Street, Tech City, TC 12345",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 8am-6pm",
      description: "Weekend support available"
    }
  ];

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
              Let's Create Something Amazing Together
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your business with AI? We're here to help you every step of the way. 
              Get in touch and let's discuss your project.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-gray-800 border-gray-700 text-white h-full hover:bg-gray-700 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${accentColor}20` }}
                      >
                        <item.icon className="w-8 h-8" style={{ color: accentColor }} />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="font-semibold mb-2">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <MessageSquare className="w-6 h-6" style={{ color: accentColor }} />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Service Interested</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2"
                          >
                            <option value="">Select a service</option>
                            <option value="ai-development">AI Development</option>
                            <option value="web-design">Web Design</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="consulting">Consulting</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Subject *</label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-gray-300 mb-4">
                      We're located in the heart of Tech City, easily accessible by public transport and with ample parking available.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold">Address:</span> 123 AI Street, Tech City, TC 12345</p>
                      <p><span className="font-semibold">Nearest Station:</span> Tech Central (5 min walk)</p>
                      <p><span className="font-semibold">Parking:</span> Free parking available</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle>Why Choose AI WALA?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
                        <span>24/7 support for all our clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
                        <span>Average response time under 2 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
                        <span>100% satisfaction guarantee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
                        <span>Free initial consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly can you start my project?",
                  answer: "We can typically start new projects within 1-2 weeks after the initial consultation and agreement."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes! We provide comprehensive ongoing support and maintenance for all our projects."
                },
                {
                  question: "What's included in the free consultation?",
                  answer: "Our free consultation includes project assessment, timeline estimation, and a detailed proposal."
                },
                {
                  question: "Can you work with my existing team?",
                  answer: "Absolutely! We love collaborating with existing teams and can integrate seamlessly into your workflow."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
