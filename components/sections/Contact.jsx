'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Add your form submission logic here
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
//     setIsSubmitting(false);
//   };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (123) 456-7890',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'City, Country',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your pharmaceutical design needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            {/* </form> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}