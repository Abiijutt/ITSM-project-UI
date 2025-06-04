
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  category: string;
  tags: string[];
  published_at: string;
  author_id: string;
  meta_title: string;
  meta_description: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const accentColor = useColorShift();

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      setPost(data);

      // Fetch related posts
      if (data?.category) {
        const { data: related } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .eq('category', data.category)
          .neq('id', data.id)
          .limit(3);
        
        setRelatedPosts(related || []);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div>Loading article...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              {post.category && (
                <Badge className="mb-4" style={{ backgroundColor: accentColor }}>
                  {post.category}
                </Badge>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.published_at)}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AI WALA Team
                </div>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {post.featured_image_url && (
                <div className="mb-12">
                  <img
                    src={post.featured_image_url}
                    alt={post.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                className="leading-relaxed text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                className="mt-12 pt-8 border-t border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4" />
                  <span className="font-semibold">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <img
                      src={relatedPost.featured_image_url || `https://images.unsplash.com/photo-${677442136019 + index}?auto=format&fit=crop&w=400&q=80`}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      {relatedPost.category && (
                        <Badge variant="secondary" className="mb-3 text-xs">
                          {relatedPost.category}
                        </Badge>
                      )}
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-600">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI-powered solutions help you achieve the results discussed in this article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  Learn More
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

export default BlogDetail;
