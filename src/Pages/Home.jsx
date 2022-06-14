import React from 'react'
import { NavLink } from 'react-router-dom';
import { CardGroup } from 'reactstrap';
import CardContainer from '../Components/Card';
import CarouselContainer from '../Components/Carousel';

/* IMGS */
import presentacion from '../assets/img/terapia.jpg';

/* Path */
import { path } from './pathHome';


function Home() {
    const { helpPsychological, helpArea } = path();
 
    return (
    <div className="home">
        <h1> Psicólogo clínico y psicoterapia </h1>
        {/* <CarouselContainer /> */}
        <div className="presentacion">
            <img src = {presentacion} alt = '' />
            <div className="presentacion-content">
                <p> ¡Tu salud mental tambien vale la pena! </p>
                <NavLink to = '/schedule'> ¡Agenda tu cita! </NavLink>
            </div>
        </div>

        <div className='helpPsychological'>
                <h2> Ayuda psicológica confiable </h2>
                <CardGroup>
                    {
                        helpPsychological.map( ( area ) => (
                            <CardContainer 
                                img = { area.img }
                                title={ area.title } 
                                subtitle={ area.subtitle } 
                                text={ area.text } 
                                nameButton={ area.nameButton } 
                                showButton={ area.showButton }
                            />
                        ) )
                    }
                </CardGroup>
        </div>

        <div className='location'>
            <h2> Ubicación </h2>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.1169244743155!2d-101.34542753081041!3d20.672210198061798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7fd463e2e555%3A0x7c13992422fbd52e!2sRegidor%20V%C3%ADctor%20Zanella!5e0!3m2!1ses-419!2smx!4v1647561030381!5m2!1ses-419!2smx"} width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div className="home-margen">
            <div className="servicesPsycholofical">
                <h2> Servicios de psicología: </h2>
                <CardGroup>
                    {
                        helpArea.map( ( area ) => (
                            <CardContainer
                                img = { area.img } 
                                title={ area.title } 
                                subtitle={ area.subtitle } 
                                text={ area.text } 
                                nameButton={ area.nameButton } 
                                showButton={ area.showButton }
                            />
                        ) )
                    }
                </CardGroup>
            </div>

        </div>

    </div>
  )
}

export default Home