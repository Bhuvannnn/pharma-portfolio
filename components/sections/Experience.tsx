'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Building2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Design Director",
    company: "Current Company Name",
    period: "2020 - Present",
    description: "Leading pharmaceutical design projects and managing client relationships",
    icon: Building2,
    highlights: [
      "Managed over 50+ pharmaceutical design projects",
      "Led rebranding initiatives for major healthcare clients",
      "Developed design systems for medical communications"
    ]
  },
  {
    id: 2,
    role: "Senior Designer",
    company: "Previous Company",
    period: "2017 - 2020",
    description: "Specialized in medical visual aids and packaging design",
    icon: Briefcase,
    highlights: [
      "Created innovative packaging solutions",
      "Designed medical education materials",
      "Collaborated with medical experts"
    ]
  },
  {
    id: 3,
    role: "Design Achievement",
    company: "Industry Recognition",
    period: "2019",
    description: "Received multiple industry awards for pharmaceutical design excellence",
    icon: Award,
    highlights: [
      "Best Packaging Design Award",
      "Healthcare Communications Excellence",
      "Innovation in Medical Design"
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0])
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
          </motion.div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of experiences shaping pharmaceutical design excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {/* Experience Items */}
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-16"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} justify-center`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{experience.role}</h3>
                      <p className="text-blue-600 font-medium mb-2">{experience.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
                      <p className="text-gray-600 mb-4">{experience.description}</p>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-12">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}