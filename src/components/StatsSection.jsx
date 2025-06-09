import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Star } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';

const statsData = [
  { icon: Award, number: "50+", label: "Projects Initiated" },
  { icon: Users, number: "10+", label: "New Clients" },
  { icon: TrendingUp, number: "1+", label: "Year In Business" },
  { icon: Star, number: "Fresh", label: "Innovative Approach" }
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center glass-effect rounded-xl p-8"
              {...scaleOnHover}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;