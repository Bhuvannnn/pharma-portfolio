'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Sample project data - you can replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Medicine Packaging Redesign",
    category: "Packaging Design",
    description: "Complete packaging redesign for a leading pharmaceutical product line",
    image: "/api/placeholder/600/400", // Replace with actual image path
    tags: ["Packaging", "Branding", "Print"]
  },
  {
    id: 2,
    title: "Medical Mechanism Illustration",
    category: "Visual Aids",
    description: "Detailed illustration explaining drug mechanism of action",
    image: "/api/placeholder/600/400", // Replace with actual image path
    tags: ["Illustration", "Medical", "Education"]
  },
  {
    id: 3,
    title: "Pharmaceutical Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a new pharmaceutical company",
    image: "/api/placeholder/600/400", // Replace with actual image path
    tags: ["Branding", "Identity", "Logo"]
  },
  {
    id: 4,
    title: "Patient Information Leaflet",
    category: "Print Design",
    description: "User-friendly information leaflet design for medications",
    image: "/api/placeholder/600/400", // Replace with actual image path
    tags: ["Print", "Information", "Layout"]
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my best work in pharmaceutical design, showcasing various aspects of medical communication and branding.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-sm font-medium text-white hover:text-blue-200 transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}