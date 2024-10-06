import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryMidlineOpen, setIsAccessoryMidlineOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRmDeadlift, setOneRmDeadlift] = useState('');
  const [calculatedWeightsDeadlift, setCalculatedWeightsDeadlift] = useState({
    set60: '',
  });

  // Función para manejar el cambio de 1RM Deadlift
  const handle1RMDeadliftChange = (e) => {
    const value = e.target.value;
    setOneRmDeadlift(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set60: (rm * 0.60).toFixed(2), // 60% del 1RM para Deadlift
      };
      setCalculatedWeightsDeadlift(calculatedWeights);
    } else {
      setCalculatedWeightsDeadlift({
        set60: '',
      });
    }
  };

  // Función para manejar el cambio de 1RM Clean (si es necesario en futuras secciones)
  const handle1RMCleanChange = (e) => {
    // Implementar si se requiere en el futuro
  };

  // Cálculo de pesos basados en porcentajes (para futuras secciones si es necesario)
  const calculateWeight = (percentage, oneRm) => {
    return oneRm ? Math.round((parseFloat(oneRm) * (percentage / 100))) : '-';
  };

  const toggleSection = (setState) => setState(prevState => !prevState);

  return (
    <div className="container">
      <h1>VIERNES</h1>

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
            {oneRmDeadlift && (
              <>
                <p>3 Sets</p>
                <ul>
                  <li>5 Deadlift @60% ({calculatedWeightsDeadlift.set60} kg)</li>
                </ul>
                <p>Rest 60-90" b/t</p>
                <p>*Singles, No Touch And Go</p>

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
            <p>4 Rounds For Time</p>
            <ul>
              <li>400 m Run</li>
              <li>9 Double Kettlebell Hang Clean & Jerks</li>
              <li>3 Rope Climbs</li>
            </ul>
            <ul>
              <li>Kettlebells - 2 x 24/16 kg</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 12-16 Min</p>
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
            <p>3 Sets</p>
            <ul>
              <li>10 Horizontal Body Rows</li>
              <li>10 Feet Elevated Weighted Bench Dips</li>
              <li>10 Standing Wall Dumbbell Bicep Curls</li>
              <li>15 Medball GHD Sit Ups</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
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

export default Viernes;
