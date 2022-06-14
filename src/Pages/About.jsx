import { CardGroup } from 'reactstrap';
import Card from '../Components/Card';

import { pathAbout } from './pathAbout';

function About() {
    const { aboutMe } = pathAbout();  


    return (
        <section className="about">
            <h2> Psicólogo y Terapeuta Familiar </h2>
            <div className="aboutMe">
                <CardGroup>
                    {
                        aboutMe.map( ( me ) => (
                            <Card
                                img={ me.img }
                                title={me.title} 
                                subtitle={me.subtitle} 
                                text={me.text} 
                                nameButton={me.nameButton} 
                                showButton={me.showButton}    
                            />
                        )) 
                    }   

                </CardGroup>
            </div>

            <div className="aboutMeActually">
                <p> Actualemente labora en el Centro Integral de Salud Mental (CISAME) en Irapuato, es docente en la Universidad Instituto Irapuato, impartiendo varias asignaturas referentes a su campo. Asimismo ofrece consultas privadas.  </p>
            </div>
        </section>
    )
}

export default About;