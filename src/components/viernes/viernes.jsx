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
              onChange={(e) => handle1RMChange(e, [66, 69, 72, 75], 'jerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>1) Foot Positioning</p>
                <p>2 x 3 Back Rack Step to Split @Light Weight</p>
                <p>2 x 3 Back Rack Jump to Split @Light to Moderate Weight</p>
                <p>2) Overhead Position</p>
                <p>2 x 3 Press In Split @Light Weight</p>
                <p>1 x 3 Jerk Balance In Split @Moderate Weight</p>
                <p>3) Complex</p>
                <p>4 Sets</p>
                <p>2 Behind the Neck Split Jerk</p>
                <p>
                  Sets: @{calculatedWeights.jerkset66}kg - @{calculatedWeights.jerkset69}kg - @{calculatedWeights.jerkset72}kg - @{calculatedWeights.jerkset75}kg
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
              onChange={(e) => handle1RMChange(e, [70, 73, 76, 79, 82], 'cleanAndJerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>5 Sets</p>
                <p>1 Segmented Clean Deadlift</p>
                <p>1 Hang Squat Clean</p>
                <p>1 Low Hang Squat Clean</p>
                <p>1 Split Jerk</p>
                <p>Rest 60-90" b/t Sets</p>
                <p>
                  Sets: @{calculatedWeights.cleanAndJerkset70}kg - @{calculatedWeights.cleanAndJerkset73}kg - @{calculatedWeights.cleanAndJerkset76}kg -
                  @{calculatedWeights.cleanAndJerkset79}kg - @{calculatedWeights.cleanAndJerkset82}kg
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
              onChange={(e) => handle1RMChange(e, [82, 68], 'backSquat')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>Build to 2 Reps @{calculatedWeights.backSquatset82}kg</p>
                <p>Then OTM 5 Min</p>
                <p>3 Back Squats @{calculatedWeights.backSquatset68}kg</p>
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
            <p>For Time</p>
            <p>12 Burpee Box Get Overs</p>
            <p>24 Chest to Bar Pull Ups</p>
            <p>36 Toes to Bar</p>
            <p>90 Wall Balls</p>
            <p>36 Toes to Bar</p>
            <p>24 Chest to Bar Pull Ups</p>
            <p>12 Burpee Box Get Overs</p>
            <p>Medball - 9/6 kg</p>
            <p>Box - 120/100 cm</p>
            <p>SCORE OBJETIVO: 16-22 Min</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
