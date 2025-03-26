import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import BestServices from '../components/BestServices/BestServices';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Tools from '../components/TechTools/Tools';
import Blog from '../components/Blog/Blog';
import WorkTogether from '../components/WorkTogether/WorkTogether';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentProjects />
      <BestServices />
      <Tools />
      <Blog />
      <WorkTogether />
      <Contact />
      <Footer />
    </>
  )
}

export default Landing