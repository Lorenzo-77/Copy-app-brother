import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkTechniqueOpen, setIsJerkTechniqueOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [isSkillPracticeOpen, setIsSkillPracticeOpen] = useState(false);
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
              <li>8 Cuban Press</li>
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
                onChange={(e) => handle1RMChange(e, setOneRmCleanJerk, setCalculatedWeightsCleanJerk, [70, 73, 76, 79, 80, 85])}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmCleanJerk && (
              <>
                <p>4 Sets</p>
                <ul>
                  <li>1 Squat Clean @ {calculatedWeightsCleanJerk.set70} kg</li>
                  <li>1 Front Squat @ {calculatedWeightsCleanJerk.set73} kg</li>
                  <li>1 Split Jerk @ {calculatedWeightsCleanJerk.set76} kg</li>
                </ul>
                <p>Rest 60-90" b/t Sets</p>
                <p>2 x 2 Squat Cleans @ {calculatedWeightsCleanJerk.set80} kg</p>
                <p>2 x 1 Squat Clean @ {calculatedWeightsCleanJerk.set85} kg</p>
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
                onChange={(e) => handle1RMChange(e, setOneRmBackSquat, setCalculatedWeightsBackSquat, [84, 69, 72, 75])}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmBackSquat && (
              <>
                <p>Build to 2 Reps @ {calculatedWeightsBackSquat.set84} kg</p>
                <p>Then</p>
                <ul>
                  <li>6 Back Squats @ {calculatedWeightsBackSquat.set69} kg</li>
                  <li>5 Back Squats @ {calculatedWeightsBackSquat.set72} kg</li>
                  <li>4 Back Squats @ {calculatedWeightsBackSquat.set75} kg</li>
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
            <p>2 Rounds For Time</p>
            <ul>
              <li>900 m Row</li>
              <li>600 m Ski Erg</li>
              <li>30 Thrusters @ Barbell - 42,5/30 kg</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 14-18 Min</p>
            <p><strong>REEMPLAZOS/REPLACEMENTS</strong></p>
            <p>No Row: 800 m Run</p>
            <p>No Ski Erg: 150 Double Unders</p>
            <h3>ACTIVATION</h3>
           
            <p>3 x 10 Glute Bridge</p>
            <p>3 x 10 Single Leg Glute Bridge</p>
            <p>3 x 15 Band Abducción (Mala postura)</p>

          </div>
        )}
      </div>


      {/* SKILL PRACTICE */}
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
            <p>OTM 8-10 Min</p>
            <p>Min 1: 16/12 Cal Row</p>
            <p>Min 2: 1 Seated Legless Rope Climb + 1 Legless Rope Climb*</p>
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
            <p>6/6 Goblet Lataeral Box Step Ups</p>
            <p>6 Hip Thrusts @Heavy Weight</p>
            <p>Rest 1 Min b/t Rounds</p>
          </div>
        )}
      </div>

      {/* PRO RUNNER */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsProRunnerOpen)}
          aria-expanded={isProRunnerOpen}
          aria-controls="pro-runner-content"
        >
          <h3>PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content" id="pro-runner-content">
            <h4>Warm-Up</h4>
      <p>3 Min @ Easy Pace</p>
      <p>Then</p>
      <p>30" @ Hard Pace</p>
      <p>30" @ Easy Pace</p>

      <h4>Workout</h4>
      <p>4 Rounds</p>
      <p>200 m in 00:51</p>
      <p>Rest 1 Min</p>
      <p>200 m in @ 06:02</p>
      <p>Rest 30" b/t Rounds</p>

      <h4>Cool-Down</h4>
      <p>5 Min @ Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
