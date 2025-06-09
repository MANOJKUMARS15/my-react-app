import React from 'react';
import { Factory } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Sri Sai Engineering</span>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} Sri Sai Engineering. All rights reserved.</p>
            <p className="text-sm mt-1">Precision Manufacturing Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;