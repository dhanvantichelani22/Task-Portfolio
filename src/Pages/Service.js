import React, { useEffect,  useState } from 'react'

import treeLeft from '../Service-Images/tree-left.png';
import treeRight from '../Service-Images/tree-right.png';
import gateLeft from '../Service-Images/gate-left.png';
import gateRight from '../Service-Images/gate-right.png';
import grass from '../Service-Images/grass.png';

const ServicePage = () => {

  const [scrollPos, setscrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setscrollPos(window.scrollY);

    document.addEventListener('scroll', handleScroll);
// Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(window.scrollY); 

  // Empty dependency array means this effect runs once on mount and clean up on unmount

  // let progressTop = document.getElementById("progress-top");
//   const progressTop = useRef(null);
  
//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function() {scrollFunction()};

//   function scrollFunction() {
//     let progressTop = 100; 
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       progressTop.current.style.display = "grid";
//       progressTop.style.background = `conic-gradient(#194eb9 ${progressTop}%, #67ccff ${progressTop}%)`;
//     } else {
//       progressTop.current.style.display = "none";
//     }
//   }
  
//   useEffect(() => {
//     const onScroll = () => {
//         scrollFunction();
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => {
//         window.removeEventListener('scroll', onScroll);
//     };
// }, []);
//   // When the user clicks on the button, scroll to the top of the document
//   function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

// Get window width
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// Update window width when window is resized
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// let multiplier = window.innerWidth <= 600 ? -0.05 : -0.1;

// Calculate left position based on scroll position and window width(Gate left)
let leftPos = scrollPos * 0.1;
if (windowWidth < 600) {
  leftPos = scrollPos * 0.05; // slower movement on small screens
} else if (windowWidth < 900) {
  leftPos = scrollPos * 0.08; // medium movement on medium screens
}

console.log(leftPos);

//gateright
let multiplier = -0.1; // default value for large screens
if (windowWidth <= 600) {
  multiplier = -0.05; // slower movement on small screens
}
// console.log(multiplier);


let progressTop = ()=>{
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress_Top = Math.round((pos * 100)/calHeight);
  // console.log(progressTop);
   
  if(pos > 100){
    scrollProgress.style.display = "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#194eb9 ${progress_Top}%, #67ccff ${progress_Top}%)`;
}
 window.onscroll = progressTop;
 window.onload = progressTop;

  return (
    <div>
    {/* <Navbar/> */}
    <section className="parallax-service" >
    <div className="info-service" style={{marginTop: scrollPos * 0.2}}>
        <h2 >Service</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <img src={treeLeft} alt="" id="tree-left" style={{left: scrollPos * -0.1}}/>
      <img src={treeRight} alt="" id='tree-right' style={{left: scrollPos * 0.1}}/>
      {/* <img src={gateLeft} alt="" id='gate-left' style={{left: '200px'}}  /> */}
      <img src={gateLeft} alt="" id='gate-left' style={{left: scrollPos * 0.1}}  /> 
      <img src={gateRight} alt="" id='gate-right' style={{left: scrollPos * multiplier}}/>
      <img src={grass} alt="" id='grass'/>
    </section>
    

      {/* onClick={topFunction} ref={progressTop} */}
      <div id="progress">
      <span id='progress-top'>
        <i className='bx bx-chevrons-up'></i>
      </span>
    </div>
    
    </div>
  );
}

export default ServicePage