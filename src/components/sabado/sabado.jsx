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
  const [oneRmDeadlift, setOneRmDeadlift] = useState('');  // Estado para 1RM de Deadlift
  const [oneRmCloseGripBenchPress, setOneRmCloseGripBenchPress] = useState('');

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
      setOneRmDeadlift(value);  // Guardamos el valor del 1RM de Deadlift
    }
  };

  // Función para manejar el cambio de 1RM Close Grip Bench Press
  const handle1RMCloseGripBenchPressChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRmCloseGripBenchPress(value);
    }
  };

  // Cálculo de pesos basados en porcentajes
  const calculateWeight = (percentage, oneRm) => {
    return oneRm ? Math.round((parseFloat(oneRm) * (percentage / 100))) : '-';
  };

  // Cálculo de Deadlift (añadido aquí)
  const calculateDeadliftWeight = (percentage) => {
    return calculateWeight(percentage, oneRmDeadlift);  // Calculamos con el 1RM de Deadlift
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
              <li>5/5 One Arm RKB Swings</li>
              <li>5/5 One Arm Shoulder Press</li>
              <li>10" Supinated Bar Hang</li>
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
          <h3>PUSHING DEVELOPMENT 2</h3>
          <span>{isPushingDevelopmentOpen ? '▲' : '▼'}</span>
        </div>
        {isPushingDevelopmentOpen && (
          <div className="section-content" id="pushing-development-content">
            <p>Find a Heavy 1 Close Grip Bench Press</p>
            <label htmlFor="oneRmCloseGripBenchPress">
              Ingresar 1RM Close Grip Bench Press (kg):
              <input
                type="number"
                id="oneRmCloseGripBenchPress"
                value={oneRmCloseGripBenchPress}
                onChange={handle1RMCloseGripBenchPressChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Close Grip Bench Press @ {calculateWeight(70, oneRmCloseGripBenchPress)}kg of Heavy 1</p>
            <p>Rest 60-90" b/t Sets</p>
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
            {/* Campo de entrada para el 1RM de Deadlift */}
            <label htmlFor="oneRmDeadlift">
              Ingresar 1RM Deadlift (kg):
              <input
                type="number"
                id="oneRmDeadlift"
                value={oneRmDeadlift}
                onChange={handle1RMDeadliftChange}
                placeholder="Ingresa tu 1RM de Deadlift"
              />
            </label>
            <p>Work Up To 76% @ {calculateDeadliftWeight(76)}kg x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado.</p>
            <p><strong>Nota:</strong> Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>3 x 4 Deadlift @ {calculateDeadliftWeight(60)}kg (1 Min Rest)</p>
            <p><strong>Foco en velocidad</strong></p>
            <p><strong>Singles, No Touch And Go</strong></p>
            <p>Then</p>
            <p>2 x 8 Sumo Deadlift @ {calculateDeadliftWeight(50)}kg</p>
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
            <p>For Time</p>
            <p>10-9-8-7-6-5-4-3-2-1</p>
            <ul>
              <li>Toes to Bar</li>
              <li>Deadlift</li>
              <li>Bar Facing Burpees</li>
            </ul>
            <p>Barbell - 102/70 kg</p>
            <p>Time Cap: 7-12 Min</p>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE & CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSkillPracticeOpen)}
          aria-expanded={isSkillPracticeOpen}
          aria-controls="skill-practice-content"
        >
          <h3>SKILL PRACTICE & CONDITIONING</h3>
          <span>{isSkillPracticeOpen ? '▲' : '▼'}</span>
        </div>
        {isSkillPracticeOpen && (
          <div className="section-content" id="skill-practice-content">
            <p>5 Min Double Under Crossovers Practice</p>
            <p>Then</p>
            <p>OTM 6 Min</p>
            <p>Min 1: 1 Seated Legless Rope Climb + 1 Legless Rope Climb (Women: 1 Rope Climb)</p>
            <p>Min 2: Bike Erg Recovery</p>
          </div>
        )}
      </div>

      {/* ASSAULT BIKE CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAssaultBikeOpen)}
          aria-expanded={isAssaultBikeOpen}
          aria-controls="assault-bike-content"
        >
          <h3>ASSAULT BIKE CONDITIONING</h3>
          <span>{isAssaultBikeOpen ? '▲' : '▼'}</span>
        </div>
        {isAssaultBikeOpen && (
          <div className="section-content" id="assault-bike-content">
            <p>20 Sec on 30 Sec off</p>
            <ul>
              <li>Max Effort</li>
              <li>Rest 2 Min b/t Rounds</li>
            </ul>
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
            <p>3 Rounds For Quality</p>
            <ul>
              <li>8 Strict Pull Ups</li>
              <li>10 Dumbbell Chest Supported Rows</li>
              <li>12 Banded Face Pulls</li>
              <li>15 Band Tricep Extensions</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
