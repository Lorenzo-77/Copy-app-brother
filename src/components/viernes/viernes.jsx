import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkOpen, setIsJerkOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRm, setOneRm] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({});

  const handle1RMChange = (e, percentages, section) => {
    const value = e.target.value;
    setOneRm(value);

    if (value) {
      const rm = parseFloat(value);
      const newCalculatedWeights = percentages.reduce((acc, percentage) => {
        acc[`${section}set${percentage}`] = (rm * (percentage / 100)).toFixed(2);
        return acc;
      }, {});
      setCalculatedWeights((prev) => ({ ...prev, ...newCalculatedWeights }));
    } else {
      setCalculatedWeights({});
    }
  };

  const toggleSection = (setState) => setState((prevState) => !prevState);

  return (
    <div className="container">
      <h1>VIERNES</h1>

      {/* SESSION 1: WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
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

      {/* JERK */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsJerkOpen)}>
          <h3>JERK</h3>
          <span>{isJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isJerkOpen && (
          <div className="section-content">
            <label htmlFor="oneRmJerk">Ingresar 1RM (kg):</label>
            <input
              type="number"
              id="oneRmJerk"
              value={oneRm}
              onChange={(e) => handle1RMChange(e, [69, 72, 75, 78], 'jerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>1) Foot Positioning</p>
                <p>1 x 3 Back Rack Step to Split @Light Weight</p>
                <p>3 x 3 Back Rack Jump to Split @Light to Moderate Weight</p>
                <p>2) Overhead Position</p>
                <p>1 x 5 Press In Split @Light Weight</p>
                <p>3 x 3 Jerk Balance In Split @Moderate Weight</p>
                <p>3) Complex</p>
                <p>4 Sets</p>
                <p>1 Behind the Neck Split Jerk</p>
                <p>1 Pausing Split Jerk* (Pause In Dip And Receiving Position)</p>
                <p>
                  Sets: @{calculatedWeights.jerkset69}kg - @{calculatedWeights.jerkset72}kg - @{calculatedWeights.jerkset75}kg - @{calculatedWeights.jerkset78}kg
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* CLEAN & JERK */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsCleanAndJerkOpen)}>
          <h3>CLEAN & JERK</h3>
          <span>{isCleanAndJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanAndJerkOpen && (
          <div className="section-content">
            <label htmlFor="oneRmCleanAndJerk">Ingresar 1RM (kg):</label>
            <input
              type="number"
              id="oneRmCleanAndJerk"
              value={oneRm}
              onChange={(e) => handle1RMChange(e, [73, 76, 79, 82, 85], 'cleanAndJerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>5 Sets</p>
                <p>1 Segmented Clean Deadlift</p>
                <p>1 Hang Squat Clean</p>
                <p>1 Front Squat</p>
                <p>1 Split Jerk</p>
                <p>Rest 60-90" b/t Sets</p>
                <p>
                  Sets: @{calculatedWeights.cleanAndJerkset73}kg - @{calculatedWeights.cleanAndJerkset76}kg - @{calculatedWeights.cleanAndJerkset79}kg - @{calculatedWeights.cleanAndJerkset82}kg - @{calculatedWeights.cleanAndJerkset85}kg
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* BACK SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsBackSquatOpen)}>
          <h3>BACK SQUAT</h3>
          <span>{isBackSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isBackSquatOpen && (
          <div className="section-content">
            <label htmlFor="oneRmBackSquat">Ingresar 1RM (kg):</label>
            <input
              type="number"
              id="oneRmBackSquat"
              value={oneRm}
              onChange={(e) => handle1RMChange(e, [86, 71], 'backSquat')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>Build to 2 Reps @{calculatedWeights.backSquatset86}kg</p>
                <p>Then OTM 5 Min</p>
                <p>3 Back Squats @{calculatedWeights.backSquatset71}kg</p>
              </>
            )}
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>5 Rounds For Time</p>
            <p>21 Wall Balls</p>
            <p>7 Bar Muscle Ups</p>
            <p>Rest 5 Min</p>
            <p>5 Rounds For Time</p>
            <p>12 Sumo Deadlift High Pull</p>
            <p>2 Handstand Walk Segments</p>
            <p>Medball - 9/6 kg</p>
            <p>Barbell - 52/35 kg</p>
            <p>Handstand Walk - 7,5 m Unbroken Segments</p>
            <p>SCORE OBJETIVO: 6-10 Min (Cada parte)</p>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 x 12/12 Back Rack Front Foot Elevated Split Squats</p>
            <p>3 x 12 Hip Thrusts</p>
            <p>3 x 12 Barbell Reverse Lunges</p>
            <p>4 x 10 GHD Machine</p>
            <p>3 x 12-15 Goblet Squats</p>
            <p>3 x 12 Kettlebell Swings</p>
          </div>
        )}
      </div>

      {/* Pro Runner */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsProRunnerOpen)}>
          <h3>PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content">
            <p>10 x 100m Sprints</p>
            <p>Rest 90s Between Sprints</p>
            <p>Focus on Speed and Form</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;

