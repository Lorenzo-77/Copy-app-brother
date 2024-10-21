import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkTechniqueOpen, setIsJerkTechniqueOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRmCleanJerk, setOneRmCleanJerk] = useState('');
  const [oneRmBackSquat, setOneRmBackSquat] = useState('');
  const [calculatedWeightsCleanJerk, setCalculatedWeightsCleanJerk] = useState({});
  const [calculatedWeightsBackSquat, setCalculatedWeightsBackSquat] = useState({});

  const handle1RMChange = (e, setOneRm, setCalculatedWeights, percentages) => {
    const value = e.target.value;
    setOneRm(value);
    
    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = percentages.reduce((acc, percentage) => {
        acc[`set${percentage}`] = (rm * (percentage / 100)).toFixed(2);
        return acc;
      }, {});
      setCalculatedWeights(calculatedWeights);
    } else {
      setCalculatedWeights({});
    }
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
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>8/8 Kettlebell Single Leg Hip Thrust</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Front Squats</li>
              <li>6/6 One Arm Shoulder Press</li>
              <li>6/6 One Arm Overhead Squats (2" Pause At Bottom)</li>
            </ul>
          </div>
        )}
      </div>

      {/* JERK TECHNIQUE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsJerkTechniqueOpen)}
          aria-expanded={isJerkTechniqueOpen}
          aria-controls="jerk-technique-content"
        >
          <h3>JERK TECHNIQUE</h3>
          <span>{isJerkTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isJerkTechniqueOpen && (
          <div className="section-content" id="jerk-technique-content">
            <h4>1) Foot Positioning</h4>
            <p>1 x 5 Back Rack Jump to Split @Light to Moderate Weight</p>
            <h4>2) Overhead Position</h4>
            <p>2 x 3 Jerk Balance In Split @Moderate Weight</p>
            <p>3 x 2 Tall Jerk @Light to Moderate Weight</p>
          </div>
        )}
      </div>

      {/* CLEAN & JERK */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsCleanAndJerkOpen)}
          aria-expanded={isCleanAndJerkOpen}
          aria-controls="clean-jerk-content"
        >
          <h3>CLEAN & JERK</h3>
          <span>{isCleanAndJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanAndJerkOpen && (
          <div className="section-content" id="clean-jerk-content">
            <label htmlFor="oneRmCleanJerk">
              Ingresar 1RM Clean & Jerk (kg):
              <input
                type="number"
                id="oneRmCleanJerk"
                value={oneRmCleanJerk}
                onChange={(e) => handle1RMChange(e, setOneRmCleanJerk, setCalculatedWeightsCleanJerk, [73, 76, 79, 82, 85, 90, 95])}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmCleanJerk && (
              <>
                <p>4 Sets</p>
                <ul>
                  <li>1 Squat Clean</li>
                  <li>1 Front Squat</li>
                  <li>1 Split Jerk</li>
                </ul>
                <p> @{calculatedWeightsCleanJerk.set73}kg - @{calculatedWeightsCleanJerk.set76}kg - @{calculatedWeightsCleanJerk.set79}kg - @{calculatedWeightsCleanJerk.set82}kg</p>
                <p>Then</p>
                <p>1 x 2 Squat Cleans @ {calculatedWeightsCleanJerk.set85} kg</p>
                <p>1 x 1 Squat Clean @ {calculatedWeightsCleanJerk.set90} kg</p>
                <p>1 x 1 Squat Clean @ {calculatedWeightsCleanJerk.set95} kg</p>
                <p><strong>*Todos los Cleans son Singles, No hacer Touch And Go</strong></p>
                <p><strong>*All reps are Singles, No Touch and Go</strong></p>
              </>
            )}
          </div>
        )}
      </div>

      {/* BACK SQUAT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsBackSquatOpen)}
          aria-expanded={isBackSquatOpen}
          aria-controls="back-squat-content"
        >
          <h3>BACK SQUAT</h3>
          <span>{isBackSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isBackSquatOpen && (
          <div className="section-content" id="back-squat-content">
            <label htmlFor="oneRmBackSquat">
              Ingresar 1RM Back Squat (kg):
              <input
                type="number"
                id="oneRmBackSquat"
                value={oneRmBackSquat}
                onChange={(e) => handle1RMChange(e, setOneRmBackSquat, setCalculatedWeightsBackSquat, [87, 72, 75, 78])}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmBackSquat && (
              <>
                <p>Build to 2 Reps @ {calculatedWeightsBackSquat.set87} kg</p>
                <p>Then</p>
                <ul>
                  <li>6 Back Squats @ {calculatedWeightsBackSquat.set72} kg</li>
                  <li>5 Back Squats @ {calculatedWeightsBackSquat.set75} kg</li>
                  <li>4 Back Squats @ {calculatedWeightsBackSquat.set78} kg</li>
                </ul>
                <p>Rest 60-90" b/t Sets</p>
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
            <p>AMRAP 4 Min</p>
            <ul>
              <li>3 Handstand Walk Segments</li>
              <li>21 Toes to Bar</li>
              <li>15 Power Cleans (70/47.5 kg)</li>
              <li>Max Burpee Box Jump Overs</li>
            </ul>
            <p><strong>REST 4 Min</strong></p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>3 Handstand Walk Segments</li>
              <li>21 Toes to Bar</li>
              <li>12 Power Cleans (80/55 kg)</li>
              <li>Max Burpee Box Jump Overs</li>
            </ul>
            <p><strong>REST 4 Min</strong></p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>3 Handstand Walk Segments</li>
              <li>21 Toes to Bar</li>
              <li>9 Power Cleans (90/65 kg)</li>
              <li>Max Burpee Box Jump Overs</li>
            </ul>
            <p>Handstand Walk - 7.5 m Unbroken Segments</p>
            <p>Box - 76/60 cm</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong></p>
            <p>• 8+ Burpee Box Jump Overs</p>
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
              <li>8/8 Goblet Lateral Box Step Ups</li>
              <li>8 Hip Thrusts @Heavy Weight</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>8/8 Back Rack Rear Foot Elevated Split Squats</li>
              <li>20 Reverse Hypers (Hold 2" Each Rep) w/Medball</li>
              <li>Rest 1 Min b/t Sets</li>
            </ul>
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
            <h4>Warm-Up</h4>
            <p>5 Min @Very Easy to Moderate Pace (Aumentar ritmo cada minuto // Slowly increase pace each minute)</p>
            <h4>Workout</h4>
            <p>8 Min @06:10/km</p>
            <p>8 Min @06:00/km</p>
            <p>8 Min @06:10/km</p>
            <h4>Cool-Down</h4>
            <p>5 Min @Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
