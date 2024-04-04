import React, { useEffect, useState } from 'react'
import desert_moon from '../About-Images/desert-moon.png';
import no_sky from '../About-Images/desert-NoSky.png';
import rock from '../About-Images/desert-rock.png';
import sky from '../About-Images/desert-sky.png';
// import desert from '../About-Images/desert.png';
import grass from '../About-Images/grass.png';
import man from '../About-Images/man.png';
import water from '../About-Images/water.png';
import waterfall from '../About-Images/waterfall.png';
// import Navbar from '../Component/NavBar';

const AboutPage = () => {

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
    {/* <Navbar/> */}
    <section className="parallax-about">
      <div className='info-box'>
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <img src={waterfall} alt="" id="waterfall" className="about-waterfall" />
      <img src={sky} alt="" id="" />
      <img src={desert_moon} alt="" id="desert_moon" style={{top: scrollPos * 0.3}} />
      <img src={no_sky} alt="" id="moon" />
      <img src={rock} alt="" id="" />
      <img src={water} alt="" id="" />
      <img src={man} alt="" id="" style={{left: scrollPos * 0.6}}/>
      {/* <img src={desert} alt="" id=""/> */}
      <img src={grass} alt="" id="" />
    </section>
    </div>
  );
}

export default AboutPage