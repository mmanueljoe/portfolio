import React from 'react'
import "./Hero.css"
import assets from "../../assets"

const Hero = () => {
  return (
    <>
      <section className='hero' id='hero-section'>
        <div className='hero-text'>
          <h1>Innovation Begins with Code</h1>
          <p>
            Lines of code shape ideas. Ideas shape experiences. I build software
            and blockchain solutions that make an impact—without saying too much
          </p>
        </div>
        <hr />
        <div className='hero-content'>
          <div>
            <h2>Hey there, I'm a</h2>
          </div>

          <div>
            <h2>Software & <br/> Web3 Developer</h2>
            <p>
              I build innovative software and blockchain solutions that merge functionality with efficiency.
              From full-stack applications to decentralized systems, I craft experiences that make an impact.
            </p>
          </div>

          <div>
            <h2>Based in <br/> Accra</h2>
            <p>
              Passionate about shaping the future of the internet through scalable software
              and blockchain innovations, empowering businesses and users alike.
            </p>
          </div>

        </div>
        
        <div className='hero-name'>
          <h1>Emmanuel Joe</h1>
        </div>

        <div className='hero-background'>
          <img src={assets.my_portrait} alt="" />
        </div>
      </section>
    </>
  )
}

export default Hero