'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Package, PenTool, Layout, Lightbulb } from 'lucide-react';

// Define the project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
  year: string;
  tags: string[];
  details: string;
}

// Project data organized by category
const projectData: Record<string, Project[]> = {
  'packaging': [
    {
      id: 1,
      title: "Medicine Box Design",
      description: "Modern packaging design with holographic security features and patient-friendly information layout",
      image: "/api/placeholder/600/400",
      client: "PharmaCo Ltd",
      year: "2024",
      tags: ["Packaging", "Print", "Security"],
      details: "Complete packaging solution including box, leaflet, and security features"
    },
    {
      id: 2,
      title: "Blister Pack Series",
      description: "Child-resistant blister packaging with clear dosage instructions",
      image: "/api/placeholder/600/400",
      client: "MediPack Solutions",
      year: "2023",
      tags: ["Packaging", "Safety", "Instructions"],
      details: "Innovative blister pack design focused on safety and clarity"
    },
    // Add more packaging projects...
  ],
  'visual-aids': [
    {
      id: 3,
      title: "Drug Mechanism Animation",
      description: "3D visualization of drug interaction with cellular receptors",
      image: "/api/placeholder/600/400",
      client: "BioTech Research",
      year: "2024",
      tags: ["Animation", "Medical", "Education"],
      details: "Interactive 3D animation for medical professionals"
    },
    {
      id: 4,
      title: "Patient Journey Map",
      description: "Visual guide explaining treatment timeline and expectations",
      image: "/api/placeholder/600/400",
      client: "Healthcare Plus",
      year: "2023",
      tags: ["Patient Education", "Infographic"],
      details: "Comprehensive patient education materials"
    },
    // Add more visual aid projects...
  ],
  'digital': [
    {
      id: 5,
      title: "Medical App Interface",
      description: "Patient monitoring app with intuitive data visualization",
      image: "/api/placeholder/600/400",
      client: "HealthTech Solutions",
      year: "2024",
      tags: ["UI/UX", "Mobile", "Healthcare"],
      details: "Complete mobile app interface design"
    },
    {
      id: 6,
      title: "E-Detailing Platform",
      description: "Interactive presentation platform for medical sales representatives",
      image: "/api/placeholder/600/400",
      client: "Pharma Digital",
      year: "2023",
      tags: ["Digital", "Sales", "Interactive"],
      details: "Digital sales tool with interactive features"
    },
    // Add more digital projects...
  ],
  'branding': [
    {
      id: 7,
      title: "Pharmaceutical Brand Identity",
      description: "Complete rebrand for established pharmaceutical company",
      image: "/api/placeholder/600/400",
      client: "Global Pharma Inc",
      year: "2024",
      tags: ["Branding", "Identity", "Guidelines"],
      details: "Full brand identity system and guidelines"
    },
    {
      id: 8,
      title: "Medical Conference Branding",
      description: "Brand identity for international medical symposium",
      image: "/api/placeholder/600/400",
      client: "MedConf 2024",
      year: "2023",
      tags: ["Event", "Branding", "Collateral"],
      details: "Complete event branding package"
    },
    // Add more branding projects...
  ]
};

// Category metadata
const categoryInfo = {
  'packaging': {
    title: 'Packaging Design',
    description: 'Innovative pharmaceutical packaging solutions combining safety, clarity, and aesthetic appeal',
    icon: Package,
    color: 'bg-blue-500'
  },
  'visual-aids': {
    title: 'Medical Visual Aids',
    description: 'Educational and informative visual content for healthcare professionals and patients',
    icon: PenTool,
    color: 'bg-purple-500'
  },
  'digital': {
    title: 'Digital Design',
    description: 'Interactive digital solutions and interfaces for modern healthcare applications',
    icon: Layout,
    color: 'bg-green-500'
  },
  'branding': {
    title: 'Branding Solutions',
    description: 'Comprehensive brand identity systems for healthcare organizations',
    icon: Lightbulb,
    color: 'bg-orange-500'
  }
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  
  // Check if category exists
  if (!projectData[category] || !categoryInfo[category as keyof typeof categoryInfo]) {
    router.push('/projects');
    return null;
  }

  const projects = projectData[category];
  const info = categoryInfo[category as keyof typeof categoryInfo];
  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
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
          className="text-center mb-16"
        >
          <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
            <Icon className="w-8 h-8" />
          </div>
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
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
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

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="text-sm font-medium">View Case Study</span>
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