import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { name: 'Overview', url: '#' },
        { name: 'Leadership', url: '#' },
        { name: 'Awards', url: '#' },
        { name: 'CSR Initiatives', url: '#' },
        { name: 'Careers', url: '#' },
      ],
    },
    {
      title: 'Our Brands',
      links: [
        { name: 'Lemon Tree Premier', url: '#' },
        { name: 'Lemon Tree Hotels', url: '#' },
        { name: 'Red Fox Hotels', url: '#' },
        { name: 'Keys Hotels', url: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Book a Room', url: '#' },
        { name: 'Loyalty Program', url: '#' },
        { name: 'Contact Us', url: '#' },
        { name: 'Media Room', url: '#' },
        { name: 'Privacy Policy', url: '#' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'Email: info@lemontreehotels.com', url: 'mailto:info@lemontreehotels.com' },
        { name: 'Phone: +91-11-XXX-XXXX', url: '#' },
        { name: 'Address: New Delhi, India', url: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6 md:px-12">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.url}
                      className="hover:text-green-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
    
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-2xl"><FaFacebook /></i>
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"><FaTwitter /></i>
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"><FaInstagram /></i>
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-2xl"><FaLinkedin/></i>
            </a>
          </div>

         
          <div className="mt-6 md:mt-0">
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r hover:bg-green-700 focus:ring-2 focus:ring-green-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
