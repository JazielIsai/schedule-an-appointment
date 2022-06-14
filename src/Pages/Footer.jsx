import React from 'react'

/* Icons */
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

function Footer() {
  return (
    <footer className = 'footer'>
      <h3>Contactar</h3>
      
      <div className = 'footer-contact'>
          
          <div className = 'footer-socialMedia'>
            
            <h3 className = ''> Redes Solciales</h3>
            
            <div className = 'footer-icons'>
              <a href = 'https://www.facebook.com/Psic-Carlos-S%C3%A1nchez-102888175443969' target = 'blank'>
                <FaFacebook />
              </a>
              <a href = 'https://' target='blank'>
                <MdEmail/>
              </a>
              <a href = 'https://' target = 'blank'>
                <IoLogoWhatsapp/>
              </a>
              <a href = '#4621851361' target = 'blank'>
                <FaPhoneAlt/>
              </a>
            </div>

          </div>

          <div className = 'footer-description'>
              <p>
                La salud es lo más importante para poder seguir adelante, cuida tu salud mental
              </p>
          </div>
          
      </div>

      <p>Derechos de autor Carlos Sanchez</p>

    </footer>
  )
}

export default Footer