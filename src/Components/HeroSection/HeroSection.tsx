import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/ayad.jpeg";
import CV from "../../assets/Mohammed Ayad CV.pdf";
import { FiGithub, FiInstagram, FiLinkedin, FiDownload, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const professions = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Freelancer",
    "DevOps Engineer",
  ];

  const socialLinks = [
    { name: "GitHub",    icon: <FiGithub className="w-5 h-5" />,    url: "https://github.com/m-ayad10" },
    { name: "LinkedIn",  icon: <FiLinkedin className="w-5 h-5" />,  url: "https://linkedin.com/in/mohammed-ayad-80a16b226" },
    { name: "Instagram", icon: <FiInstagram className="w-5 h-5" />, url: "https://instagram.com/m_.ayad" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #2C6E6F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-24">

          {/* Left — Text */}
          <div
            className="order-2 lg:order-1 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Status badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2C6E6F]/25 bg-[#2C6E6F]/5 text-sm font-medium text-[#2C6E6F] dark:text-[#4a9fa0]">
                <span className="w-2 h-2 rounded-full bg-[#2C6E6F] animate-pulse" />
                Available for work
              </span>
            </div>

            {/* Name */}
            <h1 className="font-bold leading-[1.05] tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white">
                Mohammed
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2C6E6F]">
                Ayad
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-9 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg sm:text-xl font-medium text-gray-400 dark:text-gray-500 mr-2">I'm a</span>
              <span className="text-lg sm:text-xl font-semibold text-[#2C6E6F] dark:text-[#4a9fa0]">
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
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              MERN Stack Developer specializing in scalable full-stack applications,
              real-time systems, and cloud deployment. I build things that work.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-[#2C6E6F]/40 mx-auto lg:mx-0 mb-10" />

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <button
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2C6E6F] text-white font-semibold hover:bg-[#235758] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2C6E6F]/30"
              >
                Contact Me <FiArrowRight className="w-4 h-4" />
              </button>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#2C6E6F] text-[#2C6E6F] dark:text-[#4a9fa0] dark:border-[#4a9fa0] font-semibold hover:bg-[#2C6E6F] hover:text-white dark:hover:bg-[#4a9fa0] dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Download CV <FiDownload className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start gap-3"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-[#2C6E6F] hover:text-[#2C6E6F] dark:hover:border-[#4a9fa0] dark:hover:text-[#4a9fa0] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-delay="200"
          >
            <div className="relative">

              {/* Outer ring decoration */}
              <div className="absolute inset-[-16px] rounded-full border border-[#2C6E6F]/15 dark:border-[#2C6E6F]/20" />
              <div className="absolute inset-[-36px] rounded-full border border-[#2C6E6F]/08 dark:border-[#2C6E6F]/12" />

              {/* Stats — Projects */}
              <div
                className="absolute -left-8 top-1/4 z-10 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="text-2xl font-bold text-[#2C6E6F] dark:text-[#4a9fa0] leading-none">5+</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Projects</div>
              </div>

              {/* Stats — Stack */}
              <div
                className="absolute -right-8 bottom-1/4 z-10 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="text-2xl font-bold text-[#2C6E6F] dark:text-[#4a9fa0] leading-none">MERN</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Stack</div>
              </div>

              {/* Profile image */}
              <div className="w-72 h-72 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border-4 border-[#2C6E6F] shadow-2xl">
                <img
                  src={image}
                  alt="Mohammed Ayad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gray-400 dark:bg-gray-600 animate-pulse" />
          <span className="text-xs tracking-widest text-gray-400 dark:text-gray-500 uppercase">Scroll</span>
        </div>

      </div>
    </section>
  );
}
