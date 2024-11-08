'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, PenTool, Layout, Lightbulb } from 'lucide-react';

const categories = [
  {
    title: 'Packaging Design',
    icon: Package,
    description: 'Medicine boxes, blister foils, labels, and patient information leaflets',
    color: 'bg-blue-500',
    slug: 'packaging'
  },
  {
    title: 'Medical Visual Aids',
    icon: PenTool,
    description: 'Mechanism of action illustrations and patient education materials',
    color: 'bg-purple-500',
    slug: 'visual-aids'
  },
  {
    title: 'Digital Design',
    icon: Layout,
    description: 'E-detailing presentations and digital marketing materials',
    color: 'bg-green-500',
    slug: 'digital'
  },
  {
    title: 'Branding',
    icon: Lightbulb,
    description: 'Logo design, brand guidelines, and corporate identity',
    color: 'bg-orange-500',
    slug: 'branding'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {}
      <div className = "h-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of pharmaceutical design projects across different 
            specializations, from packaging to digital solutions.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.slug}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative"
              >
                <Link href={`/projects/${category.slug}`}>
                  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                    </div>
                    <div className="relative p-8">
                      <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                        <span className="font-medium">View Projects</span>
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Have a project in mind?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}