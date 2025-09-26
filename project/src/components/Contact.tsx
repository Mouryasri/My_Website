import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Calendar } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mouryasri1309@gmail.com',
      link: 'mailto:mouryasri1309@gmail.com',
      color: 'from-amber-600 to-orange-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7661041474',
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Andhra Pradesh, India',
      color: 'from-teal-600 to-cyan-500'
    },
    
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Mouryasri', color: 'hover:text-gray-900' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mouryasri-kandregula-88760729a', color: 'hover:text-blue-600' },
    { icon: Mail, name: 'Email', url: 'mailto:mouryasri1309@gmail.com', color: 'hover:text-red-500' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to work together? I'd love to hear about your project and discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development. Feel free 
                  to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">
                        {info.value}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                        title={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {submitStatus === 'loading' && (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {submitStatus === 'success' && <CheckCircle size={20} />}
                  {submitStatus === 'error' && <AlertCircle size={20} />}
                  {submitStatus === 'idle' && <Send size={20} />}
                  <span>
                    {submitStatus === 'loading' && 'Sending...'}
                    {submitStatus === 'success' && 'Message Sent!'}
                    {submitStatus === 'error' && 'Error Occurred'}
                    {submitStatus === 'idle' && 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;