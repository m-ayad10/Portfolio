// components/ProjectsSection.tsx
import React, { useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/Screenshot 2025-07-21 233123.png'
import image2 from '../../assets/Screenshot 2025-08-05 223721.png'
import image3 from '../../assets/Screenshot 2025-12-01 194611.png'
import image4 from '../../assets/WhatsApp Image 2025-08-05 at 22.45.00_645f3acd.jpg'
import image5 from '../../assets/WhatsApp Image 2025-08-05 at 22.45.07_ad58866a.jpg'


// TypeScript interface for Project
interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail?:string,
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  imageUrl?: string;
  features: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      thumbnail:image3,
      description: "Full-stack LMS platform with Student, Instructor, and Admin modules. Secure login with OTP, payments, course tracking, and analytics dashboard.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Redux", "Tailwind", "Razorpay"],
      liveUrl: "https://lms-frontend-iota-liart.vercel.app",
      codeUrl: "https://github.com/m-ayad10/LMS-Backend.git",
      features: [
        "Student/Instructor/Admin modules",
        "OTP verification & secure payments",
        "Course progress tracking",
        "Revenue analytics & charts"
      ]
    },
    {
      id: 2,
      title: "E-commerce Fashion Website",
      thumbnail:image4,
      description: "Responsive e-commerce platform with product browsing, cart management, wishlist, secure payments, and admin dashboard.",
      techStack: ["React", "Firebase", "Bootstrap", "JavaScript", "REST API"],
      liveUrl: "https://ecommerce-75c29.web.app",
      codeUrl: "https://github.com/m-ayad10/Ecomerce_website",
      features: [
        "Product catalog & filtering",
        "Cart & wishlist management",
        "Secure payment integration",
        "Admin product management"
      ]
    },
    {
      id: 3,
      title: "Secure File Handling Platform",
      thumbnail:image1,
      description: "Scalable file management platform with secure upload, preview, download features using AWS S3 and JWT authentication.",
      techStack: ["React", "Node.js", "AWS S3", "JWT", "Tailwind", "MongoDB"],
      liveUrl: "https://file-processing-system.onrender.com",
      codeUrl: "https://github.com/m-ayad10/File-handling-Platform",
      features: [
        "Secure file upload & storage",
        "File preview & download",
        "JWT authentication",
        "User dashboard"
      ]
    },
    {
      id: 4,
      title: "Restaurant Website",
      thumbnail:image5,
      description: "Fully responsive restaurant web app with menu browsing, table booking, order tracking, and admin panel.",
      techStack: ["React.js", "Node.js", "MongoDB", "Razorpay", "JWT", "Bootstrap"],
      liveUrl: "https://restaurant-frontend-3k8b.onrender.com/",
      codeUrl: "https://github.com/m-ayad10/Restaurant",
      features: [
        "Menu browsing & cart",
        "Table booking system",
        "Order tracking",
        "Admin dashboard"
      ]
    },
    {
      id: 5,
      title: "Netflix-Inspired Movie Website",
      thumbnail:image2,
      description: "Responsive movie streaming platform with trending listings, search, trailers, and recommendations using TMDB API.",
      techStack: ["React", "TMDB API", "Bootstrap", "JavaScript", "REST API"],
      liveUrl: "https://movie-ayad.netlify.app",
      codeUrl: "https://github.com/m-ayad10/Netflix-Clone.git",
      features: [
        "Trending & latest movies",
        "Movie search & filters",
        "Trailer integration",
        "Recommendation system"
      ]
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="projects" className="py-5 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my recent work and development projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img src={project.thumbnail||''} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tech Stack Badges on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/live"
                    >
                      <FiExternalLink className="w-4 h-4 group-hover/live:rotate-12 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/code"
                    >
                      <FiGithub className="w-4 h-4 group-hover/code:scale-110 transition-transform" />
                      <span>View Code</span>
                    </a>
                  </div>
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