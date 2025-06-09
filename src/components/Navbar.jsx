import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Factory } from 'lucide-react';

const Navbar = ({ onQuoteClick }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Sri Sai Engineering</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#capabilities" className="hover:text-purple-400 transition-colors">Capabilities</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <Button
            onClick={onQuoteClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;