
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const accentColor = useColorShift();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="pt-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated 404 */}
            <motion.div
              className="text-9xl font-bold mb-8"
              style={{ color: accentColor }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              404
            </motion.div>

            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Oops! Page Not Found
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, our AI is already working on finding it!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </motion.div>

            {/* Floating AI Elements */}
            <div className="relative">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full opacity-30"
                  style={{ 
                    backgroundColor: accentColor,
                    left: `${20 + i * 10}%`,
                    top: `${10 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>

            {/* Suggestions */}
            <motion.div
              className="mt-16 text-left bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" style={{ color: accentColor }} />
                What you might be looking for:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  → Our AI Services
                </Link>
                <Link to="/characters" className="text-gray-300 hover:text-white transition-colors">
                  → Meet Our AI Team
                </Link>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  → Pricing Plans
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  → About AI WALA
                </Link>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  → Latest Blog Posts
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  → Contact Support
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
