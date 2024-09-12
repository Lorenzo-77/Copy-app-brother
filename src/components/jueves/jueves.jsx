import { useState } from 'react';
import '../../styles.css';

function Navbar(){
    const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
    const [isGymTestOpen, setIsGymTestOpen] = useState(false);
    const [isConditioningOpen, setIsConditioningOpen] = useState(false);
    const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
    const [isMidlineOpen, setIsMidlineOpen] = useState(false);
    const [isTestOpen, setIsTestOpen] = useState(false); // Nuevo estado para los tests
  
    const toggleSection = (setState) => setState(prevState => !prevState);
  
    return(
        <div className="container">
        <h1>Jueves</h1>

        {/* Otras secciones aquí */}

        {/* Sección TESTS */}
        <div className="section-block">
          <div className="section-header" onClick={() => toggleSection(setIsTestOpen)}>
            <h3>TESTS</h3>
            <span>{isTestOpen ? '▲' : '▼'}</span>
          </div>
          {isTestOpen && (
            <div className="section-content">
              <p>Busquen realizar y anotar los resultados en estos 3:</p>
              <ul>
                <li>Test de Handstand Push Ups</li>
                <li>Test de corrida 1 (5 km)</li>
                <li>Test de corrida 2 (1600 m)</li>
              </ul>
              <p>¡Aprovechen el día de descanso total!</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default Navbar;
