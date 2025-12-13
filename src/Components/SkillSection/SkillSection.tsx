// components/SkillsSectionSimple.tsx
import React from 'react';
import { FiCode, FiMonitor, FiServer, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const SkillsSectionSimple: React.FC = () => {
  const skillCategories = [
    { icon: FiCode, title: 'Languages', skills: ['JavaScript', 'HTML', 'CSS', 'TypeScript'] },
    { icon: FiMonitor, title: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'Bootstrap'] },
    { icon: FiServer, title: 'Backend', skills: ['Node.js', 'Express.js', 'WebSocket'] },
    { icon: FiDatabase, title: 'Database', skills: ['MongoDB', 'Firestore', 'PostgreSQL', 'Redis'] },
    { icon: FiCloud, title: 'Cloud & DevOps', skills: ['AWS S3', 'Docker'] },
    { icon: FiTool, title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'JWT', 'Axios', 'Redux'] },
  ];

  return (
    <section id="skills" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="space-y-4">
                {/* Category Title */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionSimple;