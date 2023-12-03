import React from 'react'
import Header from './Header'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div>
      <Header />
      <div className='cont-bd'>
        <h2>Feel Free To Contact Us</h2><br />

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.87927005833342!2d86.16481758188455!3d22.799932188606096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e54e5a795f57%3A0x2b006ac2aebe4088!2sBishnu%20Furniture%2C%20Plywood%20%26%20Hardware!5e0!3m2!1sen!2sin!4v1701272320746!5m2!1sen!2sin" width="80%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>





        <div className="container">
          <div className="contact-form">
            <form action="/contact" method="POST" className='contact-inputs'>
              <input type="text" name="username" placeholder='Username' autoComplete='off' required />
              <input type="email" name="email" placeholder='Email' autoComplete='off' required />
              <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>


      </div>



    </div>
  )
}
