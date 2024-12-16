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
              onChange={(e) => handle1RMChange(e, [70, 73, 76, 79], 'jerk')}
              placeholder="Ingresa tu 1RM en kg"
            />
            {oneRm && (
              <>
                <p>1) Foot Positioning</p>
                <p>1 x 3 Back Rack Jump to Split @Light to Moderate Weight</p>
                <p>2 x 3 Back Rack Drop to Split @Light to Moderate Weight</p>

                <p>2) Overhead Position</p>
                <p>3 x 2 Tall Jerk @Light to Moderate Weight</p>

                <p>3) Complex</p>
                <p>4 Sets</p>
                <p>1 Pausing Split Jerk*</p>
                <p>1 Split Jerk</p>
                <p>
                  Sets: @{calculatedWeights.jerkset70}kg - @{calculatedWeights.jerkset73}kg - @{calculatedWeights.jerkset76}kg - @{calculatedWeights.jerkset79}kg
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
              onChange={(e) => handle1RMChange(e, [68, 72, 76, 80, 84], 'cleanAndJerk')}
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
                  Sets: @{calculatedWeights.cleanAndJerkset68}kg - @{calculatedWeights.cleanAndJerkset72}kg - @{calculatedWeights.cleanAndJerkset76}kg - @{calculatedWeights.cleanAndJerkset80}kg - @{calculatedWeights.cleanAndJerkset84}kg
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
            <p>Every 6 Min x 18 Min (3 Sets)</p>
            <p>For Time</p>
            <p>21 Wall Balls</p>
            <p>15 Chest to Bar Pull Ups</p>
            <p>15 Thrusters</p>
            <p>9 Bar Muscle Ups</p>
            <p>Medball - 9/6 kg</p>
            <p>Barbell - 42,5/30 kg</p>
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
            <p>3 x 8/8 Front Rack Box Step Ups</p>
            <p>4 x 8 Hip Thrusts @Heavy Weight</p>
            <p>3 x 8/8 Goblet Cossack Squats</p>
            <p>4 x 10 Reverse Hypers (Hold 2" Each Rep) w/Medball</p>
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
            <p>Workout: 8 Min @06:38/km</p>
            <p>8 Min @05:38/km</p>
            <p>8 Min @06:38/km</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
