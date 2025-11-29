import React from 'react'
import Header from '../component/Header'
import Landing from '../component/Landing'
import Simple from '../component/Simple'
import Testimonial from '../component/Testimonial'
import Proftional from '../component/Proftional'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Landing/>
        <Simple/>
        <Testimonial/>
        <Proftional/>
        <Footer/>
    </div>
  )
}

export default Home