
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string;
  category: string;
  tags: string[];
  published_at: string;
  author_id: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const accentColor = useColorShift();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
      setFilteredPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category).filter(Boolean)))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              AI Insights & Innovation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay ahead of the curve with the latest insights on AI technology, digital transformation, and innovative business solutions.
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
                    placeholder="Search articles..."
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

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="p-8">
                    <Badge className="mb-4" style={{ backgroundColor: accentColor }}>
                      Featured
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(filteredPosts[0].published_at)}
                      </div>
                      {filteredPosts[0].category && (
                        <Badge variant="secondary" className="text-xs">
                          {filteredPosts[0].category}
                        </Badge>
                      )}
                    </div>
                    <Link to={`/blog/${filteredPosts[0].slug}`}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:h-96">
                    <img
                      src={filteredPosts[0].featured_image_url || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            
            {loading ? (
              <div className="text-center">Loading articles...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 text-white h-full hover:bg-gray-700 transition-colors">
                      <CardHeader className="p-0">
                        <img
                          src={post.featured_image_url || `https://images.unsplash.com/photo-${677442136019 + index}?auto=format&fit=crop&w=400&q=80`}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        {post.category && (
                          <Badge variant="secondary" className="mb-3 text-xs">
                            {post.category}
                          </Badge>
                        )}
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.published_at)}
                          </div>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="p-6 pt-0">
                        <Link to={`/blog/${post.slug}`} className="w-full">
                          <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-600">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredPosts.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest AI insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Subscribe
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

export default Blog;
