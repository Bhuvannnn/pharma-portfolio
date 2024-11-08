'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// Sample data - replace with your actual projects
const projectsData = {
  'packaging': [
    {
      id: 1,
      title: 'Medicine Box Design',
      description: 'Modern packaging design for pharmaceutical products',
      image: '/api/placeholder/600/400'
    },
    // Add more projects...
  ],
  'visual-aids': [
    {
      id: 2,
      title: 'Drug Mechanism Visualization',
      description: 'Detailed 3D visualization of drug interaction',
      image: '/api/placeholder/600/400'
    },
    // Add more projects...
  ],
  // Add other categories...
};

const categoryTitles = {
  'packaging': 'Packaging Design',
  'visual-aids': 'Medical Visual Aids',
  'digital': 'Digital Design',
  'branding': 'Branding Solutions'
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const projects = projectsData[category as keyof typeof projectsData] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || category;

  return (
    <div className="min-h-screen">
      {/* Added a spacer div for the navigation */}
      <div className="h-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20"> {/* Adjusted padding */}
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12" // Increased bottom margin
        >
          <Link 
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16" // Changed my-16 to mb-16
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{categoryTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest work in {categoryTitle.toLowerCase()}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-600">No projects found in this category.</p>
            <Link 
              href="/projects"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to all projects
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}