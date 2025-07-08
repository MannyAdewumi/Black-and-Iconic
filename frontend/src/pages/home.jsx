import React from 'react'
import { Faq, Featured, Footer, Hero } from '../sections'
import Nav from '../components/Nav'

const home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Faq />
        <Footer />
    </>
  )
}

export default home