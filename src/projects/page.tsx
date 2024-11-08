'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// Sample project data - replace with your actual data
const projectData = {
  'packaging': [
    {
      id: 1,
      title: "Medicine Box Design",
      description: "Modern packaging design with clear information hierarchy and brand consistency",
      image: "/api/placeholder/600/400",
      client: "PharmaCo Ltd",
      year: "2023",
      tags: ["Packaging", "Print", "Brand"],
      details: "Complete packaging solution including box design, blister packs, and leaflets"
    },
    {
      id: 2,
      title: "Supplement Packaging",
      description: "Premium packaging design for vitamin supplement line",
      image: "/api/placeholder/600/400",
      client: "Vita Health",
      year: "2023",
      tags: ["Packaging", "Branding"],
      details: "Series of connected designs for multiple product variants"
    },
  ],
  'visual-aids': [
    {
      id: 3,
      title: "Drug Mechanism Animation",
      description: "Detailed illustration sequence showing drug interaction",
      image: "/api/placeholder/600/400",
      client: "MedEd Solutions",
      year: "2024",
      tags: ["Medical", "Animation"],
      details: "Educational material for healthcare professionals"
    },
    {
      id: 4,
      title: "Patient Education Series",
      description: "Illustrated guide for patient treatment journey",
      image: "/api/placeholder/600/400",
      client: "Healthcare Corp",
      year: "2023",
      tags: ["Education", "Print"],
      details: "Series of visual aids for patient education"
    },
  ],
  'digital': [
    {
      id: 5,
      title: "E-detailing Platform",
      description: "Interactive presentation system for sales representatives",
      image: "/api/placeholder/600/400",
      client: "Pharma Digital",
      year: "2024",
      tags: ["Digital", "UI/UX"],
      details: "Complete digital presentation system"
    },
    {
      id: 6,
      title: "Medical App Interface",
      description: "User interface design for medical monitoring app",
      image: "/api/placeholder/600/400",
      client: "MedTech Inc",
      year: "2023",
      tags: ["Digital", "UI/UX"],
      details: "Mobile application interface design"
    },
  ],
  'branding': [
    {
      id: 7,
      title: "Pharmaceutical Brand Identity",
      description: "Complete brand identity system for pharmaceutical company",
      image: "/api/placeholder/600/400",
      client: "NewHealth Labs",
      year: "2024",
      tags: ["Branding", "Identity"],
      details: "Full brand guidelines and identity system"
    },
    {
      id: 8,
      title: "Medical Conference Branding",
      description: "Visual identity for international medical conference",
      image: "/api/placeholder/600/400",
      client: "MedConf 2024",
      year: "2024",
      tags: ["Branding", "Event"],
      details: "Event branding and marketing materials"
    },
  ],
};

const categoryInfo = {
  'packaging': {
    title: 'Packaging Design',
    description: 'Innovative pharmaceutical packaging solutions that combine functionality with aesthetic appeal',
    icon: '📦'
  },
  'visual-aids': {
    title: 'Medical Visual Aids',
    description: 'Clear and engaging visual communications for medical education and training',
    icon: '🎨'
  },
  'digital': {
    title: 'Digital Design',
    description: 'Interactive digital solutions for modern healthcare communication',
    icon: '💻'
  },
  'branding': {
    title: 'Branding Solutions',
    description: 'Comprehensive brand identity systems for healthcare organizations',
    icon: '✨'
  }
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  
  const projects = projectData[category as keyof typeof projectData];
  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!projects || !info) {
    router.push('/404');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">{info.icon}</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{info.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{info.description}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Client: {project.client}</span>
                  <span className="text-gray-500">{project.year}</span>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}