import React, { useState, useEffect } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';
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
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: FiMail,   label: 'Email',    value: 'ayadmohammed403@gmail.com', href: 'mailto:ayadmohammed403@gmail.com' },
    { icon: FiPhone,  label: 'Phone',    value: '+91 9074731468',             href: 'tel:+919074731468' },
    { icon: FiMapPin, label: 'Location', value: 'Kasargod, Kerala, India',    href: null },
  ];

  const socialLinks = [
    { icon: FiLinkedin,  label: 'LinkedIn',  url: 'https://linkedin.com/in/mohammed-ayad-80a16b226' },
    { icon: FiInstagram, label: 'Instagram', url: 'https://instagram.com/m_.ayad' },
    { icon: FiGithub,    label: 'GitHub',    url: 'https://github.com/m-ayad10' },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'd6f5eef9-8469-4a93-ae5e-095abd2185f4', ...formData }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-white bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-400/20'
        : 'border-gray-200 dark:border-gray-700 focus:border-[#2C6E6F] focus:ring-[#2C6E6F]/15'
    }`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="text-sm font-medium text-[#2C6E6F] dark:text-[#4a9fa0] uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — Form */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    placeholder="Mohammed Ayad"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={6}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2C6E6F] text-white font-semibold hover:bg-[#235758] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2C6E6F]/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <FiSend className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="lg:col-span-2 space-y-10" data-aos="fade-up" data-aos-delay="200">

            {/* Contact details */}
            <div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Open to full-time roles, freelance projects, and collaborations. Feel free to reach out — I usually respond within a day.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-[#2C6E6F] dark:text-[#4a9fa0]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-800 dark:text-gray-200 text-sm mt-0.5 hover:text-[#2C6E6F] dark:hover:text-[#4a9fa0] transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-gray-200 text-sm mt-0.5">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-[#2C6E6F] hover:text-[#2C6E6F] dark:hover:border-[#4a9fa0] dark:hover:text-[#4a9fa0] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
