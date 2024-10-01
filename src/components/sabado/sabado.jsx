import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isPushingDevOpen, setIsPushingDevOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRmDip, setOneRmDip] = useState('');
  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  // Función para manejar el cambio de 1RM Dip
  const handle1RMDipChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRmDip(value);
    }
  };

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

  const toggleSection = (setState) => setState(prevState => !prevState);

  return (
    <div className="container">
      <h1>SÁBADO</h1>

      {/* SESSION 1 */}
      <h2>SESSION 1</h2>

      {/* WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>WARM UP</h3>
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

      {/* PUSHING DEVELOPMENT 2 */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsPushingDevOpen)}
          aria-expanded={isPushingDevOpen}
          aria-controls="pushing-dev-content"
        >
          <h3>PUSHING DEVELOPMENT 2</h3>
          <span>{isPushingDevOpen ? '▲' : '▼'}</span>
        </div>
        {isPushingDevOpen && (
          <div className="section-content" id="pushing-dev-content">
            <p>Find a Heavy 1 Weighted Strict Parallel Dip</p>
            <p>Then</p>
            <p>3 Sets</p>
            <ul>
              <li>
                5 Weighted Strict Parallel Dip @ {calculateWeight(40, oneRmDip)}kg ({calculateWeight(40, oneRmDip)}kg)
              </li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Then</p>
            <p>3 x 12 Dumbbell Bench Press</p>
            <p>Rest 30" b/t Sets</p>
            <p>
              <strong>*En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong>
            </p>
            <p>All sets @Moderate Weight</p>
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
            <label>
              Ingresar 1RM de Deadlift (kg):
              <input
                type="number"
                value={oneRmDeadlift}
                onChange={handle1RMDeadliftChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmDeadlift && (
              <>
                <p>Work Up To {calculateWeight(79, oneRmDeadlift)}kg x 3 Reps</p>
                <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado. // We go progressively up in weight to the weight given.</p>
                <p>*Todas las repeticiones son Singles, No Touch And Go // All repetitions are Singles, No Touch And Go</p>
                <p>Then</p>
                <p>3 x 4 Sumo Deadlift @ {calculateWeight(66, oneRmDeadlift)}% (1 Min Rest)*</p>
                <p>*Foco en velocidad de ejecución // Focus on speed of execution.</p>
                <p>*Singles, No Touch And Go</p>
                <p>
                  <strong>1RM (Full):</strong> En este apartado el usuario cargará su RM que es un número
                  (puede ser 130, 70, etc., lo que se debe hacer es donde están los % calcular con ese número. O sea, si
                  coloca 100 en sets se coloca 61kg como ejemplo).
                </p>
              </>
            )}
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
            <p>With a Running Clock</p>
            <p>On The 00:00</p>
            <p>For Time</p>
            <ul>
              <li>45 Double Under Crossovers</li>
              <li>45 Thrusters</li>
            </ul>
            <p>On The 10:00</p>
            <p>For Time</p>
            <ul>
              <li>45 Chest to Bar Pull Ups</li>
              <li>45 Alternating Dumbbell Snatches</li>
            </ul>
            <p>Barbell - 42.5/30 kg</p>
            <p>Dumbbell - 32.5/22.5 kg</p>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 2-5 Min (Cada Parte)</p>
          </div>
        )}
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
            <p>3 Rounds</p>
            <ul>
              <li>10 Incline Dumbbell Bench Press</li>
              <li>12 Shoulder Front Raises</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>

            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>12 Bamboo Bar Upright Row</li>
              <li>12 Dumbbell Reverse Flys</li>
            </ul>
            <p>Rest 1 Min b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
