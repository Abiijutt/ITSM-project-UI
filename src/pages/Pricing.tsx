
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billing_period: string;
  features: string[];
  max_projects: number;
  max_users: number;
  is_popular: boolean;
  is_active: boolean;
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const accentColor = useColorShift();

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  const fetchPricingPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('pricing_plans')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      console.error('Error fetching pricing plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDisplayPrice = (plan: PricingPlan) => {
    if (billingPeriod === 'yearly' && plan.billing_period === 'monthly') {
      return Math.round(plan.price * 12 * 0.8); // 20% discount for yearly
    }
    return plan.price;
  };

  const getPriceLabel = (plan: PricingPlan) => {
    const price = getDisplayPrice(plan);
    if (billingPeriod === 'yearly') {
      return `$${price}/year`;
    }
    return `$${price}/month`;
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
              Choose Your AI Power Level
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlock the full potential of AI-powered digital solutions with our flexible pricing plans designed for every business size.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              className="flex justify-center items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors"
                style={{ backgroundColor: billingPeriod === 'yearly' ? accentColor : undefined }}
              >
                <div 
                  className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <Badge className="bg-green-600 text-white">Save 20%</Badge>
              )}
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {loading ? (
              <div className="text-center">Loading pricing plans...</div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card 
                      className={`relative bg-gray-800 border-gray-700 text-white h-full ${
                        plan.is_popular ? 'ring-2' : ''
                      }`}
                      style={{ ringColor: plan.is_popular ? accentColor : undefined }}
                    >
                      {plan.is_popular && (
                        <div 
                          className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                          style={{ backgroundColor: accentColor }}
                        >
                          Most Popular
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-gray-400 mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">{getPriceLabel(plan)}</span>
                          {billingPeriod === 'yearly' && plan.billing_period === 'monthly' && (
                            <p className="text-sm text-gray-400 line-through">
                              ${plan.price * 12}/{billingPeriod === 'yearly' ? 'year' : 'month'}
                            </p>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-400">Projects</p>
                              <p className="font-semibold">
                                {plan.max_projects ? plan.max_projects : 'Unlimited'}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400">Team Members</p>
                              <p className="font-semibold">
                                {plan.max_users ? plan.max_users : 'Unlimited'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <Button 
                          className={`w-full ${
                            plan.is_popular 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                              : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <Star className="w-8 h-8" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Solutions</h3>
                <p className="text-gray-300">
                  Leverage cutting-edge artificial intelligence to enhance your brand, content, and digital presence.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <Check className="w-8 h-8" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-gray-300">
                  Every project comes with our quality guarantee and multiple revision rounds to ensure perfection.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <ArrowRight className="w-8 h-8" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-300">
                  Quick turnaround times without compromising quality, thanks to our AI-assisted workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also request custom payment terms."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes! We offer a 14-day free trial for all new customers to experience our AI-powered services without any commitment."
                },
                {
                  question: "What happens if I exceed my project limit?",
                  answer: "You can either upgrade to a higher plan or purchase additional project credits. We'll notify you before you reach your limit."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied customers who have transformed their business with AI WALA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  Contact Sales
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

export default Pricing;
