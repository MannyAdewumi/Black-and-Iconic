import React from 'react'
import { Link } from 'react-router-dom';
import maleImg from '../../assets/18463.jpg'
import model from '../../assets/1112343_Gen_z_Millenial_1920x1080.mp4'
import femaleImg from '../../assets/2151202448.jpg'
import friendsImg from '../../assets/2149295744.jpg'


const Hero = () => {
  return (
    <section className='bg-black text-white px-5 py-8 md:py-16'>
        <div className='max-w-6xl mx-auto text-center'>
            <h1 className='text-3xl md:text-5xl font-normal mb-4 leading-tight font-poppins text-gray-300'>
                The only image repository<br />
                for the <span className=' text-white font-semibold italic'> African community</span>
            </h1>
            <p className='text-sm md:text-[16px] text-gray-400 mb-8 font-montserrat font-medium max-w-2xl mx-auto'>
                Discover, share, and contribute to a vibrant collection of images that celebrate the beauty and diversity of Africa.
            </p>
            <Link to="/register">
                <button className='bg-white text-black font-medium font-poppins px-6 py-2 rounded-full hover:bg-gray-400 hover:font-semibold hover: ring-1 ring-gray-300 transition'>
                Get started for free</button>
            </Link>
        </div>

        {/* Background Image */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center max-w-6xl mx-auto'>
            <div className='col-span-1 hidden md:block'>
                <img 
                 src= {maleImg}
                 alt="Hero Image 1"
                 className='rounded-lg object-cover w-full' />
            </div>

            <div className='col-span-2 md:col-span-2'>
                <video 
                 alt="female model"
                 loop
                 autoPlay
                 playsInline
                 controls 
                 className='rounded-lg object-cover w-full'>
                    <source src={model} type="video/mp4" />
                </video>
            </div>

            <div className='col-span-1 hidden md:block'>
                <img 
                 src= {femaleImg}
                 alt="corporate black woman"
                 className='rounded-lg object-cover w-full' />
            </div>

            {/* mobile stacked images*/}
            <div className='md:hidden col-span-2 grid grid-cols-2 gap-4 mt-4'>
                <img 
                 src= {friendsImg}
                 alt="corporate black woman"
                 className='rounded-lg object-cover w-full' />
                <img 
                 src= {femaleImg}
                 alt="corporate black woman"
                 className='rounded-lg object-cover w-full' />
            </div>
        </div>
    </section>
  )
}

export default Hero