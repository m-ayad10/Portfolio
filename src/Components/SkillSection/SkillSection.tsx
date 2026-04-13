import React from 'react';

const SkillsSectionSimple: React.FC = () => {
  const skillCategories = [
    { title: 'Languages',     skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { title: 'Frontend',      skills: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend',       skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'WebRTC'] },
    { title: 'Database',      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firestore'] },
    { title: 'Cloud & DevOps', skills: ['AWS S3', 'EC2', 'CloudFront', 'Docker', 'Nginx', 'CI/CD', 'Azure VM'] },
    { title: 'Tools',         skills: ['Git', 'GitHub', 'Postman', 'JWT', 'Axios', 'Prisma', 'Cloudinary', 'Figma', 'Pm2'] },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#2C6E6F] dark:text-[#4a9fa0] uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Technologies & Tools
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-semibold text-[#2C6E6F] dark:text-[#4a9fa0] uppercase tracking-widest mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#2C6E6F] hover:text-[#2C6E6F] dark:hover:border-[#4a9fa0] dark:hover:text-[#4a9fa0] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSectionSimple;
