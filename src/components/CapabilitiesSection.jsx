import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { scaleOnHover } from '@/lib/animations';

const capabilitiesList = [
  "Multi-axis CNC machining for complex geometries",
  "High-precision VMC operations with ±0.001mm tolerance",
  "Rapid prototyping and production runs",
  "Quality inspection with advanced metrology",
  "Custom tooling and fixture design",
  "Material expertise across metals and alloys"
];

const CapabilitiesSection = ({ onQuoteClick }) => {
  return (
    <section className="py-20 px-6" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Manufacturing <span className="gradient-text">Excellence</span>
            </h2>

            <div className="space-y-6">
              {capabilitiesList.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                onClick={onQuoteClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                {...scaleOnHover}
              >
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-6">
              <img
                alt="Precision machined components showcase"
                className="w-full h-96 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1684696244571-b84d6d32c6df" />
            </div>

            <motion.div
              className="absolute -top-6 -right-6 glass-effect rounded-xl p-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-gray-300">Precision Rate</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Agile</div>
                <div className="text-sm text-gray-300">Operations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;