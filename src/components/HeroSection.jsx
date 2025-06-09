import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';

const HeroSection = ({ onContactClick }) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Precision Manufacturing
            <br />
            <span className="gradient-text">Redefined</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Advanced VMC/CNC machining solutions delivering exceptional quality components
            for industries that demand perfection. We are a young and dynamic team ready to innovate!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 glow-effect"
              {...scaleOnHover}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
              {...scaleOnHover}
            >
              View Capabilities
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="glass-effect rounded-2xl p-8 floating-animation">
            <img
              alt="Modern CNC machining center in operation"
              className="w-full h-96 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1624451322046-a31372fa6e3e" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;