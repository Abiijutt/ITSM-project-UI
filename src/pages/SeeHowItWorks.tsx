
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Eye, Brush, PenTool, Code, MessageCircle, Video, Truck, Sparkles, Star, Zap, CheckCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/character-animations.css';
import '../styles/glow-effects.css';

// Define the 7-stage bot specialists
const botSpecialists = [
  {
    id: 'insight',
    name: 'Insight Bot',
    icon: <Eye size={40} />,
    animation: 'data-stream',
    description: 'Analyzes your brand DNA',
    details: 'Deep market research, competitor analysis, and audience insights powered by AI algorithms',
    color: '#00f5ff'
  },
  {
    id: 'branding',
    name: 'Branding Bot',
    icon: <Brush size={40} />,
    animation: 'paint-stroke',
    description: 'Shapes your visual identity',
    details: 'Logo creation, color palettes, typography systems, and brand guidelines in minutes',
    color: '#ff6b6b'
  },
  {
    id: 'copy',
    name: 'Copy Bot',
    icon: <PenTool size={40} />,
    animation: 'typing',
    description: 'Writes your voice',
    details: 'Compelling copy, blog posts, social content, and marketing materials tailored to your brand',
    color: '#4ecdc4'
  },
  {
    id: 'web',
    name: 'Web Bot',
    icon: <Code size={40} />,
    animation: 'code-assembly',
    description: 'Builds your digital home',
    details: 'Responsive websites, e-commerce stores, and web applications with modern design',
    color: '#45b7d1'
  },
  {
    id: 'social',
    name: 'Social Bot',
    icon: <MessageCircle size={40} />,
    animation: 'social-burst',
    description: 'Ignites your social buzz',
    details: 'Social media campaigns, content calendars, and engagement strategies across all platforms',
    color: '#96ceb4'
  },
  {
    id: 'video',
    name: 'Video Bot',
    icon: <Video size={40} />,
    animation: 'video-stitch',
    description: 'Produces your story in motion',
    details: 'Professional videos, animations, motion graphics, and video marketing content',
    color: '#feca57'
  },
  {
    id: 'rickshaw',
    name: 'Rickshaw Master',
    icon: <Truck size={40} />,
    animation: 'delivery',
    description: 'Delivers it all—faster than any team',
    details: 'Coordinates all bots, manages projects, and ensures seamless delivery of your complete brand',
    color: '#ff9ff3'
  }
];

// Service cards for superpower showcase
const serviceCards = [
  {
    title: 'Brand Identity',
    frontIcon: <Brush size={60} />,
    backDetails: 'Logo, color palette, typography, moodboard—crafted in under 60 sec.',
    color: '#ff6b6b'
  },
  {
    title: 'Web Development',
    frontIcon: <Code size={60} />,
    backDetails: 'Responsive, SEO-ready, AI-optimized sites—built in minutes, deployed instantly.',
    color: '#45b7d1'
  },
  {
    title: 'Content Creation',
    frontIcon: <PenTool size={60} />,
    backDetails: 'Blogs, captions, emails—written, proofed & A/B-tested by AI on the fly.',
    color: '#4ecdc4'
  },
  {
    title: 'Social Ads',
    frontIcon: <MessageCircle size={60} />,
    backDetails: 'Targeted campaigns, creative variants, real-time budget optimization.',
    color: '#96ceb4'
  },
  {
    title: 'Video Production',
    frontIcon: <Video size={60} />,
    backDetails: 'Script, storyboards, voice-over, edit—AI-directed clips ready to publish.',
    color: '#feca57'
  },
  {
    title: 'Data Insights',
    frontIcon: <Eye size={60} />,
    backDetails: 'User behavior, trend forecasting, engagement heatmaps—actionable dashboards updated hourly.',
    color: '#00f5ff'
  }
];

// Timeline demo tabs
const timelineTabs = [
  { id: 'start', label: 'Start', scene: 'blank-rickshaw' },
  { id: 'questionnaire', label: 'Questionnaire', scene: 'form-filling' },
  { id: 'design', label: 'Design', scene: 'bot-assembly' },
  { id: 'launch', label: 'Launch', scene: 'celebration' }
];

