// components/ContactSection.tsx
import React, { useState, useEffect } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone, FiLinkedin, FiInstagram, FiGithub, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/mohammed-ayad-80a16b226', color: 'hover:bg-blue-600' },
    { icon: FiInstagram, label: 'Instagram', url: 'https://instagram.com/m_.ayad', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' },
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com/m-ayad10', color: 'hover:bg-gray-800' },
  ];

  const contactInfo = [
    { icon: FiMapPin, label: 'Location', value: 'Kasargod, Kerala, India' },
    { icon: FiMail, label: 'Email', value: 'ayadmohammed403@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 9074731468' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 4) {
      newErrors.message = 'Message must be at least 4 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd6f5eef9-8469-4a93-ae5e-095abd2185f4',
          ...formData
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <FiSend className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Let's Build
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
              Something Amazing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="200">
          
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                  <FiSend className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-300`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-2 text-sm text-red-500">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-300`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 text-sm text-red-500">
                        <FiAlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-300`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:outline-none transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <FiAlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHovered('submit')}
                  onMouseLeave={() => setIsHovered(null)}
                  className="w-full group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FiSend className={`w-5 h-5 transition-transform duration-300 ${
                          isHovered === 'submit' ? 'rotate-12' : ''
                        }`} />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isHovered === 'submit' ? 'opacity-100' : ''
                  }`}></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-gray-500/10 to-gray-600/10">
                  <FiMail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-300"
                      onMouseEnter={() => setIsHovered(info.label)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${
                        isHovered === info.label 
                          ? 'from-blue-500/20 to-cyan-500/20 border border-blue-500/20' 
                          : 'from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800'
                      } transition-all duration-300`}>
                        <Icon className={`w-5 h-5 ${
                          isHovered === info.label 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-600 dark:text-gray-400'
                        } transition-colors duration-300`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        aria-label={social.label}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                          <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {social.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;