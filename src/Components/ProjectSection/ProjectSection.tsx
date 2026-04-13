import React, { useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/Screenshot 2025-07-21 233123.png';
import image2 from '../../assets/Screenshot 2025-08-05 223721.png';
import image3 from '../../assets/Screenshot 2025-12-01 194611.png';
import image4 from '../../assets/WhatsApp Image 2025-08-05 at 22.45.00_645f3acd.jpg';
import image5 from '../../assets/WhatsApp Image 2025-08-05 at 22.45.07_ad58866a.jpg';
import image6 from "../../assets/Screenshot 2026-04-13 at 7.50.27 AM.png"

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  features?: string[];
}

const ProjectsSection: React.FC = () => {
  const featured: Project = {
    id: 0,
    title: 'Townify — 2D Metaverse Platform',
    thumbnail: image6,
    description:
      'Real-time 2D virtual environment inspired by Gather Town. Features room-based WebRTC audio/video communication, WebSocket presence sync, Phaser.js interactive maps with collision detection, Redis Pub/Sub event system, scalable backend with Node.js and Prisma ORM, and a Turborepo monorepo — deployed on Azure VM with Nginx and automated CI/CD pipelines.',
    techStack: ['TypeScript', 'Node.js', 'React.js', 'WebSocket', 'WebRTC', 'Redis', 'Phaser.js', 'Prisma', 'Turborepo', 'Azure', 'Nginx', 'CI/CD'],
    liveUrl: 'https://townify.ayadweb.online',
    codeUrl: 'https://github.com/m-ayad10/Townify',
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Learning Management System',
      thumbnail: image3,
      description: 'Full-stack LMS with Student, Instructor, and Admin roles. OTP auth, Razorpay payments, course enrolment, and revenue analytics with AWS deployment.',
      techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Redux', 'Razorpay', 'AWS'],
      liveUrl: 'https://lms.frontend.ayadweb.online',
      codeUrl: 'https://github.com/m-ayad10/LMS-Backend.git',
    },
    {
      id: 2,
      title: 'E-commerce Fashion Website',
      thumbnail: image4,
      description: 'Responsive fashion store with product browsing, cart, wishlist, secure payments, and full admin dashboard built on Firebase.',
      techStack: ['React', 'Firebase', 'Bootstrap', 'JavaScript', 'REST API'],
      liveUrl: 'https://ecommerce-75c29.web.app',
      codeUrl: 'https://github.com/m-ayad10/Ecomerce_website',
    },
    {
      id: 3,
      title: 'Secure File Handling Platform',
      thumbnail: image1,
      description: 'Scalable file management platform with AWS S3, secure upload/preview/download, JWT authentication, and a responsive user dashboard.',
      techStack: ['React', 'Node.js', 'AWS S3', 'JWT', 'Tailwind', 'MongoDB'],
      liveUrl: 'https://file-processing-system.onrender.com',
      codeUrl: 'https://github.com/m-ayad10/File-handling-Platform',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      thumbnail: image5,
      description: 'Full-stack restaurant app with menu browsing, table booking, order tracking, and an admin panel.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
      liveUrl: 'https://restaurant-frontend-3k8b.onrender.com/',
      codeUrl: 'https://github.com/m-ayad10/Restaurant',
    },
    {
      id: 5,
      title: 'Netflix-Inspired Movie Website',
      thumbnail: image2,
      description: 'Movie streaming UI with trending listings, search, trailer integration, and TMDB-powered recommendations.',
      techStack: ['React', 'TMDB API', 'Bootstrap', 'JavaScript', 'REST API'],
      liveUrl: 'https://movie-ayad.netlify.app',
      codeUrl: 'https://github.com/m-ayad10/Netflix-Clone.git',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="text-sm font-medium text-[#2C6E6F] dark:text-[#4a9fa0] uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Featured Work
          </h2>
        </div>

        {/* Featured — Townify */}
        <div
          className="mb-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image or Placeholder panel */}
            <div className="relative h-72 lg:h-auto min-h-[280px] overflow-hidden">
              {featured.thumbnail ? (
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#2C6E6F]/8 dark:bg-[#2C6E6F]/15 flex flex-col items-center justify-center p-10">
                  <div className="w-24 h-24 rounded-2xl border-2 border-[#2C6E6F]/40 flex items-center justify-center mb-5">
                    <span className="text-4xl font-bold text-[#2C6E6F]">T</span>
                  </div>
                  <span className="text-sm font-semibold text-[#2C6E6F] dark:text-[#4a9fa0] tracking-widest uppercase">
                    Townify
                  </span>
                  <p className="text-xs text-gray-400 mt-1">2D Metaverse Platform</p>
                </div>
              )}
              {/* Featured badge */}
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[#2C6E6F] text-white text-xs font-semibold tracking-wide">
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Townify — 2D Metaverse Platform
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs border border-[#2C6E6F]/30 text-[#2C6E6F] dark:text-[#4a9fa0] dark:border-[#4a9fa0]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C6E6F] text-white text-sm font-semibold hover:bg-[#235758] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={featured.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-[#2C6E6F] hover:text-[#2C6E6F] dark:hover:border-[#4a9fa0] dark:hover:text-[#4a9fa0] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FiGithub className="w-4 h-4" /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#2C6E6F]/50 dark:hover:border-[#4a9fa0]/50 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Thumbnail */}
              <div className="h-44 overflow-hidden bg-gray-50 dark:bg-gray-900 flex-shrink-0">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#2C6E6F]/10">
                    <span className="text-3xl font-bold text-[#2C6E6F]/30">{project.title[0]}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#2C6E6F] dark:group-hover:text-[#4a9fa0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-auto pb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-700 text-gray-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-[#2C6E6F] text-white text-xs font-semibold hover:bg-[#235758] transition-all duration-300"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:border-[#2C6E6F] hover:text-[#2C6E6F] dark:hover:border-[#4a9fa0] dark:hover:text-[#4a9fa0] transition-all duration-300"
                  >
                    <FiGithub className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
