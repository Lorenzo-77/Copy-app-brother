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
          <h3>PUSHING DEVELOPMENT</h3>
          <span>{isPushingDevelopmentOpen ? '▲' : '▼'}</span>
        </div>
        {isPushingDevelopmentOpen && (
          <div className="section-content" id="pushing-development-content">
            <p>Find a Heavy 1 Barbell Floor Press</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Barbell Floor Press @ {calculateWeight(70)}kg</p>
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
            <p>Work Up To {calculateWeight(76)}kg x 3 Reps</p>
            <p>Then</p>
            <p>4 x 3 Deadlift @ {calculateWeight(62.5)}kg (1 Min Rest)</p>
            <p>Foco en velocidad. Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>2 x 8 Sumo Deadlift @ {calculateWeight(55)}kg</p>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>10 Deadlift</li>
              <li>1 Legless Rope Climb + 1 Rope Climb</li>
            </ul>
            <p>Rest 5 Min</p>
            <p>4 Rounds For Time</p>
            <ul>
              <li>6 Sandbag to Shoulder</li>
              <li>2 Handstand Walk Segments</li>
            </ul>
            <p>Barbell - 110/75 kg</p>
            <p>Sandbag - 70/45 kg</p>
            <p>Handstand Walk - 7.5 m Unbroken Segments</p>
            <p>Rope - 4.57 m</p>
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
            <p>20 Rounds</p>
            <p>15" @Max Pace</p>
            <p>45" @Recovery Pace</p>
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
            <p>4 x 8 Barbell Upright Row</p>
            <p>3 x 12 Shoulder Lateral Raises</p>
            <p>3 x 12 Trap Three Raise</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
