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
              <li>00" Supinated Grip Bar Hang</li>
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
            <p>Find a Heavy 1 Overhead Pin Press (Altura de la frente)</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Overhead Pin Press @70% of Heavy 1</p>
            <p>Rest 60-90" b/t Sets</p>
            <p>Then</p>
            <p>3 x 15 Dumbbell Bench Press</p>
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
            <p>Work Up To  @ {calculateWeight(80, oneRmDeadlift)}kg x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado.</p>
            <p><strong>Nota:</strong> Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>4 x 3 Deadlift @ {calculateWeight(67, oneRmDeadlift)}kg (1 Min Rest)</p>
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
            <p>For Time</p>
            <ul>
              <li>1000 m Row</li>
              <li>50 Thrusters</li>
              <li>10 Rope Climbs</li>
            </ul>
            <p>Barbell - 43/30 kg</p>
            <p>Rope - 4,57 m</p>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 9-14 Min (Cada Parte)</p>
            <p><strong>REEMPLAZOS:</strong></p>
            <p>No Row: 800 m Run</p>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE + CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSkillPracticeOpen)}
          aria-expanded={isSkillPracticeOpen}
          aria-controls="skill-practice-content"
        >
          <h3>SKILL PRACTICE + CONDITIONING</h3>
          <span>{isSkillPracticeOpen ? '▲' : '▼'}</span>
        </div>
        {isSkillPracticeOpen && (
          <div className="section-content" id="skill-practice-content">
            <p>5 Min Pullovers Practice</p>
            <p>Then</p>
            <p>OTM 6-8 Min</p>
            <p>Min 1: 16/12 Cal Row</p>
            <p>Min 2: 1 Seated Legless Rope Climb + 1 Legless Rope Climb*</p>
            <p><strong>*Mujeres:</strong> 1 Seated Legless Rope Climb + 1 Rope Climb</p>
            <p>Soga - Manos comienzan debajo de 1,5 m (Ambas manos, pies no tocan piso), deben tocar ambas manos arriba de 4 m. Bajada legless hasta abajo de 1,5 m sin tocar pies. (El kip está permitido)</p>
            <p>Rope - Hands start below 1,5 m mark (Both hands, feet off the floor), both hands must touch above the 4 m line. Legless descent until both hands touch below 1,5 m mark with feet off the ground. Kipping allowed</p>
          </div>
        )}
      </div>

      {/* ASSAULT BIKE CONDITIONING (OPCIONAL) */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAssaultBikeOpen)}
          aria-expanded={isAssaultBikeOpen}
          aria-controls="assault-bike-content"
        >
          <h3>ASSAULT BIKE CONDITIONING (OPCIONAL)</h3>
          <span>{isAssaultBikeOpen ? '▲' : '▼'}</span>
        </div>
        {isAssaultBikeOpen && (
          <div className="section-content" id="assault-bike-content">
            <p>3 Sets</p>
            <p>8 Rounds</p>
            <ul>
              <li>20/15 Cal Assault Bike</li>
              <li>Rest 60"</li>
            </ul>
            <p><strong>NOTA:</strong> Si no tienes Assault Bike, hacer 100 m Run</p>
          </div>
        )}
      </div>

      {/* ACCESORIO */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryOpen)}
          aria-expanded={isAccessoryOpen}
          aria-controls="accessory-content"
        >
          <h3>ACCESORIO</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content" id="accessory-content">
            <p>3 Sets</p>
            <p>12-15 Dumbbell Skull Crushers</p>
            <p>Rest 30-60"</p>
            <p>Todo con un peso moderado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
