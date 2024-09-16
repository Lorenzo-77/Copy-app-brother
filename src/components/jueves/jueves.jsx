import { useState } from 'react';
import '../../styles.css';

function Navbar() {
    const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
    const [isGymTestOpen, setIsGymTestOpen] = useState(false);
    const [isConditioningOpen, setIsConditioningOpen] = useState(false);
    const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
    const [isMidlineOpen, setIsMidlineOpen] = useState(false);
    const [isTestOpen, setIsTestOpen] = useState(false); // Nuevo estado para los tests

    const toggleSection = (setState) => setState(prevState => !prevState);

    return (
        <div className="container">
            <h1>Jueves</h1>

            {/* Sección ACTIVE REST DAY */}
            <div className="section-block">
                <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
                    <h3>ACTIVE REST DAY</h3>
                    <span>{isWarmUpOpen ? '▲' : '▼'}</span>
                </div>
                {isWarmUpOpen && (
                    <div className="section-content">
                        <p>5 Min Bike/Run Row @Easy Pace</p>
                        <p>Then</p>
                        <p>12 Min For Quality</p>
                        <ul>
                            <li>250 m Row @Damper 5</li>
                            <li>6 Inchworms + Push Up</li>
                            <li>6/6 Lateral Box Step Ups</li>
                            <li>6/6 Push Up Ts</li>
                            <li>6/6 One Arm Suitcase Deadlift</li>
                            <li>10" Supinated Bar Hang</li>
                            <li>10" Handstand Hold</li>
                        </ul>
                    </div>
                )}
            </div>

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

            {/* Agrega otras secciones aquí si es necesario */}
        </div>
    );
}

export default Navbar;
