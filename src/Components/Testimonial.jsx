import React from 'react'

import { FaQuoteLeft } from 'react-icons/fa';

function Testimonial() {
  return (
    <div className="present-testimonial">
        <img src={FaQuoteLeft} alt="" />
        <p className='testimonial-content'>
            En mi caso personal, fue una experiencia de mucho desarrollo, fue un tipo de reencuentro conmigo mismo, vital para el crecimiento como persona y profesional, aprendí a que debemos abrir puertas, tener los pensamientos dispuestos a lo nuevo, a nunca decir NO sino aprender a valorar las diferentes posibilidades que la vida nos va mostrando en el camino y a vivir el hoy, descansando en lo presente, en lo seguro, pues el mañana ya llegará con sus propios afanes. Me ha llevado a un autoconocimiento que me ha hecho crecer y me ha dado confianza en mí misma, mis capacidades, mi forma de enfrentar las situaciones y el cómo permito que me afecten o no. A entender que todo está en mí.  Una experiencia valiosa, equilibrada y que recomiendo todos la vivamos alguna vez en la vida.
        </p>
        <p className="testimonial-author"> 
            Anonimo 
        </p>
    </div>
  )
}

export default Testimonial