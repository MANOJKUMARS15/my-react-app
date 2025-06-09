import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Wrench, Shield, Zap } from 'lucide-react';

const AboutSection = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 1;

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              alt="Sri Sai Engineering manufacturing facility"
              className="w-full h-96 object-cover rounded-2xl glass-effect p-4"
              src="https://images.unsplash.com/photo-1685302822454-6a5f3c329678" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Crafting <span className="gradient-text">Precision</span> Since {startYear}
            </h2>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Sri Sai Engineering, established in {startYear}, is a dynamic startup at the forefront of precision manufacturing. We blend youthful innovation with cutting-edge technology to deliver components that exceed industry standards.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our state-of-the-art facility houses the latest VMC and CNC machinery, operated by a passionate team of skilled technicians who believe every micron matters. As a new entrant, we are agile, responsive, and committed to excellence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Cog className="w-6 h-6 text-purple-400" />
                <span>Modern Machinery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-6 h-6 text-blue-400" />
                <span>Skilled Technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Quality Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Agile & Responsive</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;