import { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cloud Computing",
    excerpt: "Explore how artificial intelligence is revolutionizing cloud infrastructure and what it means for businesses worldwide.",
    content: "AI is transforming cloud computing by enabling predictive scaling, automated security, and intelligent resource management...",
    author: "Dr. Sarah Mitchell",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Technology",
    tags: ["AI", "Cloud Computing", "Technology"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Applications with Modern Cloud Architecture",
    excerpt: "Learn the best practices for creating applications that can grow with your business using cloud-native technologies.",
    content: "Modern applications require architecture that can scale efficiently and handle varying loads...",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Development",
    tags: ["Cloud Architecture", "Scalability", "DevOps"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Data Security in the Cloud: Best Practices for 2024",
    excerpt: "Comprehensive guide to securing your data in cloud environments with the latest security protocols and strategies.",
    content: "Cloud security remains a top priority for organizations migrating to cloud infrastructure...",
    author: "Jennifer Rodriguez",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Security",
    tags: ["Security", "Data Protection", "Cloud"],
    image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Machine Learning Operations: Streamlining ML Workflows",
    excerpt: "Discover how MLOps practices can help you deploy and manage machine learning models at scale.",
    content: "MLOps combines machine learning, DevOps, and data engineering to streamline the ML lifecycle...",
    author: "Alex Thompson",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Machine Learning",
    tags: ["MLOps", "Machine Learning", "Automation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 5,
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt: "Understanding how edge computing is enabling faster, more efficient IoT solutions across industries.",
    content: "Edge computing brings computation closer to data sources, reducing latency and improving performance...",
    author: "David Park",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "IoT",
    tags: ["Edge Computing", "IoT", "Performance"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Serverless Architecture: Pros, Cons, and Best Use Cases",
    excerpt: "A comprehensive analysis of serverless computing and when it's the right choice for your applications.",
    content: "Serverless architecture offers scalability and cost-effectiveness, but it's not suitable for every use case...",
    author: "Emily Watson",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Architecture",
    tags: ["Serverless", "Architecture", "Cost Optimization"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
    featured: false
  }
];

const categories = ["All", "AI Technology", "Development", "Security", "Machine Learning", "IoT", "Architecture"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-teal-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in cloud computing, AI, and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && !searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Tag className="w-6 h-6 text-teal-400" />
                Featured Article
              </h2>
              <Card className="bg-white/10 border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-4 bg-teal-500/20 text-teal-400 border-teal-500/30">
                      {featuredPost.category}
                    </Badge>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white hover:text-teal-400 transition-colors">
                        {featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mt-2">
                        {featuredPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <Card key={post.id} className="bg-white/10 border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-teal-500/20 text-teal-400 border-teal-500/30">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white hover:text-teal-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;