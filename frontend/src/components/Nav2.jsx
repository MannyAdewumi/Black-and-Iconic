import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/black.png'; // Assuming you have a logo image

const Nav2 = () => {
  return (
    <header className='max-w-7xl px-4 py-6'>
        <nav className='flex justify-between items-center'>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" width={120} height={50} />
                </Link>
            </div>
        </nav>
    </header>
    
  )
}

export default Nav2