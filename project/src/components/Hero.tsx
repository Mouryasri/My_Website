import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Java Developer',
    'Fresh Graduate',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, roles]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D2691E%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-amber-700">
                MS
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Mourya Sri Kandregula
          </h1>
          
          <div className="text-2xl md:text-3xl text-amber-200 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-amber-200 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Recent Computer Science graduate passionate about Java development and creating 
            innovative solutions. Ready to start my journey in the tech industry.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Mouryasri"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mouryasri-kandregula-88760729a"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:mouryasri1309@gmail.com"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://drive.google.com/file/d/12eCzf11mh6YQIWbxeXkdPmjkoRmuRyIz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-amber-600 px-6 py-3 rounded-full text-white hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FileText size={20} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;