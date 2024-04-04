import React from "react";
import { Link } from "react-router-dom";
// import { FaCircle } from "react-icons/fa";


const index = () => {
  return (
    <div className="navbar">
     <h1 className="heading">
      Dhanvanti<span style={{color:"var(--gold)"}}>.</span>
      </h1>

      {/* Linking Part */}
       <div className="links">
       {/* <a href="/"><p className="link">Home</p></a> */}
        <Link to="/"><p className="link">Home</p></Link>
        <Link to="/about"><p className="link">About Us</p></Link>
        <Link to="/service"><p className="link">Service</p></Link>
        <Link to="/contact"><p className="link">Contact</p></Link>
       </div>
        
  </div>
      
    
  );
}

export default index;
