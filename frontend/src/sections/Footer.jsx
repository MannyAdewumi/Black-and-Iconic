import React from 'react'
import { Link } from 'react-router-dom';

const footerLinks = {
  'AI Suite': [
    'AI Assistant',
    'AI Image Generator',
    'AI Video Generator',
    'AI Voice Generator',
    'All Freepik tools',
  ],
  Information: [
    'Pricing',
    'About us',
    'Jobs',
    'Sell content',
    "What's new",
    'Blog',
  ],
  Legal: [
    'Terms of use',
    'License agreement',
    'Privacy policy',
    'Copyright information',
    'Cookies policy',
    'Cookies Settings',
  ],
  Support: ['AI Suite documentation', 'FAQ', 'Contact'],
  'Social Media': [
    'Facebook',
    'Twitter',
    'Pinterest',
    'Instagram',
    'Youtube',
    'LinkedIn',
  ],
};

const footer = () => {
  return (
    <footer className="bg-obsedian text-white pt-20 relative font-poppins">
      {/* Gradient Section with CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#000003] to-[#000000] opacity-70 z-0" />
      <div className="relative z-10 text-center pb-20">
        <h2 className="text-2xl font-semibold">Your vision, elevated</h2>
       <Link to={`/login`}> <button className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
          Get started for free →
        </button></Link>
      </div>

      {/* Footer Links */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold mb-3 text-gray-300">{section}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-gray-800 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 relative z-10">
        <p>© 2025 Black & Iconic . All rights reserved.</p>
        <div className="mt-2 sm:mt-0">
          <select className="bg-black border border-gray-600 rounded px-2 py-1 text-white text-xs">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </footer>
  )
}

export default footer