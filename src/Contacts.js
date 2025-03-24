import React from 'react'
import email from './email.png'
import phone from './mobile.png'
import resume from './downloadimg.jpeg'

const Contacts = ({ref}) => {
  return (
    <div ref={ref}>
        <h2 className='styleContactHead'>CONTACT ME</h2>
        <div className='styleContactContainer'>
            <div className='styleContactBtn'>
                <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=archana21796@gmail.com&su=Inquiry&body=Hello' 
                    target='_blank'><button className='email'><img src={email} alt="email"/><span>archana21796@gmail.com</span></button>
                </a>    
                <a href="https://wa.me/916380801127?text=Hello,%20I%20am%20interested%20in%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button className='phone'><img src={phone} alt="phone"/> <span>Wanna Chat</span>
                    </button>
                </a>
                <a href="https://drive.google.com/file/d/1j2BgI9nknkdrHmjMqMQJ4KGrzSCBrCrn/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button className='phone resume'><img src={resume} alt="resume"/> <span>Download Resume</span>
                    </button>
                </a>
            </div>
            <div className='styleContactImg'>
            </div>
        </div>   
    </div>
  )
}

export default Contacts
