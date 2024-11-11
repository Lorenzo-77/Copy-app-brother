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
      setCalculatedWeights(prev => ({ ...prev, ...newCalculatedWeights }));
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
              onChange={(e) => handle1RMChange(e, [63, 66, 69, 72], 'jerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>1) Foot Positioning</p>
                <p>3 x 4 Back Rack Step to Split @Light Weight</p>
                <p>2) Overhead Position</p>
                <p>2 x 5 Press In Split @Light Weight</p>
                <p>3) Complex</p>
                <p>4 Sets</p>
                <p>2 Behind the Neck Split Jerk</p>
                <p>Sets: @{calculatedWeights.jerkset63}kg - @{calculatedWeights.jerkset66}kg - @{calculatedWeights.jerkset69}kg - @{calculatedWeights.jerkset72}kg</p>
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
              onChange={(e) => handle1RMChange(e, [67, 70, 73, 76, 79], 'cleanAndJerk')}
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
                <p>Sets: @{calculatedWeights.cleanAndJerkset67}kg - @{calculatedWeights.cleanAndJerkset70}kg - @{calculatedWeights.cleanAndJerkset73}kg - @{calculatedWeights.cleanAndJerkset76}kg - @{calculatedWeights.cleanAndJerkset79}kg</p>
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
              onChange={(e) => handle1RMChange(e, [78, 65], 'backSquat')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>Build to 3 Reps @{calculatedWeights.backSquatset78}kg </p>
                <p>Then OTM 5 Min</p>
                <p>3 Back Squats @{calculatedWeights.backSquatset65}kg</p>

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
            <p>4 Rounds For Time</p>
            <p>15/12 Cal Assault Bike</p>
            <p>8/6 Ring Muscle Ups</p>
            <p>8 Squat Cleans</p>
            <p>400 m Run</p>
            <p>Barbell - 61/43 kg</p>
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
            <p>3 x 8/8 Back Rack Front Foot Elevated Split Squats</p>
            <p>3 x 12 Hip Thrusts @Moderate/Heavy Weight</p>
            <p>3 x 15 Banded Reverse Squats</p>
            <p>3 x 12 Reverse Hypers (Hold 1" Each Rep) w/Medball</p>
          </div>
        )}
      </div>

      {/* PRO RUNNER */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsProRunnerOpen)}>
          <h3>SESSION 2: PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content">
            <p>Warm-Up</p>
            <p>3 Rounds</p>
            <p>1 Min @Moderate Pace</p>
            <p>1 Min @Easy Pace</p>
            <p>*Comenzar cada minuto con 5" de aceleración*</p>
            <p>Sprint for 5 seconds at the top of each minute.</p>

            <p>Workout</p>
            <p>5 Rounds</p>
            <p>200 m @Max Pace</p>
            <p>400 m @Recovery Pace</p>
            <p>Rest 2 Min b/t Rounds</p>

            <p>Cool-Down</p>
            <p>10 Min @Easy Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
