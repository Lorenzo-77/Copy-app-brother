import './home.css';
import { useState } from 'react';
import Lunes from "../lunes/lunes";
import Martes from "../martes/martes";
import Miercoles from "../miercoles/miercoles";
import Jueves from "../jueves/jueves";
import Viernes from "../viernes/viernes";
import Sabado from '../sabado/sabado';

function Home() {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Función para renderizar el componente de rutina según el día
  const renderRoutineComponent = () => {
    switch (selectedDay) {
      case 'Lunes':
        return <Lunes />;
      case 'Martes':
        return <Martes />;
      case 'Miércoles':
        return <Miercoles />;
      case 'Jueves':
        return <Jueves />;
      case 'Viernes':
        return <Viernes />;
      case 'Sábado':
        return <Sabado />;
      default:
        return <div class="video-container">
      <iframe
          src="https://www.youtube.com/embed/8Cu3xqnCNek?si=pfp5eZW8uvHvoPMf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      ;
    }
  };

  return (
    <div id='home' className='container home-container'>
      <div className="days-container">
        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => (
          <button 
            key={day} 
            className="day-button" 
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      
      <div className="routine-container">
        {renderRoutineComponent()}
      </div>
    </div>
  );
}

export default Home;
