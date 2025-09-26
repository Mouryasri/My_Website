import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive Java application for managing student records with features like enrollment, grade tracking, and report generation using Spring Boot and MySQL.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
      category: 'Academic',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Personal Finance Tracker',
      description: 'A web application to track personal expenses and income with data visualization charts and budget planning features.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'React', 'Chart.js', 'Local Storage'],
      category: 'Web App',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'A desktop application built with Java Swing for managing library operations including book inventory, member management, and borrowing system.',
      image: 'https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Swing', 'SQLite', 'JDBC'],
      category: 'Desktop App',
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Recipe Sharing Platform',
      description: 'A social platform where users can share recipes, rate dishes, and create meal plans with a responsive design and user authentication.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'Web App',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A simple weather application that fetches real-time weather data using APIs and displays it with a clean, responsive interface.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      category: 'Web App',
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Task Manager CLI',
      description: 'A command-line task management tool built with Python that helps organize daily tasks with priority levels and due dates.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'JSON', 'CLI', 'File I/O'],
      category: 'CLI Tool',
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Academic', 'Web App', 'Desktop App', 'CLI Tool'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M30 30c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects I've built during my studies and personal learning journey
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Sparkles size={14} />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/70 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    selectedProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.demoUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      title="View Demo"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 flex-1 justify-center"
                    >
                      <Code size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;