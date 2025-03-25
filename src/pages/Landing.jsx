import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import BestServices from '../components/BestServices/BestServices';
import RecentProjects from '../components/RecentProjects/RecentProjects';


const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentProjects />
      <BestServices />
    </>
  )
}

export default Landing