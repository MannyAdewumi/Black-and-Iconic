import { useState } from 'react'
import React from 'react'
import './index.css'
import Nav from './components/Nav';
import { Hero, Featured, Faq, WhyUsSection, Footer} from './sections';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Nav />
    <main className='relative bg-obsedian'>
      <section className='w-full px-6 justify-center py-[10px] bg-obsedian'>
        <Hero />
      </section>
      <section className='w-full max-w-w-7xl px-6 justify-center py-[10px] bg-obsedian'> 
        <Featured />
      </section>
      <section className='w-full max-w-w-7xl px-6 py-[10px] bg-obsedian text-white'>
        <WhyUsSection />
      </section>
      <section className='w-full max-w-w-7xl px-6 py-[10px] bg-obsedian text-white'>
        <Faq />
      </section>
      <section className='p-5'>
      </section>
      <Outlet />
    </main>
    <footer className='relative'>
      <Footer />
    </footer>

  </>
  
);
export default App;