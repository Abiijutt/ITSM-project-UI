
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatar_url: string;
  service_type: string;
  featured: boolean;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);
  const [selectedService, setSelectedService] = useState('all');
  const [loading, setLoading] = useState(true);
  const accentColor = useColorShift();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'published')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
      setFilteredTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedService === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(testimonials.filter(t => t.service_type === selectedService));
    }
  }, [selectedService, testimonials]);

  const services = ['all', ...Array.from(new Set(testimonials.map(t => t.service_type)))];
  const featuredTestimonials = testimonials.filter(t => t.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

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
              Client Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how AI WALA has transformed businesses across industries with our innovative AI-powered solutions.
            </motion.p>

            {/* Service Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {services.map((service) => (
                <Button
                  key={service}
                  variant={selectedService === service ? "default" : "outline"}
                  onClick={() => setSelectedService(service)}
                  className="capitalize"
                >
                  {service === 'all' ? 'All Services' : service}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Testimonials */}
        {featuredTestimonials.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredTestimonials.slice(0, 3).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-gray-600" />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar_url} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>

                    <Badge style={{ backgroundColor: accentColor }} className="text-xs">
                      {testimonial.service_type}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            {loading ? (
              <div className="text-center">Loading testimonials...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={testimonial.avatar_url} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                        <p className="text-xs text-gray-400">{testimonial.position}</p>
                        <p className="text-xs text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {testimonial.content.length > 150 
                        ? `${testimonial.content.substring(0, 150)}...` 
                        : testimonial.content
                      }
                    </p>

                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service_type}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredTestimonials.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No testimonials found for the selected service.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>500+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>98%</h3>
                <p className="text-gray-300">Satisfaction Rate</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>1000+</h3>
                <p className="text-gray-300">Projects Delivered</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>4.9/5</h3>
                <p className="text-gray-300">Average Rating</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve the same outstanding results as our other clients.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
