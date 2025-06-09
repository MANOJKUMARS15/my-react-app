import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';

const featuresData = [
  {
    icon: Settings,
    title: "Advanced VMC/CNC Technology",
    description: "State-of-the-art machinery ensuring micron-level precision for complex components."
  },
  {
    icon: Zap,
    title: "Lightning Fast Turnaround",
    description: "Optimized workflows and efficient processes deliver your components ahead of schedule."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and inspection protocols guarantee components meet exact specifications."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Sri Sai Engineering</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technology meets fresh, innovative expertise to deliver unmatched precision.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-effect rounded-xl p-8 hover:glow-effect transition-all duration-300"
              {...scaleOnHover}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;