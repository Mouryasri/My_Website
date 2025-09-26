import React, { useState, useEffect, useRef } from 'react';
import { Heart, Coffee, Code, BookOpen, Paintbrush as Paint } from 'lucide-react';

const About = () => {
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

  const interests = [
    { icon: Code, label: 'Clean Code', color: 'text-blue-400' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400' },
    { icon: Paint, label: 'Painting', color: 'text-green-400' },
    { icon: Heart, label: 'Design', color: 'text-red-400' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.3%22%3E%3Cpath d=%22M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Java developer and recent Computer Science graduate, eager to 
                create digital experiences that make a difference. I love the intersection 
                of design and technology, where creativity meets functionality.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey began with a simple "Hello, World!" and has evolved into 
                building applications that solve real-world problems. I'm 
                constantly learning new technologies and pushing the boundaries of 
                what's possible in software development.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new programming concepts, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while planning my next learning adventure.
              </p>
            </div>

            {/* Right Column - Stats & Interests */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-amber-700 mb-2">5+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-amber-700 mb-2">4</div>
                  <div className="text-gray-600">Years Study</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-amber-700 mb-2">10+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-amber-700 mb-2">∞</div>
                  <div className="text-gray-600">Coffee Cups</div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  What I Love
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                          isVisible ? 'animate-bounce' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon size={20} className={interest.color} />
                        <span className="text-gray-700">{interest.label}</span>
                      </div>
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

export default About;