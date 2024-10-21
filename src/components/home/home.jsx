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
        return   <div className="text-container">

    <p>
      «Dos ratoncitos cayeron en un cubo de nata; el primer ratón enseguida se rindió y se ahogó, el segundo ratón decidió pelear, y se esforzó tanto que finalmente transformó la nata en mantequilla y consiguió escapar. Caballeros, desde este momento yo soy ese segundo ratón»
    </p>
  </div>
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
