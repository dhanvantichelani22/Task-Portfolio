import React from 'react'


const ContactPage = () => {
 
  return (
    <div>
      <section className="parallax-contact">
      
      <div className='info-contact'>
      <h2>Contact Us</h2>
      <br/>
      <div className='contact'>
      <input type='text' id="email" placeholder='Enter Email..'/>
      <br/>
      <input type='number' placeholder='Enter Phone ..'/>
      <br/>
      <button className='btn'>Submit</button></div>
      <br/><br/><br/>
      <p>Find Us On </p> 
        
      <p>Feel free to connect us on dhlcompany@co.in</p>
      </div>
      </section>
      </div>
  )
}

export default ContactPage