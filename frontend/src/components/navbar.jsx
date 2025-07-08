import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { BsStars } from 'react-icons/bs';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    return ( 
        <header className='w-full bg-obsedian sticky text-white top-0 z-50 shadow-sm
        text-[18px] sm:text-[16px] font-semibold font-montserrat'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-6'>
                <div className='flex items-center space-x-8'>
                    <a href="/" className=''>
                        <img src={logo} alt="Logo" className='w-[80px]' />
                     </a>

                     {/* Desktop Navigation Links */}
                     <nav className='hidden md:flex items-center space-x-8 text-sm relative'>
                        <div 
                         className='relative' 
                         onMouseEnter={() => setDropdownOpen(true)}
                         onMouseLeave={() => setDropdownOpen(false)}>
                            <Link to="/" className='flex items-center space-x-1 hover:text-gray-300'>
                                Assets
                            </Link>

                            {dropdownOpen && (
                                <div className='absolute left-0 top-10 w-[850px] bg-black border border-gray-700 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-18 text-sm z-50 font-poppins'>
                                    <div>
                                        <h4 className='font-semibold text-gray-200 mb-2'> IMAGE GENERATION</h4>
                                        <ul className='space-y-1 font-normal text-gray-400'>
                                            <li><Link to="/image-generation" className='hover:text-white font-medium'>AI Assistant <span className="bg-blue-600 text-xs text-white ml-2 px-1 rounded">NEW</span></Link></li>
                                            <li><Link to="/image-editing" className='hover:text-white'>Image Editing</Link></li>
                                            <li><Link to="/image-enhancement" className='hover:text-white'>Image Enhancement</Link></li>
                                            <li><Link to="/image-stylization" className='hover:text-white'>Image Stylization</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className='font-semibold text-gray-200 mb-2 font-poppins'>IMAGE EDITION</h4>
                                        <ul className='space-y-1 font-normal text-gray-400'>
                                            <li><Link to="/image-colorization" className='hover:text-white'>Image Colorization</Link></li>
                                            <li><Link to="/image-restoration" className='hover:text-white'>Image Restoration</Link></li>
                                            <li><Link to="/image-super-resolution" className='hover:text-gray-300'>Image Super Resolution</Link></li>
                                            <li><Link to="/image-background-removal" className='hover:text-gray-300'>Image Background Removal</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className='font-semibold text-gray-200 mb-2 font-poppins'>VIDEO & AUDIO</h4>
                                        <ul className='space-y-1 font-normal text-gray-400'>
                                            <li><Link to="/video-generation" className='hover:text-white'>Video Generation</Link></li>
                                            <li><Link to="/video-editing" className='hover:text-white'>Video Editing</Link></li>
                                            <li><Link to="/audio-generation" className='hover:text-white'>Audio Generation</Link></li>
                                            <li><Link to="/audio-editing" className='hover:text-white'>Audio Editing</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                         </div>
                        <Link to="/" className='hover:text-gray-300'>Pricing</Link>
                        <Link to="/" className='hover:text-gray-300'>Contact</Link>
                        <Link to="/" className='hover:text-gray-300'>Blog</Link>
                     </nav>
                </div>

                

                <div className='flex items-center space-x-4 justify-end'>
                    <div className='flex-1 mx-20 hidden md:flex'>
                    <div className='flex w-[400px] bg-gray-400 opacity-50 rounded-full px-4 py-2 items-center font-poppins font-medium text-[14px]'>
                        <FaSearch className='text-gray-600 mr-4' />
                        <input 
                            type="text" 
                            placeholder="Search assets" 
                            className='w-full bg-transparent text-white placeholder-gray-200 focus:outline-none'
                        />
                    </div>
                </div>
                    <button onClick={() => setSearchOpen(!searchOpen)} className='md:hidden text-white'>
                        <FaSearch className='text-2xl' />
                    </button>
                    <Link to="/" className='hidden md:inline text-sm hover:text-gray-300'>Signup</Link>
                    <Link to="/" className='hidden md:inline text-sm hover:text-gray-300'>Login</Link>

                    <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-white'>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Search */}
            {searchOpen && (
                <div className='md:hidden px-4 mt-3'>
                    <div className='flex w-full bg-gray-800 opacity-50 rounded-full px-4 py-2 items-center'>
                        <FaSearch className='text-gray-400 mr-4' />
                        <input 
                            type="text" 
                            placeholder="Search assets"
                            className='w-full bg-transparent text-white placeholder-gray-200 focus:outline-none'
                        />
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className='md:hidden px-4 pt-4 pb-6 space-y-3 text-sm bg-obsedian ring-1 ring-gray-400'>
                    <Link to="/" className='block py-2 border-b border-gray-500 hover:text-gray-300'>Assets</Link>
                    <Link to="/" className='block py-2 border-b border-gray-500 hover:text-gray-300'>Pricing</Link>
                    <Link to="/" className='block py-2 border-b border-gray-500 hover:text-gray-300'>Contact</Link>
                    <Link to="/" className='block py-2 border-b border-gray-500 hover:text-gray-300'>Blog</Link>
                    <Link to="/" className='block py-2 border-b border-gray-500 hover:text-gray-300'>Signin</Link>
                </nav>
            )}

        </header>
  )
}

export default Navbar;