import React, { useEffect } from 'react';
import Navbar from '../Component/NavBar';
import sky from '../Home-Images/sky.png';
import moon from '../Home-Images/moon.png';
import water from '../Home-Images/water.png';
import center_city from '../Home-Images/center-city.png';
import right_city from '../Home-Images/right-city.png';
import left_city from '../Home-Images/left-city.png';
import train from '../Home-Images/train.png';
import rail from '../Home-Images/rail.png';
import hill_left_1 from '../Home-Images/hill-left-1.png';
import hill_right_1 from '../Home-Images/hill-right-1.png';
import AboutPage from './About';
import ServicePage from './Service';
import ContactPage from './Contact';
import { useState } from 'react';

const HomePage  = () => {

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
        setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
        window.removeEventListener("scroll", onScroll);
    };
}, []);


  return (
    <div>
       {/* navbar */}
        <Navbar/>

      {/* Parallax */}
      <section className="parallax-home">
        <img src={sky} alt="" id=""/>
        <img src={moon} alt="" id="moon" style={{top: scrollPos * 0.9}}/>
        <img src={water} alt="" id=""/>
        <img src={center_city} alt="" id=""/>
        <img src={right_city} alt="" id=""/>
        <img src={left_city} alt="" id=""/>
        <img src={train} alt="" id="train"  style={{left: scrollPos * 1.5}}/>
        <img src={rail} alt="" id=""/>
        <img src={hill_left_1} alt="" id=""/>
        <img src={hill_right_1} alt="" id=""/>
      </section>
      
      <section className="parallax-about">
      <AboutPage/>
      </section>
      <section className="parallax-service">
      <ServicePage/>
      </section>
      <section className="parallax-contact">
      <ContactPage/>
      </section>
    </div>
  )
}

export default HomePage 