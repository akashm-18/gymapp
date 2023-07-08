import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s6ovo9p', 'template_g76q6f3', form.current, 'ByGApa91kCGqQ1emo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };    
  return (
    <div className="join">
       <div className='left-j'>
        <hr />
        <div>
        <span className='stroke-text'>ready to </span>
        <span>level up </span>
        </div>
        <div>
        <span>your body </span>
        <span className='stroke-text'>with us </span>
        </div>
       </div>
       <div className='right-j'>

        <form ref={form} className='email-container'>
            <input type="email" name='user_email' placeholder='Enter your Email' onClick={sendEmail} />
            <button className='btn btn-j'>Join now</button>
        </form>

       </div>

    </div>
  )
}

export default Join