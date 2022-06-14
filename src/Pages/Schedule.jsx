import React from 'react'
import Calendar from '../Components/Calendar'
import DateTime from '../Components/DateTime';
import App from '../Components/CalendarDataTime';

function Agenda() {
  return (
    <section className='schedule'>
      <h1> Agenda </h1>
      <div className='schedule-content'>
        <div>
          <h2> Citas Agendadas </h2>
          <App />
        </div>
        <div>
          
          <h2> Agenda tu cita </h2>  
          <DateTime />
          {/* <Calendar /> */}

        </div>
      </div>
    </section>
  )
}

export default Agenda