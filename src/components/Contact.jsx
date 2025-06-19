import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Dribbble, Send } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/priyanshi0609', icon: <Github size={20} />, color: 'bg-gray-900 hover:bg-gray-800' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/priyanshi-bothra-339568219/', icon: <Linkedin size={20} />, color: 'bg-blue-700 hover:bg-blue-600' },
  { name: 'Twitter', url: 'https://x.com/PriyanshiB06', icon: <Twitter size={20} />, color: 'bg-sky-500 hover:bg-sky-400' },
  { name: 'Instagram', url: '#', icon: <Instagram size={20} />, color: 'bg-pink-600 hover:bg-pink-500' },
  // { name: 'Dribbble', url: '#', icon: <Dribbble size={20} />, color: 'bg-rose-500 hover:bg-rose-400' },
];

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's create something amazing together"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information - Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a project in mind or want to discuss potential opportunities? 
              I'm always open to new collaborations and conversations.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs hover:shadow-sm transition-all"
              >
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a 
                    href="mailto:john@example.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    priyanshibothra753@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs hover:shadow-sm transition-all"
              >
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    +91 8920
                  </a>
                </div>
              </motion.div> */}

              {/* Location */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs hover:shadow-sm transition-all"
              >
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-700">New Delhi, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-5">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-xl transition-all shadow-sm hover:shadow-md`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form - Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:w-1/2"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
            <p className="text-gray-600 mb-8">I typically respond within 24 hours</p>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="Let me know how I can help you"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="Hi there, I'd like to talk about..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;