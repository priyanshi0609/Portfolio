import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Let's build something amazing together. Reach out and I'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="md:flex">
            {/* Left Section - Contact Info */}
            <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white md:w-2/5 p-10 lg:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                <p className="text-blue-100/90">Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Mail className="text-blue-200" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-50">Email</p>
                    <p className="text-blue-100/90 hover:text-white transition-colors">
                      <a href="mailto:contact@example.com">priyanshibothra753@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Phone className="text-blue-200" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-50">Phone</p>
                    <p className="text-blue-100/90 hover:text-white transition-colors">
                      <a href="tel:+15551234567">+91 8920854526</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <MapPin className="text-blue-200" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-50">Location</p>
                    <p className="text-blue-100/90">Delhi,India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h3 className="text-xl font-semibold mb-4 text-blue-50">Follow Me</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/priyanshi0609" 
                    className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" 
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-blue-200" size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" 
                    className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" 
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-blue-200" size={20} />
                  </a>
                  <a 
                    href="https://x.com/PriyanshiB06" 
                    className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" 
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="text-blue-200" size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/_.priyanshi.01__/" 
                    className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" 
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-blue-200" size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="md:w-3/5 p-10 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send Me a Message</h2>
                <p className="text-gray-400">I'd love to hear from you! Fill out the form below and I'll respond as soon as possible.</p>
              </div>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30'} text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;