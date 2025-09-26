import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: Github, name: 'GitHub', url: 'https://github.com/Mouryasri' },
  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mouryasri-kandregula-88760729a/' },
  { icon: Mail, name: 'Email', url: 'mailto:mouryasri1309@gmail.com' }
];


  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4">Mourya Sri Kandregula</h3>
            <p className="text-amber-100 mb-6 leading-relaxed max-w-md">
              Fresh Computer Science graduate passionate about Java development and creating 
              innovative solutions. Ready to make an impact in the tech industry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                    <Icon size={18} />
                  </a>

                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-amber-100">
                <strong>Email:</strong><br />
                mouryasri1309@gmail.com
              </p>
              <p className="text-amber-100">
                <strong>Phone:</strong><br />
                +91 7661041474
              </p>
              <p className="text-amber-100">
                <strong>Location:</strong><br />
                Andhra Pradesh,India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-amber-100">
              <span>© {currentYear} Mourya Sri Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;