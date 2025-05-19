import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare, Mail, Send } from 'lucide-react';

const Contact = () => {
  const accentColor = useColorShift();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you via AI as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or ready to start? Our AI rickshaw-bot is available 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all animate-fade-in-up">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="John Doe"
                        className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="johndoe@example.com"
                        className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                        placeholder="Project Inquiry"
                        className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        placeholder="Tell us about your project or question..."
                        className="min-h-[120px] hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      style={{ backgroundColor: accentColor }} 
                      className="w-full hover:scale-105 transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2">⟳</span> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="space-y-8">
                  <div className="bg-black text-white rounded-xl p-8 hover:shadow-xl transition-all animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-4">Why Contact AI WALA?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">✓</div>
                        <p>Get instant quotes for your digital projects</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">✓</div>
                        <p>Learn more about our AI-powered services</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">✓</div>
                        <p>Request custom solutions for your unique needs</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">✓</div>
                        <p>Technical support for existing clients</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-aiwala-accent to-blue-700 text-white rounded-xl p-8 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <h3 className="text-2xl font-bold mb-4">Other Ways to Connect</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-3" />
                        <div>
                          <h4 className="font-semibold">Chat with AI</h4>
                          <p className="text-sm opacity-85">Use our rickshaw-bot chat widget</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-3" />
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-sm opacity-85">hello@aiwala.ai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How fast can you deliver projects?",
                  a: "Most projects are delivered within 48-72 hours, depending on complexity. Our AI works 24/7!"
                },
                {
                  q: "Do you offer revisions?",
                  a: "Yes, all projects include up to 3 revisions to ensure you're completely satisfied with the results."
                },
                {
                  q: "How do payments work?",
                  a: "We offer transparent, fixed pricing based on the services you select. Payment is securely processed online."
                },
                {
                  q: "Is there any human involvement?",
                  a: "Our processes are fully automated using advanced AI. For complex edge cases, there might be minimal human oversight."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
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