const SeeHowItWorks = () => {
  const accentColor = useColorShift();
  const [currentStage, setCurrentStage] = useState(0);
  const [activeTimelineTab, setActiveTimelineTab] = useState('start');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showTeamAssembly, setShowTeamAssembly] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Handle scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Timeline stage progression
      if (timelineRef.current) {
        const timelineTop = timelineRef.current.getBoundingClientRect().top;
        if (timelineTop < windowHeight * 0.8) {
          const stageProgress = Math.min(Math.floor((scrollY - timelineTop + windowHeight) / (windowHeight * 0.3)), botSpecialists.length - 1);
          if (stageProgress >= 0 && stageProgress !== currentStage) {
            setCurrentStage(stageProgress);
          }
        }
      }

      // Service cards visibility
      if (showcaseRef.current) {
        const showcaseTop = showcaseRef.current.getBoundingClientRect().top;
        if (showcaseTop < windowHeight * 0.9) {
          serviceCards.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => prev.includes(index) ? prev : [...prev, index]);
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStage]);

  // Auto-progress timeline for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % botSpecialists.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <Header />
      
      {/* Hero Animation Intro */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, ${accentColor}20, transparent, ${accentColor}10)`
            }}
          />
          {/* Animated circuitry lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-transparent via-white to-transparent"
                style={{
                  left: `${(i * 5) % 100}%`,
                  height: '100%',
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </div>
        
        {/* 3D Rickshaw Bot Entry */}
        <motion.div
          className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            {/* Rickshaw Bot */}
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl"
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Truck size={60} className="text-white" />
            </motion.div>
            
            {/* Flickering Headlights */}
            <motion.div
              className="absolute -left-4 top-6 w-3 h-3 bg-yellow-300 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -left-4 bottom-6 w-3 h-3 bg-yellow-300 rounded-full"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1.2, 0.8, 1.2]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </motion.div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="font-black text-4xl md:text-6xl lg:text-8xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="block"
              style={{ color: accentColor }}
              animate={{
                textShadow: [
                  `0 0 20px ${accentColor}`,
                  `0 0 40px ${accentColor}`,
                  `0 0 20px ${accentColor}`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THIS IS HOW
            </motion.span>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              AI WALA BUILDS
            </motion.span>
            <motion.span
              className="block"
              style={{ color: accentColor }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              YOUR BRAND
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            One bot. Endless superpowers.
          </motion.p>
          
          {/* Animated Scroll Cue */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ArrowDown size={40} style={{ color: accentColor }} />
            </motion.div>
            <p className="text-gray-400 mt-2">Scroll to see the magic</p>
          </motion.div>
        </div>
      </section>
      
      {/* Team Assembly Sequence */}
      <section ref={timelineRef} className="py-20 px-4 relative">
        {/* Sticky Progress Bar */}
        <motion.div 
          className="fixed top-20 left-0 right-0 z-50 bg-black bg-opacity-80 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-300">
                Stage {currentStage + 1} of {botSpecialists.length}
              </p>
              <div className="flex-1 mx-4 bg-gray-700 h-2 rounded-full">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: accentColor }}
                  animate={{ width: `${((currentStage + 1) / botSpecialists.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-sm text-gray-300">Team Assembly</p>
            </div>
          </div>
        </motion.div>
        
        <div className="container mx-auto max-w-6xl mt-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Your <span style={{ color: accentColor }}>AI Super Team</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Seven specialized bots working in perfect harmony to build your brand
            </motion.p>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: accentColor }}
                animate={{ width: `${((currentStage + 1) / botSpecialists.length) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            {/* Bot Specialists */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 py-16">
              {botSpecialists.map((bot, index) => {
                const isActive = currentStage >= index;
                const isCurrent = currentStage === index;
                
                return (
                  <motion.div
                    key={bot.id}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      y: isActive ? 0 : 50,
                      scale: isCurrent ? 1.1 : isActive ? 1 : 0.8
                    }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {/* Bot Icon */}
                    <div 
                      className="relative w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                      style={{ 
                        backgroundColor: isActive ? `${bot.color}20` : 'gray',
                        border: `3px solid ${isActive ? bot.color : 'gray'}`,
                        boxShadow: isCurrent ? `0 0 30px ${bot.color}` : 'none'
                      }}
                    >
                      <div style={{ color: isActive ? bot.color : 'gray' }}>
                        {bot.icon}
                      </div>
                      
                      {/* Active Animation Ring */}
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: bot.color }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Bot Info */}
                    <h3 
                      className="font-bold text-lg mb-2"
                      style={{ color: isActive ? bot.color : 'gray' }}
                    >
                      {bot.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{bot.description}</p>
                    
                    {/* Detailed Info (appears when current) */}
                    <AnimatePresence>
                      {isCurrent && (
                        <motion.div
                          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 p-4 rounded-lg shadow-xl z-20"
                          style={{ backgroundColor: `${bot.color}10`, border: `1px solid ${bot.color}30` }}
                          initial={{ opacity: 0, y: -20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                        >
                          <p className="text-sm text-gray-300">{bot.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Superpower Showcase */}
      <section ref={showcaseRef} className="py-20 px-4 relative bg-gradient-to-b from-black to-gray-900">
        {/* Parallax Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                width: '2px',
                height: '100px',
                background: 'linear-gradient(to bottom, transparent, white, transparent)',
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + (i % 3),
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span style={{ color: accentColor }}>Superpowers</span> In Action
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Each service delivered with AI precision and superhuman speed
            </motion.p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                className="relative h-64 perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  y: visibleCards.includes(index) ? 0 : 50
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-xl p-6 flex flex-col items-center justify-center shadow-xl backface-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `2px solid ${service.color}30`
                    }}
                  >
                    <div style={{ color: service.color }} className="mb-4">
                      {service.frontIcon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-xl p-6 flex items-center justify-center shadow-xl backface-hidden rotate-y-180"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      border: `2px solid ${service.color}`
                    }}
                  >
                    <p className="text-white text-center font-medium">{service.backDetails}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Interactive Timeline Demo */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It All <span style={{ color: accentColor }}>Fits Together</span>
            </motion.h2>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-2">
              {timelineTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTimelineTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTimelineTab === tab.id 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeTimelineTab === tab.id ? accentColor : 'transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Timeline Scene */}
          <div className="bg-black rounded-xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTimelineTab === 'start' && (
                <motion.div
                  key="start"
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Truck size={40} className="text-gray-400" />
                  </div>
                  <p className="text-gray-300">Your journey begins here</p>
                  <p className="text-sm text-gray-500 mt-2">{new Date().toLocaleDateString()}</p>
                </motion.div>
              )}
              
              {activeTimelineTab === 'questionnaire' && (
                <motion.div
                  key="questionnaire"
                  className="w-full max-w-md"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <motion.div
                        className="text-gray-300"
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Business Type: <span style={{ color: accentColor }}>E-commerce</span>
                      </motion.div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <motion.div
                        className="text-gray-300"
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                      >
                        Budget: <span style={{ color: accentColor }}>$5,000 - $10,000</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTimelineTab === 'design' && (
                <motion.div
                  key="design"
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {botSpecialists.slice(0, 4).map((bot, i) => (
                    <motion.div
                      key={bot.id}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${bot.color}30`, border: `2px solid ${bot.color}` }}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <div style={{ color: bot.color }}>{bot.icon}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {activeTimelineTab === 'launch' && (
                <motion.div
                  key="launch"
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Star size={60} style={{ color: accentColor }} />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold mt-4"
                    style={{ color: accentColor }}
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    YOUR BRAND IS LIVE!
                  </motion.h3>
                  {/* Fireworks Effect */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ 
                        backgroundColor: accentColor,
                        left: '50%',
                        top: '50%'
                      }}
                      animate={{
                        x: [0, (Math.cos(i * 45 * Math.PI / 180) * 100)],
                        y: [0, (Math.sin(i * 45 * Math.PI / 180) * 100)],
                        opacity: [1, 0],
                        scale: [1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden">
        {/* 3D Rickshaw Animation Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <motion.div
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            {/* City landmarks around rickshaw */}
            {['Brand', 'Web', 'Social', 'Video'].map((landmark, i) => {
              const angle = (i * 90) * Math.PI / 180;
              const radius = 200;
              return (
                <motion.div
                  key={landmark}
                  className="absolute w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center text-xs font-bold"
                  style={{
                    left: Math.cos(angle) * radius,
                    top: Math.sin(angle) * radius,
                  }}
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {landmark}
                </motion.div>
              );
            })}
            
            {/* Central Rickshaw */}
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Truck size={40} className="text-white" />
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <motion.h2 
            className="text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to <span style={{ color: accentColor }}>Roll?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tell us your business size & we'll quote instantly.
          </motion.p>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(45deg, ${accentColor}, ${accentColor}80)`
              }}
            >
              <motion.span
                className="relative z-10"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.5)',
                    '0 0 20px rgba(255,255,255,0.8)',
                    '0 0 10px rgba(255,255,255,0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Get My Quote →
              </motion.span>
              
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${accentColor}, transparent)`,
                    `linear-gradient(45deg, transparent, ${accentColor})`,
                    `linear-gradient(45deg, ${accentColor}, transparent)`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Link>
            
            <div className="text-center">
              <p className="text-gray-400 text-lg">
                "Paa Ji Je Nhi Samjhy Ty Call Krlaiye!"
              </p>
              <p className="text-gray-500 text-sm mt-2">
                (If you didn't understand brother, just give us a call!)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SeeHowItWorks;
