import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from './BlogPage.jsx';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold"
        >
          Post not found
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8"
        >
          <Button asChild variant="link">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        <Button asChild variant="outline" className="mb-12 hover-lift">
          <Link to="/blog">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
        <article>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <span className="gradient-text-first">{post.title}</span>
          </h1>
          <p className="text-muted-foreground mb-8">By {post.author} on {post.date}</p>
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
            {post.content.split('\n').map((paragraph, index) => 
              <p key={index}>{paragraph}</p>
            )}
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPostPage;
