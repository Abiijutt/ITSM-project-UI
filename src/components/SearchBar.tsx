
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useColorShift } from '@/hooks/useColorShift';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showResults?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search...", 
  showResults = true 
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const accentColor = useColorShift();

  // Mock search results
  const mockResults: SearchResult[] = [
    { id: '1', title: 'AI Development Services', description: 'Custom AI solutions for your business', category: 'Services', url: '/services' },
    { id: '2', title: 'Meet Our AI Team', description: 'Discover our AI-powered characters', category: 'Characters', url: '/characters' },
    { id: '3', title: 'Pricing Plans', description: 'Choose the perfect plan for your needs', category: 'Pricing', url: '/pricing' },
    { id: '4', title: 'Blog Articles', description: 'Latest insights on AI and technology', category: 'Blog', url: '/blog' },
    { id: '5', title: 'Contact Us', description: 'Get in touch with our team', category: 'Contact', url: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    onSearch?.(searchQuery);

    if (searchQuery.length > 0 && showResults) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = mockResults.filter(
          result => 
            result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsExpanded(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          placeholder={placeholder}
          className="pl-10 pr-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && showResults && (query.length > 0 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-gray-400 text-sm mt-2">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <motion.a
                    key={result.id}
                    href={result.url}
                    className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium truncate">{result.title}</h4>
                        <p className="text-gray-400 text-sm truncate">{result.description}</p>
                      </div>
                      <span 
                        className="ml-2 px-2 py-1 text-xs rounded-full flex-shrink-0"
                        style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                      >
                        {result.category}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : query.length > 0 ? (
              <div className="p-4 text-center">
                <p className="text-gray-400">No results found for "{query}"</p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
