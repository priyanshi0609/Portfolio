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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Message sent! Thank you for reaching out.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-blue-500">
      {/* navbar */}
      <Navbar/>
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Section - Contact Info */}
            <div className="bg-blue-600 text-white md:w-1/3 p-8">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">Feel free to reach out through any of the following channels. I'll get back to you as soon as possible.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-4" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-4" size={20} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" className="hover:text-blue-200 transition-colors" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://twitter.com" className="hover:text-blue-200 transition-colors" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="https://instagram.com" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;