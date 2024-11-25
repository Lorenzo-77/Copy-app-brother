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
              <li>10" Bar Hang</li>
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
            <p>Find a Heavy 1 Incline Pause Bench Press</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Incline Pause Bench Press @ {calculateWeight(40)}kg</p>
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
            <p>Work Up To {calculateWeight(82)}kg x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado. // We go progressively up in weight to the weight given.</p>
            <p>All repetitions are Singles, No Touch And Go</p>
            <p>Then</p>
            <p>3 x 3 Deadlift @ {calculateWeight(65)}kg (1 Min Rest)</p>
            <p>Foco en velocidad. Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>2 x 8 Sumo Deadlift @ {calculateWeight(60)}kg</p>
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
              <li>50 Kipping Handstand Push Ups</li>
              <li>50 Toes to Bar</li>
              <li>50 Cal Assault Bike</li>
              <li>50 Double Dumbbell Box Step Overs</li>
              <li>15 m Right Arm Overhead, Left Arm Front Rack Walking Lunges</li>
              <li>15 m Left Arm Overhead, Right Arm Front Rack Walking Lunges</li>
            </ul>
            <p>Time Cap: Men 18 Min; Women 23 Min</p>
            <p>Dumbbells - 2 x 22.5/15 kg</p>
            <p>Box - 60/50 cm</p>
            <p>Lunges - 15 m Segment (3 m Unbroken Check Points)</p>
            <p>NOTAS</p>
            <p>SCORE OBJETIVO: 14-20 Min (Hombres); 16-23 Min (Mujeres)</p>
            <p>ESTIMULO & OBJETIVOS: TEST. Realizar este workout como si fuera en competencia.</p>
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
          <h3>ASSAULT BIKE CONDITIONING (OPCIONAL)</h3>
          <span>{isAssaultBikeOpen ? '▲' : '▼'}</span>
        </div>
        {isAssaultBikeOpen && (
          <div className="section-content" id="assault-bike-content">
            <p>For Time</p>
            <p>300/240 Cal Assault Bike</p>
            <p>Alternate b/t: 20/16 Cal @ Easy Pace, 20/16 Cal @ Hard Pace</p>
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
            <p>3 x 12 Incline Dumbbell Bench Press</p>
            <p>3 x 30/30 One Arm Banded Upright Row</p>
            <p>3 x 12 Shoulder Full Raises</p>
            <p>3 x 50 Banded Face Pulls</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
