import React from 'react'

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
    'Sell content',
    'Search trends',
    'Blog',
  ],
  Legal: [
    'Terms of use',
    'License agreement',
    'Privacy policy',
    'Copyright information',
    'Cookies policy',
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


const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-20 relative">
      {/* Gradient Section with CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04030c] via-[#040408] to-[#0c0c0c] opacity-70 z-0" />
      <div className="relative z-10 text-center pb-20">
        <h2 className="text-2xl font-semibold font-poppins">Your vision, elevated</h2>
        <button className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
          Get started for free →
        </button>
      </div>

      {/* Footer Links */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold font-montserrat mb-3 text-gray-300">{section}</h4>
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
      <div className="bg-obsedian border-t border-gray-800 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 relative z-10">
        <p>© 2025 Black and Iconic Nig. All rights reserved.</p>
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

export default FooterSection