import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isPushingDevelopmentOpen, setIsPushingDevelopmentOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  const toggleSection = (setState) => setState(prevState => !prevState);

  // Función para manejar el cambio de 1RM Deadlift
  const handle1RMDeadliftChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRmDeadlift(value);
    }
  };

  // Cálculo de pesos basados en porcentajes
  const calculateWeight = (percentage, oneRm) => {
    return oneRm ? Math.round((parseFloat(oneRm) * (percentage / 100))) : '-';
  };

  return (
    <div className="container">
      <h1>SÁBADO</h1>

      {/* SESSION 1: WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content" id="warm-up-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>8 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>8/8 One Arm Suitcase Deadlift</li>
              <li>8/8 One Arm RKB Swings</li>
              <li>10 Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* PUSHING DEVELOPMENT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsPushingDevelopmentOpen)}
          aria-expanded={isPushingDevelopmentOpen}
          aria-controls="pushing-development-content"
        >
          <h3>PUSHING DEVELOPMENT</h3>
          <span>{isPushingDevelopmentOpen ? '▲' : '▼'}</span>
        </div>
        {isPushingDevelopmentOpen && (
          <div className="section-content" id="pushing-development-content">
            <p>Find a Heavy 1 Decline Bench Press</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Decline Bench Press @70% of Heavy 1</p>
            <p>Rest 60-90" b/t Sets</p>
            <p>Then</p>
            <p>3 x 12 Incline Dumbbell Bench Press</p>
            <p>Rest 30" b/t Sets</p>
            <p><strong>Nota:</strong> En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</p>
            <p>All sets @ Moderate Weight</p>
          </div>
        )}
      </div>

      {/* DEADLIFT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsDeadliftOpen)}
          aria-expanded={isDeadliftOpen}
          aria-controls="deadlift-content"
        >
          <h3>DEADLIFT</h3>
          <span>{isDeadliftOpen ? '▲' : '▼'}</span>
        </div>
        {isDeadliftOpen && (
          <div className="section-content" id="deadlift-content">
            <p>Work Up To 77% x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado.</p>
            <p><strong>Nota:</strong> Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>4 x 3 Deadlift @ {calculateWeight(64, oneRmDeadlift)}kg (1 Min Rest)</p>
            <label htmlFor="oneRmDeadlift">
              Ingresar 1RM Deadlift (kg):
              <input
                type="number"
                id="oneRmDeadlift"
                value={oneRmDeadlift}
                onChange={handle1RMDeadliftChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsConditioningOpen)}
          aria-expanded={isConditioningOpen}
          aria-controls="conditioning-content"
        >
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content" id="conditioning-content">
            <p>3 Rounds For Time</p>
            <ul>
              <li>21 Toes to Bar</li>
              <li>12 Double Kettlebell Hang Clean & Jerks</li>
              <li>3 Handstand Walk Segments</li>
            </ul>
            <p>REST 5 Min</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>21/15 Cal Bike Erg</li>
              <li>12 Double Kettlebell Box Step Ups</li>
              <li>9 Bar Muscle Ups</li>
            </ul>
            <p>Kettlebells - 2 x 24/16 kg</p>
            <p>Box - 60/50 cm</p>
            <p>Handstand Walk - 7,5 m Unbroken Segments</p>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 9-14 Min (Cada Parte)</p>
            <p><strong>REEMPLAZOS:</strong></p>
            <p>No Bike Erg: 21 Box jump Overs (60/50 cm; Step Down)</p>
          </div>
        )}
      </div>



      {/* ASSAULT BIKE CONDITIONING (OPCIONAL) */}
      <div className="section-block">
        <div className="section-header">
          <h3>ASSAULT BIKE CONDITIONING (OPCIONAL)</h3>
        </div>
        <div className="section-content">
          <p>6 Rounds</p>
          <ul>
            <li>1 Min @ Very Hard Pace</li>
            <li>2 Min @ Recovery Pace</li>
          </ul>
          <p>No Rest b/t Rounds</p>
          <p><strong>NOTAS:</strong></p>
          <p><strong>ESTIMULO & OBJETIVOS:</strong></p>
          <p>Trabajo de intensidad moderadamente alta, buscando mantener los rpm/Watts todos los Rounds en una cantidad exigente.</p>
          <p>El Recovery debe ser en movimiento y sin soltar las manos de la Bike.</p>
        </div>
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryOpen)}
          aria-expanded={isAccessoryOpen}
          aria-controls="accessory-content"
        >
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content" id="accessory-content">
            <p>4 Rounds:</p>
            <ul>
              <li>12/12 Landmine Press</li>
              <li>8/8 Single Arm Dumbbell Row</li>
              <li>12/12 Cossack Squats</li>
            </ul>
            <p>Rest 30” b/t Rounds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
