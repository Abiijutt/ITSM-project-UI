
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const About = () => {
  const accentColor = useColorShift();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">About AI WALA</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The world's first zero-human, fully automated AI digital agency.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto hover:shadow-xl transition-all animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-gray-700">
                AI WALA was born from a revolutionary idea: what if an entire digital agency could be powered by AI? 
                Traditional agencies rely on teams of designers, developers, and marketers—all humans with varying skills, 
                availability, and costs.
              </p>
              <p className="mb-4 text-gray-700">
                Our founder envisioned a different approach. By leveraging the latest advancements in artificial intelligence, 
                we've built a system where a single AI rickshaw-bot handles everything from website design to content creation, 
                social media management, and video production.
              </p>
              <p className="text-gray-700">
                The result? Faster delivery times, consistent quality, and dramatically lower costs—all while maintaining 
                the high standards expected from top-tier digital agencies.
              </p>
            </div>
          </div>
        </section>
        
        {/* Vision and Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-aiwala-accent to-blue-700 text-white rounded-xl p-8 hover:shadow-xl transition-all animate-fade-in-up">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p>
                  To revolutionize the digital agency industry by demonstrating that AI can deliver superior results 
                  compared to traditional human-centric approaches, making high-quality digital services accessible to businesses of all sizes.
                </p>
              </div>
              
              <div className="bg-black text-white rounded-xl p-8 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                  To provide businesses with affordable, high-quality digital services through our AI rickshaw-bot, 
                  eliminating the inefficiencies, inconsistencies, and high costs associated with traditional digital agencies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We Work Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered process ensures consistent, high-quality results every time.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {[
                  {
                    step: 1,
                    title: "Input Your Requirements",
                    description: "Share your business needs, competitors, and preferences through our simple questionnaire."
                  },
                  {
                    step: 2,
                    title: "AI Analysis",
                    description: "Our rickshaw-bot analyzes your inputs along with industry best practices and trends."
                  },
                  {
                    step: 3,
                    title: "Generation & Creation",
                    description: "The AI generates custom designs, content, and code based on your requirements."
                  },
                  {
                    step: 4,
                    title: "Delivery & Implementation",
                    description: "Receive your completed deliverables and implement them with one-click deployment."
                  },
                  {
                    step: 5,
                    title: "Continuous Improvement",
                    description: "Our AI constantly learns and improves, ensuring your digital assets stay current."
                  }
                ].map((item, index) => (
                  <div key={item.step} className="mb-12 relative">
                    <div className="flex items-start">
                      <div 
                        className="flex items-center justify-center w-12 h-12 rounded-full text-white text-xl font-bold mr-4 shrink-0" 
                        style={{ backgroundColor: accentColor }}
                      >
                        {item.step}
                      </div>
                      
                      <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition-all flex-grow animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {index < 4 && (
                      <div className="absolute left-6 top-12 h-14 w-0.5 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the cutting-edge technologies behind our AI rickshaw-bot.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  category: "AI & Machine Learning",
                  techs: ["GPT-4", "DALL-E", "TensorFlow", "PyTorch", "Hugging Face"]
                },
                {
                  category: "Frontend Development",
                  techs: ["React", "Next.js", "Vue", "Tailwind CSS", "Three.js", "GSAP"]
                },
                {
                  category: "Backend Development",
                  techs: ["Node.js", "Python", "Supabase", "Firebase", "AWS Lambda"]
                },
                {
                  category: "Design & Creative",
                  techs: ["Figma API", "Adobe Creative Cloud APIs", "Midjourney", "Stable Diffusion"]
                },
                {
                  category: "Analytics & Optimization",
                  techs: ["Google Analytics", "Hotjar", "SEO Optimization", "A/B Testing"]
                },
                {
                  category: "DevOps & Infrastructure",
                  techs: ["Docker", "Kubernetes", "CI/CD", "Serverless", "Edge Computing"]
                }
              ].map((stack, index) => (
                <HoverCard key={stack.category} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <h3 className="text-xl font-bold mb-3 text-center">{stack.category}</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {stack.techs.slice(0, 3).map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tech}</span>
                        ))}
                        {stack.techs.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">+{stack.techs.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{stack.category} Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {stack.techs.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{tech}</span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        These technologies power our AI rickshaw-bot to deliver professional digital services.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
