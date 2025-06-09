import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "info@srisaiengineering.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 98765 43210",
    action: "Call Now"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Industrial Area, Bangalore",
    action: "Get Directions"
  }
];

const ContactSection = ({ onContactClick }) => {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team to discuss your manufacturing requirements.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactMethods.map((contact, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-effect rounded-xl p-8 text-center hover:glow-effect transition-all duration-300"
              {...scaleOnHover}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{contact.title}</h3>
              <p className="text-gray-300 mb-6">{contact.info}</p>
              <Button
                onClick={onContactClick}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                {contact.action}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;