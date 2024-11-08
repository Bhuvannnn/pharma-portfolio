'use client';

import { motion } from 'framer-motion';
import { Package, PenTool, Layout, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'Packaging Design',
    icon: Package,
    description: 'Medicine boxes, blister foils, labels, and patient information leaflets for pharmaceutical products',
    color: 'bg-blue-500',
    slug: 'packaging'
  },
  {
    title: 'Medical Visual Aids',
    icon: PenTool,
    description: 'Mechanism of action illustrations, patient education materials, and scientific visualizations',
    color: 'bg-purple-500',
    slug: 'visual-aids'
  },
  {
    title: 'Digital Design',
    icon: Layout,
    description: 'E-detailing presentations, digital marketing materials, and interactive medical content',
    color: 'bg-green-500',
    slug: 'digital'
  },
  {
    title: 'Branding',
    icon: Lightbulb,
    description: 'Logo design, brand guidelines, corporate identity, and visual communication strategies',
    color: 'bg-orange-500',
    slug: 'branding'
  },
];

export default function ProjectCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Categories</h2>
          <p className="text-xl text-gray-600">Specialized design solutions for the pharmaceutical industry</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link href={`/projects/${category.slug}`} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 flex-grow">{category.description}</p>
                  <motion.div 
                    className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">View Projects</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}