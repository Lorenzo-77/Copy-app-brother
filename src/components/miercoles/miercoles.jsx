import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkOpen, setIsJerkOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [jerk1RM, setJerk1RM] = useState('');
  const [jerkWeights, setJerkWeights] = useState({ set70: '', set75: '', set80: '' });

  const [cleanJerk1RM, setCleanJerk1RM] = useState('');
  const [cleanJerkWeights, setCleanJerkWeights] = useState({ set68: '', set72: '', set76: '', set80: '' });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handleJerk1RMChange = (e) => {
    const value = e.target.value;
    setJerk1RM(value);
    if (value) {
      const rm = parseFloat(value);
      setJerkWeights({
        set70: (rm * 0.7).toFixed(0),
        set75: (rm * 0.75).toFixed(0),
        set80: (rm * 0.8).toFixed(0)
      });
    } else {
      setJerkWeights({ set70: '', set75: '', set80: '' });
    }
  };

  const handleCleanJerk1RMChange = (e) => {
    const value = e.target.value;
    setCleanJerk1RM(value);
    if (value) {
      const rm = parseFloat(value);
      setCleanJerkWeights({
        set68: (rm * 0.68).toFixed(0),
        set72: (rm * 0.72).toFixed(0),
        set76: (rm * 0.76).toFixed(0),
        set80: (rm * 0.8).toFixed(0)
      });
    } else {
      setCleanJerkWeights({ set68: '', set72: '', set76: '', set80: '' });
    }
  };

  return (
    <div className="container">
      <h1>MIÉRCOLES</h1>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>15"/15" Copenhagen Plank</li>
              <li>6/6 Single Leg Hip Bridge</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats (2" Pause At Bottom)</li>
              <li>10 Hanging Hip Touches</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsJerkOpen)}>
          <h3>JERK COMPLEX</h3>
          <span>{isJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isJerkOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Push Jerk</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" entre sets</p>
            <p>Sets: {jerkWeights.set70 || 0}kg - {jerkWeights.set75 || 0}kg - {jerkWeights.set80 || 0}kg</p>
            <label>Ingrese su 1RM (kg):</label>
            <input
              type="number"
              value={jerk1RM}
              onChange={handleJerk1RMChange}
              placeholder="1RM Jerk"
            />
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsCleanAndJerkOpen)}>
          <h3>CLEAN & JERK COMPLEX</h3>
          <span>{isCleanAndJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanAndJerkOpen && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Power Clean</li>
              <li>1 Low Hang Squat Clean</li>
              <li>1 Front Squat</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" entre sets</p>
            <p>Sets: {cleanJerkWeights.set68 || 0}kg - {cleanJerkWeights.set72 || 0}kg - {cleanJerkWeights.set76 || 0}kg - {cleanJerkWeights.set80 || 0}kg</p>
            <label>Ingrese su 1RM (kg):</label>
            <input
              type="number"
              value={cleanJerk1RM}
              onChange={handleCleanJerk1RMChange}
              placeholder="1RM Clean & Jerk"
            />
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
            <ul>
              <li>15 Bar Facing Burpees</li>
              <li>12 Deadlift</li>
              <li>9 Hang Power Cleans</li>
              <li>6 Push Jerks</li>
            </ul>
            <p>Barbell - 70/47,5 kg</p>
            <p>Rest 2 Min b/t Rounds</p>
            <p><strong>Objetivo:</strong> 14-20 Min</p>
            <p><strong>Estimulo:</strong> Mantener ritmo alto sin romper sets grandes.</p>

            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>5 Bar Facing Burpees</li>
              <li>4 Deadlift</li>
              <li>3 Hang Power Cleans</li>
              <li>2 Push Jerks</li>
            </ul>
          </div>
        )}
      </div>

      {/* ROW CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsRowConditioningOpen)}>
          <h3>ROW CONDITIONING</h3>
          <span>{isRowConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isRowConditioningOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>600 m Row @Sub 01:47/500m</li>
              <li>Rest 30"</li>
              <li>400 m Row @Sub 01:45/500m</li>
              <li>Rest 30"</li>
              <li>200 m Row @Sub 01:43/500m</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
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
            <ul>
              <li>3 x 15 Incline Dumbbell Bench Press</li>
              <li>3 x 10 Barbell Prone Rows</li>
              <li>3 x 12 Barbell Skull Crushers</li>
              <li>3 x 12 Barbell Biceps Curls</li>
            </ul>
            <p>30" Rest entre sets / Rest libre entre ejercicios</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
