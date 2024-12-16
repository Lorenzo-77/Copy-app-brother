import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isPushingDevelopmentOpen, setIsPushingDevelopmentOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAssaultBikeOpen, setIsAssaultBikeOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRm, setOneRm] = useState('');

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRm(value);
    }
  };

  const calculateWeight = (percentage) => {
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
              <li>5/5 One Arm RKB Swings</li>
              <li>5/5 One Arm Shoulder Press</li>
              <li>10" Wall Facing Handstand Hold</li>
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
            <p>Find a Heavy 1 Seated Overhead Pin Press (Altura de la frente)</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Seated Overhead Pin Press @70% of Heavy 1</p>
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
            <label htmlFor="oneRm">Ingresar 1RM (kg):</label>
            <input
              type="number"
              id="oneRm"
              value={oneRm}
              onChange={handle1RMChange}
              placeholder="Ingresa tu 1RM en kg"
            />
            <p>Work Up To {calculateWeight(77)}kg x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado. // We go progressively up in weight to the weight given.</p>
            <p>All repetitions are Singles, No Touch And Go</p>
            <p>Then</p>
            <p>4 x 3 Banded Deadlift @ {calculateWeight(58)}kg (1 Min Rest)</p>
            <p>Foco en velocidad. Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>4 x 3 Deficit Deadlift @ {calculateWeight(63)}kg (9/5 cm)</p>
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
              <li>GHD Sit Ups</li>
              <li>Strict Handstand Push Ups</li>
            </ul>
            <p>Rest 5 Min</p>
            <p>For Time</p>
            <p>1-2-3-4-5-6-7-8-9-10</p>
            <ul>
              <li>Deadlift</li>
              <li>Bar Facing Burpees</li>
            </ul>
            <p>Barbell - 100/70 kg</p>
            <p>NOTAS</p>
            <p>SCORE OBJETIVO: 4-8 Min (Cada parte)</p>
            <p>REEMPLAZOS/REPLACEMENTS</p>
            <ul>
              <li>No GHD: 1) <a href="https://youtu.be/eWDk5jxAwCE">Video 1</a>; 2) <a href="https://youtu.be/O3huiwVg4UE">Video 2</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE & CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAssaultBikeOpen)}
          aria-expanded={isAssaultBikeOpen}
          aria-controls="skill-practice-content"
        >
          <h3>SKILL PRACTICE & CONDITIONING</h3>
          <span>{isAssaultBikeOpen ? '▲' : '▼'}</span>
        </div>
        {isAssaultBikeOpen && (
          <div className="section-content" id="skill-practice-content">
            <p>10 Min Handstand Walk O-Course Practice</p>
            <p>Then</p>
            <p>OTM 12 Min</p>
            <ul>
              <li>Min 1: 1 Seated Legless Rope Climb</li>
              <li>Min 2: Handstand Walk O-Course</li>
              <li>Min 3: Bike @Easy Pace</li>
            </ul>
            <p>REEMPLAZOS/REPLACEMENTS</p>
            <ul>
              <li>No Bike: 1 Min Run</li>
              <li>No O-Course: Armar uno con discos</li>
            </ul>
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
            <p>6 Rounds</p>
            <ul>
              <li>1 Min @Very Hard Pace</li>
              <li>2 Min @Recovery Pace</li>
            </ul>
            <p>No Rest b/t Rounds</p>
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
            <p>3 x 15 Close Grip Dumbbell Bench Press</p>
            <p>3 x 20/20 One Arm Banded Upright Row</p>
            <p>3 x 12 Shoulder Lateral Raises</p>
            <p>3 x 12 Trap Three Raise</p>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
