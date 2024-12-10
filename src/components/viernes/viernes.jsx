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
                <p>2 x 3 Back Rack Jump to Split @Light to Moderate Weight</p>
                <p>1 x 3 Back Rack Drop to Split @Light to Moderate Weight</p>

                <p>2) Overhead Position</p>
                <p>1 x 3 Jerk Balance In Split @Moderate Weight</p>
                <p>2 x 2 Tall Jerk @Light to Moderate Weight</p>

                <p>3) Complex</p>
                <p>4 Sets</p>
                <p>1 Behind the Neck Split Jerk</p>
                <p>1 Pausing Split Jerk* (Pause In Dip And Receiving Position)</p>
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
              onChange={(e) => handle1RMChange(e, [64, 68, 72, 76, 80], 'cleanAndJerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>5 Sets</p>
                <p>1 Clean Lift Off</p>
                <p>1 Squat Clean</p>
                <p>1 Hang Squat Clean</p>
                <p>1 Split Jerk</p>
                <p>Rest 60-90" b/t Sets</p>
                <p>
                  Sets: @{calculatedWeights.cleanAndJerkset64}kg - @{calculatedWeights.cleanAndJerkset68}kg - @{calculatedWeights.cleanAndJerkset72}kg - @{calculatedWeights.cleanAndJerkset76}kg - @{calculatedWeights.cleanAndJerkset80}kg
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* BOX BACK SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsBackSquatOpen)}>
          <h3>BOX BACK SQUAT</h3>
          <span>{isBackSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isBackSquatOpen && (
          <div className="section-content">
            <label htmlFor="oneRmBackSquat">Ingresar 1RM (kg):</label>
            <input
              type="number"
              id="oneRmBackSquat"
              value={oneRm}
              onChange={(e) => handle1RMChange(e, [70], 'backSquat')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>3 Sets</p>
                <p>6 Box Back Squats</p>
                <p>All Sets @{calculatedWeights.backSquatset70}kg</p>
                <p>Box - Altura de paralelo</p>
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
            <p>4 Sets</p>
            <p>AMRAP 2 Min</p>
            <p>24 GHD Sit Ups</p>
            <p>2 Handstand Walk Segments</p>
            <p>Max Squat Cleans</p>
            <p>Rest 2 Min b/t Rounds</p>
            <p>Handstand Walk - 7.5 m Unbroken Segments</p>
            <p>Barbell - 61/43 kg</p>
            <p>No GHD: 1) <a href="https://youtu.be/eWDk5jxAwCE">Link 1</a>; 2) <a href="https://youtu.be/O3huiwVg4UE">Link 2</a></p>
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
            <p>3 x 6/6 Front Rack Box Step Ups</p>
            <p>4 x 6 Hip Thrusts @Heavy Weight</p>
            <p>3 x 6/6 Goblet Cossack Squats</p>
            <p>4 x 8 Reverse Hypers (Hold 1" Each Rep) w/Medball</p>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
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
            <p>Warm-Up: 5 Min @Very Easy to Moderate Pace (Aumentar ritmo cada minuto)</p>
            <p>Workout: 8 Min @06:16/km</p>
            <p>2 Min @Recovery Pace</p>
            <p>4 Min @05:38/km</p>
            <p>2 Min @Recovery Pace</p>
            <p>4 Min @05:16/km</p>
            <p>2 Min @Recovery Pace</p>
            <p>Cooldown: 3 Min @Easy Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
