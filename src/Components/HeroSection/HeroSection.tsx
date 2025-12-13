import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/ayad.jpeg";
import CV from "../../assets/Mohammed Ayad CV .pdf";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      AOS.refresh();
    };
  }, []);

  // Handle contact button click
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Profession titles for typing animation
  const professions = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Freelancer",
    "Devops Engineer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div
            className="order-2 lg:order-1 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Greeting */}
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2"></span>
                <span className="text-sm font-medium text-amber-500 dark:text-amber-400">
                  Hello! I'm
                </span>
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-amber-100 dark:to-white">
                Mohammed
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 animate-gradient-x">
                Ayad
              </span>
            </h1>

            {/* Profession - Typewriter Animation */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-12 md:h-14 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold min-h-[1.5em]">
                  <Typewriter
                    words={professions}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Passionate developer crafting exceptional digital experiences with
              modern technologies. Specializing in building scalable web
              applications with React, Node.js, and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>

              {/* Download CV Button */}
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full border-2 border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 font-semibold transition-all duration-300 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Links (Optional) */}
            <div
              className="mt-12 flex justify-center lg:justify-start gap-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {[
                {
                  name: "GitHub",
                  icon: <FiGithub className="w-6 h-6" />,
                  url: "https://github.com/m-ayad10",
                },
                {
                  name: "LinkedIn",
                  icon: <FiLinkedin className="w-6 h-6" />,
                  url: "https://linkedin.com/in/mohammed-ayad-80a16b226",
                },
                {
                  name: "Instagram",
                  icon: <FiInstagram className="w-6 h-6" />,
                  url: "https://instagram.com/m_.ayad",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.name}
                >
                  {social.icon}

                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    {social.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            data-aos={isMobile ? "fade-up" : "zoom-in"}
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 sm:w-100 sm:h-100 md:w-125 md:h-125 lg:w-[500px] lg:h-[500px]">
                {/* Outer Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 blur-2xl animate-pulse"></div>

                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group">
                  {/* Fallback Image - Replace with your actual image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">MA</span>
                  </div> */}
                  <img src={image}  alt="" />

                  {/* Hover Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  {/* Floating Elements */}
                  {/* <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-80 animate-bounce"></div> */}
                  {/* <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-80 animate-bounce delay-300"></div> */}
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-amber-400/30 animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-4 border-orange-500/30 animate-spin-slow reverse"></div>
                 */}
                {/* Badge */}
                {/* <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold shadow-lg">
                  Available for work
                </div> */}
              </div>

              {/* Stats Cards */}
              <div
                className="absolute -left-4 top-1/4 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <div className="text-center">
                  <div className="text-md md:text-xl lg:text-2xl font-bold text-amber-600 dark:text-amber-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
              </div>

              {/* <div 
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                data-aos="fade-left"
                data-aos-delay="800"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
