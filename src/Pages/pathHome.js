

/* IMG */
import helpProfesional from '../assets/img/profecional ayuda.png';
import helpSecurity from '../assets/img/seguridad ayuda.png';

import depresion from '../assets/img/depresion.jpg';
import ansiedad from '../assets/img/ansiedad.jpg';
import estres from '../assets/img/estres.jpg';
import autoestima from '../assets/img/autoestima.jpg';
import desarrolloPersonal from '../assets/img/desarrollo personal.jpg';
import terapiaFamiliar from '../assets/img/terapia familiar.jpg';


export function path() {

    const helpPsychological = [
        {
            img: helpProfesional,
            title: 'Profesional',
            subtitle: '',
            text: 'Psicólogo certificado con más años de experiencia profesional en el área clínica.',
            nameButton: '',
            showButton: false
        },
        {
            img: helpSecurity,
            title: 'Segura',
            subtitle: '',
            text: 'La seguridad para cuidar y resguardar tu información .',
            nameButton: '',
            showButton: false
        }
    ]
    
    
    const helpArea = [
        {
            img: depresion,
            title: 'Depresión',
            subtitle: '',
            text: '"La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento."',
            nameButton: '',
            showButton: false
        },
        {
            img: ansiedad,
            title: 'Ansiedad',
            subtitle: '',
            text: 'La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés',
            nameButton: '',
            showButton: false
        },
        {
            img: estres,
            title: 'Estrés',
            subtitle: '',
            text: 'El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un estresor o factor estresante puede ser algo que ocurre una sola vez o a corto plazo, o puede suceder repetidamente durante mucho tiempo.',
            nameButton: '',
            showButton: false
        },
        {
            img: autoestima,
            title: 'Autoestima',
            subtitle: '',
            text: 'La autoestima es un conjunto de percepciones, pensamientos, evaluaciones, sentimientos y tendencias de comportamientos dirigidos hacia uno mismo, hacia nuestra manera de ser, y hacia los rasgos de nuestro cuerpo y nuestro carácter.',
            nameButton: '',
            showButton: false
        },
        {
            img: desarrolloPersonal,
            title: 'Desarrollo personal',
            subtitle: '',
            text: 'El desarrollo personal incluye actividades que impulsan el desarrollo de las habilidades personales, hábitos y forma de pensar adecuadas como medio para intentar mejorar la calidad de vida, y contribuir a la realización de sueños y aspiraciones.',
            nameButton: '',
            showButton: false
        },
        {
            img: terapiaFamiliar,
            title: 'Terapia Familiar',
            subtitle: '',
            text: 'La terapia familiar es un tipo de terapia psicológica (psicoterapia) que puede ayudar a los miembros de la familia a mejorar la comunicación y resolver conflictos.',
            nameButton: '',
            showButton: false
        }
    ]
    
 
    return {
        helpPsychological,
        helpArea
    }    
    
}