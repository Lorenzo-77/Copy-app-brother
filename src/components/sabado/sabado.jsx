import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isCleanJerkOpen, setIsCleanJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isGymStrongStaminaOpen, setIsGymStrongStaminaOpen] = useState(false);
  const [isAccessoryMidlineOpen, setIsAccessoryMidlineOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRmCleanJerk, setOneRmCleanJerk] = useState('');
  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  // Función para manejar el cambio de 1RM Clean & Jerk
  const handle1RMCleanJerkChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setOneRmCleanJerk(value);
    }
  };

  // Función para manejar el cambio de 1RM Deadlift (si es necesario en futuras secciones)
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

      {/* CLEAN & JERK */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsCleanJerkOpen)}
          aria-expanded={isCleanJerkOpen}
          aria-controls="clean-jerk-content"
        >
          <h3>CLEAN & JERK</h3>
          <span>{isCleanJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanJerkOpen && (
          <div className="section-content" id="clean-jerk-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Squat Clean</li>
              <li>1 Front Squat</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Sets: {calculateWeight(70, oneRmCleanJerk)}kg - {calculateWeight(73, oneRmCleanJerk)}kg - {calculateWeight(76, oneRmCleanJerk)}kg - {calculateWeight(79, oneRmCleanJerk)}kg</p>
          
            <label htmlFor="oneRmCleanJerk">
              Ingresar 1RM Clean & Jerk (kg):
              <input
                type="number"
                id="oneRmCleanJerk"
                value={oneRmCleanJerk}
                onChange={handle1RMCleanJerkChange}
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
            <p>5 Rounds For Time</p>
            <ul>
              <li>9 Thrusters</li>
              <li>9 Bar Facing Burpees</li>
            </ul>
            <ul>
              <li>Barbell - 43/30 kg</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 4-8 Min</p>
          </div>
        )}
      </div>

      {/* GYMNASTICS + STRONGMAN STAMINA CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsGymStrongStaminaOpen)}
          aria-expanded={isGymStrongStaminaOpen}
          aria-controls="gym-strong-stamina-content"
        >
          <h3>GYMNASTICS + STRONGMAN STAMINA CONDITIONING</h3>
          <span>{isGymStrongStaminaOpen ? '▲' : '▼'}</span>
        </div>
        {isGymStrongStaminaOpen && (
          <div className="section-content" id="gym-strong-stamina-content">
            <p>OTM 16 Min</p>
            <ul>
              <li>Min 1: 15/12 Cal Assault Bike</li>
              <li>Min 2: 7/5 Ring MuscleUps</li>
              <li>Min 3: 30 m Sandbag Bearhug Carry</li>
              <li>Min 4: 1-3 Handstand Walk Pirouettes</li>
            </ul>
            <p>Pirouette - 1 Rep = 1 Turnaround (1x1m) + 3 m Handstand Walk (4 m Total)</p>
            <ul>
              <li>Sandbag - 90/70 kg</li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryMidlineOpen)}
          aria-expanded={isAccessoryMidlineOpen}
          aria-controls="accessory-midline-content"
        >
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{isAccessoryMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryMidlineOpen && (
          <div className="section-content" id="accessory-midline-content">
            <p>3 Rounds For Quality</p>
            <ul>
              <li>5/5 Split Squat Rock Back (3" Hold At Stretch Point)</li>
              <li>10 Alternating Dead Bug (1-2" Hold Each Rep)</li>
              <li>5 Ring Fallouts</li>
              <li>10 Alternating Groiners</li>
              <li>10 Cat Camel + Rock Back</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>
          </div>
        )}
      </div>

      {/* SESSION 2: PRO RUNNER */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsProRunnerOpen)}
          aria-expanded={isProRunnerOpen}
          aria-controls="pro-runner-content"
        >
          <h3>SESSION 2: PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content" id="pro-runner-content">
            {/* Warm-Up */}
            <h4>Warm-Up</h4>
            <ul>
              <li>5 Min @Easy Pace</li>
              <li>5 Min @Moderate Pace</li>
            </ul>

            {/* Workout */}
            <h4>Workout</h4>
            <ul>
              <li>5 Rounds</li>
              <li>200 m in 00:53</li>
              <li>200 m @Recovery Pace</li>
            </ul>

            {/* Rest */}
            <h4>Rest</h4>
            <ul>
              <li>Rest 5 Min</li>
            </ul>

            {/* Second Workout */}
            <h4>5 Rounds</h4>
            <ul>
              <li>200 m in 00:53</li>
              <li>200 m @Recovery Pace</li>
            </ul>

            {/* Cool-Down */}
            <h4>Cool-Down</h4>
            <ul>
              <li>5 Min @Easy Pace</li>
              <li>5 Min @Recovery Pace</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
