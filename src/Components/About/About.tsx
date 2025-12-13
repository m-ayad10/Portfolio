// components/AboutSection.tsx
import React from "react";
import {
  FiBook,
  FiBriefcase,
  FiUser,
  FiCalendar,
  FiCheck,
} from "react-icons/fi";
import "aos/dist/aos.css";

const AboutSection: React.FC = () => {
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
  //     checkMobile();
  //     window.addEventListener('resize', checkMobile);
  //     return () => window.removeEventListener('resize', checkMobile);
  //   }, []);

   const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="about" className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-amber-600 dark:text-amber-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From education to professional experience
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Card */}
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-8"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <FiUser className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About Me
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Passionate software developer skilled in Node.js and React.js,
                  with experience in building full-stack applications.
                  Proficient in MongoDB and committed to delivering high-quality
                  code while embracing new challenges and continuously expanding
                  my skill set.
                </p>

                {/* Key Skills */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'REST API'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <FiCheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Experience Card */}
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-8"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <FiBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>

              <div className="space-y-8">
                {/* Experience Item */}
                <div className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <FiBriefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Timeline line */}
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-blue-500/30 to-transparent"></div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <FiCalendar className="w-3 h-3" />
                      Aug 2025 - Present
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    MERN Stack Developer Intern
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                    Bridgeon Solutions
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Gained hands-on experience with modern web technologies
                        including React, Node.js, MongoDB, and TypeScript
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Built full-stack features, wrote reusable components,
                        and optimized backend API performance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Collaborated using Git/GitHub, participated in code
                        reviews, and enhanced team communication
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Learned deployment fundamentals, schema design,
                        authentication workflows, and best practices
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8 mt-2">
                {/* Experience Item */}
                <div className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <FiBriefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Timeline line */}
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-blue-500/30 to-transparent"></div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <FiCalendar className="w-3 h-3" />
                      Sep 2024 - Nov 2024
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Project Intern
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                    Phemesoftware Pvt Ltd 
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Worked as Frontend Developer on an E-commerce Fashion Website using React . Developed core features like product browsing, cart, wishlist, admin panel, and also created HLD, LLD, and project reports.
                      </span>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            {/* Education Card */}
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl overflow-hidden"
              data-aos="fade-left"
            >
              <div className="p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <FiBook className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="relative pl-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-white"></div>
                    {/* Timeline line */}
                    <div className="absolute left-2 top-5 w-0.5 h-full bg-white/30"></div>

                    {/* Date */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm">
                        <FiCalendar className="w-3 h-3" />
                        2022 - 2025
                      </span>
                    </div>

                    {/* Degree */}
                    <h4 className="text-xl font-bold mb-2">
                      Bachelor of Computer Application
                    </h4>

                    {/* University */}
                    <p className="text-amber-100 font-medium mb-3">
                      Yenepoya University
                    </p>

                    {/* Description */}
                    <p className="text-white/80 text-sm">
                      Specialized in software development, web technologies, and
                      computer applications with focus on modern programming
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            {/* <div 
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-8"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Stats</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">MERN</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stack</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Full</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stack</div>
                </div>
              </div>
            </div> */}

            {/* Call to Action */}
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl p-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Interested in working together or have a question?
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-white text-gray-900 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
