import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isPushingDevelopmentOpen, setIsPushingDevelopmentOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isSkillPracticeOpen, setIsSkillPracticeOpen] = useState(false);
  const [isAssaultBikeOpen, setIsAssaultBikeOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRmBenchPress, setOneRmBenchPress] = useState('');
  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  const toggleSection = (setState) => setState(prevState => !prevState);

  // Función para manejar el cambio de 1RM Bench Press
  const handle1RMBenchPressChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRmBenchPress(value);
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
              <li>5/5 One Arm Suitcase Deadlift</li>
              <li>5/5 One Arm RKB Swings</li>
              <li>5/5 One Arm Shoulder Press</li>
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
            <p>Find a Heavy 1 Bench Press</p>
            <label htmlFor="oneRmBenchPress">
              Ingresar 1RM Bench Press (kg):
              <input
                type="number"
                id="oneRmBenchPress"
                value={oneRmBenchPress}
                onChange={handle1RMBenchPressChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Bench Press @ {calculateWeight(70, oneRmBenchPress)}kg of Heavy 1</p>
            <p>Rest 60-90" b/t Sets</p>
            <p>Then</p>
            <p>3 x 15 Incline Dumbbell Bench Press</p>
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
            <p>Work Up To 83% @ {calculateWeight(83, oneRmDeadlift)}kg x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado.</p>
            <p><strong>Nota:</strong> Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>3 x 3 Deadlift @ {calculateWeight(70, oneRmDeadlift)}kg (1 Min Rest)</p>
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
            <p><strong>Foco en velocidad de ejecución</strong></p>
            <p><strong>Singles, No Touch And Go</strong></p>
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
            <p>8 Rounds For Time</p>
            <ul>
              <li>12 Deadlift</li>
              <li>9 Hang Power Clean</li>
              <li>6 Push Jerks</li>
            </ul>
            <p>Barbell - 70/47,5 kg</p>
            <p>Time Cap: 15 Min</p>
          </div>
        )}
      </div>

      {/* SKILL CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSkillPracticeOpen)}
          aria-expanded={isSkillPracticeOpen}
          aria-controls="skill-practice-content"
        >
          <h3>SKILL CONDITIONING</h3>
          <span>{isSkillPracticeOpen ? '▲' : '▼'}</span>
        </div>
        {isSkillPracticeOpen && (
          <div className="section-content" id="skill-practice-content">
            <p>OTM 6-8 Min</p>
            <p>Min 1: 13/10 Cal Assault Bike</p>
            <p>Min 2: 2-3 Pirouettes</p>
            <p>Pirouette - 1 Rep = 1 Turnaround (1x1m) + 3 m Handstand Walk (4 m Total)</p>
            <p><strong>Estimulo & Objetivos</strong></p>
            <p>Trabajo en formato de OTM, donde el objetivo está en practicar la caminata de manos con diferentes Skills.</p>
            <p>En el caso de que no puedan completar los movimientos en menos de 50 segundos, escalen cantidades.</p>
          </div>
        )}
      </div>


      {/* ACCESSORY WORK */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryOpen)}
          aria-expanded={isAccessoryOpen}
          aria-controls="accessory-content"
        >
          <h3>ACCESSORY </h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content" id="accessory-content">
            <p>3 Rounds</p>
            <ul>
              <li>10 Incline Dumbbell Bench Press</li>
              <li>12 Shoulder Full Raises</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>Descanso 30-60" entre Sets</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
