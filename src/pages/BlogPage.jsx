import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Dummy data for blog posts
const posts = [
  {
    id: 'first-post',
    title: 'My First Blog Post',
    author: 'Admin',
    date: 'October 7, 2025',
    excerpt: 'This is the beginning of something great. A journey into the world of blogging...',
    content: 'This is the full content of the first blog post. It is longer than the excerpt and contains all the details that the reader would be interested in. Welcome to the blog!\n\nThis is another paragraph to demonstrate how the content is rendered.'
  },
  {
    id: 'second-post',
    title: 'React and AI: A Powerful Combination',
    author: 'Jane Doe',
    date: 'October 10, 2025',
    excerpt: 'Exploring how React.js can be used to build amazing user interfaces for AI-powered applications...',
    content: 'In this post, we dive deep into the synergies between React for front-end development and various AI technologies on the backend. We will look at examples and best practices.\n\nWe will cover topics such as state management, API integration, and how to handle real-time data streams from AI models.'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestro <span className="gradient-text-first">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestros últimos artículos, ideas y tutoriales sobre el mundo de la Inteligencia Artificial.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="h-full"
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <Card className="h-full flex flex-col hover-lift card-glow perspective-card-inner gradient-border-first">
                    <CardHeader>
                      <CardTitle className="text-2xl hover:underline">{post.title}</CardTitle>
                      <CardDescription>Por {post.author} el {post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <div className="font-semibold text-primary flex items-center">
                        Leer más <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { posts }; // Export posts to be used in BlogPostPage
export default BlogPage;
