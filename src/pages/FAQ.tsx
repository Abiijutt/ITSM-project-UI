
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_featured: boolean;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const accentColor = useColorShift();

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setFaqs(data || []);
      setFilteredFaqs(data || []);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = faqs;

    if (searchTerm) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    setFilteredFaqs(filtered);
  }, [searchTerm, selectedCategory, faqs]);

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const featuredFaqs = faqs.filter(faq => faq.is_featured);

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers to common questions about our AI-powered services, pricing, and processes.
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured FAQs */}
        {featuredFaqs.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Most Popular Questions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Badge style={{ backgroundColor: accentColor }} className="text-xs">
                        {faq.category}
                      </Badge>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      />
                    </div>
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    {openFaq === faq.id && (
                      <motion.p 
                        className="text-gray-300 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">All Questions</h2>
            
            {loading ? (
              <div className="text-center">Loading FAQs...</div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-gray-800 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-xs">
                          {faq.category}
                        </Badge>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {openFaq === faq.id && (
                      <motion.div
                        className="px-6 pb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {filteredFaqs.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you with any questions about our services.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Contact Support
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
