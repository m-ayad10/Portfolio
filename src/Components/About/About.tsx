import React from "react";
import { FiCalendar } from "react-icons/fi";
import "aos/dist/aos.css";

const AboutSection: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="text-sm font-medium text-[#2C6E6F] dark:text-[#4a9fa0] uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Background & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — About + Experience */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <div data-aos="fade-up">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                MERN Stack Developer with hands-on experience building scalable
                full-stack web applications using React.js, Node.js, Express.js,
                and MongoDB. Proficient in REST API development, authentication
                systems, and real-time communication using WebSocket/WebRTC.
                Experienced with cloud deployment on AWS and CI/CD pipelines.
              </p>
            </div>

            {/* Experience */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
                Experience
              </h3>

              <div className="space-y-10 border-l-2 border-gray-100 dark:border-gray-700 pl-6">

                {/* Bridgeon Solutions */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#2C6E6F]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      MERN Stack Developer Intern
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                      <FiCalendar className="w-3.5 h-3.5" /> Aug 2025 – Present
                    </span>
                  </div>
                  <p className="text-[#2C6E6F] dark:text-[#4a9fa0] text-sm font-medium mb-3">
                    Bridgeon Solutions
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-disc list-inside">
                    <li>Built full-stack features with React, Node.js, MongoDB, TypeScript, WebSocket, and WebRTC.</li>
                    <li>Wrote reusable components, optimized backend APIs, and participated in code reviews.</li>
                    <li>Practiced schema design, auth workflows, and CI/CD deployment via Git/GitHub.</li>
                  </ul>
                </div>

                {/* Phemesoftware */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Project Intern
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                      <FiCalendar className="w-3.5 h-3.5" /> Sep 2024 – Nov 2024
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">
                    Phemesoftware Pvt Ltd
                  </p>
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-disc list-inside">
                    <li>Developed an E-commerce Fashion Website as Frontend Developer using React.</li>
                    <li>Implemented product browsing, cart, wishlist, and admin panel; created HLD/LLD documentation.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Right — Education + CTA */}
          <div className="space-y-6">

            {/* Education */}
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="border-l-2 border-[#2C6E6F]/40 pl-5">
                <span className="text-xs text-gray-400 dark:text-gray-500">2022 – 2025</span>
                <h4 className="font-semibold text-gray-900 dark:text-white mt-1 mb-1">
                  Bachelor of Computer Application
                </h4>
                <p className="text-[#2C6E6F] dark:text-[#4a9fa0] text-sm font-medium">
                  Yenepoya University
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl bg-gray-900 dark:bg-gray-800 border border-gray-700 p-6"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                Let's work together
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Open to full-time roles and freelance opportunities.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#2C6E6F] text-white font-semibold hover:bg-[#235758] transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
