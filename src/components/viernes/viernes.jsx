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
                onChange={(e) => handle1RMChange(e, setOneRmCleanJerk, setCalculatedWeightsCleanJerk, [76, 79, 82, 85, 90])}
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
                <p>Rest 60-90" b/t Sets</p>
                <p>Sets: @{calculatedWeightsCleanJerk.set76}kg - @{calculatedWeightsCleanJerk.set79}kg - @{calculatedWeightsCleanJerk.set82}kg - @{calculatedWeightsCleanJerk.set85}kg</p>
                <p>Then</p>
                <p>1 x 1 Squat Clean @ {calculatedWeightsCleanJerk.set85} kg</p>
                <p>1 x 1 Squat Clean @ {calculatedWeightsCleanJerk.set90} kg</p>
                <p>3 x 1 Heavy Squat Clean Attempts</p>
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
                onChange={(e) => handle1RMChange(e, setOneRmBackSquat, setCalculatedWeightsBackSquat, [90, 75, 78, 81])}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmBackSquat && (
              <>
                <p>Build to 2 Reps @ {calculatedWeightsBackSquat.set90} kg</p>
                <p>Then</p>
                <ul>
                  <li>6 Back Squats @ {calculatedWeightsBackSquat.set75} kg</li>
                  <li>5 Back Squats @ {calculatedWeightsBackSquat.set78} kg</li>
                  <li>4 Back Squats @ {calculatedWeightsBackSquat.set81} kg</li>
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
            <p>4 Sets</p>
            <p>AMRAP 3 Min</p>
            <ul>
              <li>15 GHD Sit Ups</li>
              <li>25 Wall Balls</li>
              <li>10/7 Cal Ski Erg</li>
              <li>Max Rope Climbs</li>
            </ul>
            <p><strong>REST 3 Min b/t Sets</strong></p>
            <p>Medball - 9/6 kg</p>
            <p>Rope - 15ft/5m</p>
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
              <li>10-15 Single Arm Dumbbell Row</li>
              <li>10-15 Single Arm Dumbbell Snatch</li>
              <li>10-15 Single Arm Dumbbell Shoulder Press</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Viernes;
