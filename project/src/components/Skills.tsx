import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Zap, BookOpen, Coffee, Target } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java', 'Python'],
      color: 'from-amber-600 to-orange-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL'],
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Development Tools',
      skills: ['Git', 'VS Code', 'IntelliJ IDEA'],
      color: 'from-teal-600 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Core Concepts',
      skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      color: 'from-orange-600 to-red-500'
    },
    {
      icon: Target,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Quick Learning', 'Team Collaboration'],
      color: 'from-rose-600 to-pink-500'
    },
    {
      icon: Coffee,
      title: 'Currently Learning',
      skills: ['Spring Boot', 'React', 'Web Development'],
      color: 'from-yellow-600 to-amber-500'
    }
  ];

  const technicalSkills = [
    { name: 'Java', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'MySQL', level: 65 },
    { name: 'Git', level: 75 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Learning Ability', level: 95 }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f3f4f6%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M40 40c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and skills I've learned during my studies and continue to develop
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm hover:bg-amber-100 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Proficiency */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-amber-700 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-600 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className={`mt-12 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-amber-100 max-w-2xl mx-auto leading-relaxed">
                As a fresh graduate, I'm committed to continuous learning and staying updated with 
                the latest technologies. I'm currently expanding my skills in web development 
                frameworks and exploring new areas of software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;