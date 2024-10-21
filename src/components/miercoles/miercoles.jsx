import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRepMaxCleanAndJerk, setOneRepMaxCleanAndJerk] = useState('');
  const [calculatedWeightsCleanAndJerk, setCalculatedWeightsCleanAndJerk] = useState({
    set72: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMaxCleanAndJerk(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set72: (rm * 0.72).toFixed(2),
      };
      setCalculatedWeightsCleanAndJerk(calculatedWeights);
    } else {
      setCalculatedWeightsCleanAndJerk({
        set72: '',
      });
    }
  };

  return (
    <div className="container">
      <h1>Miercoles</h1>

      {/* Sección WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content" id="warm-up-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats</li>
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección CLEAN & JERK */}
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
            <p>OTM 4 Min</p>
            <ul>
              <li>1 Power Clean</li>
              <li>1 Power Clean & Push Jerk</li>
              <li>1 Power Clean & Push Jerk</li>
            </ul>
            <p>*All Repetitions Are Singles</p>
            <p>All Sets @72%: {calculatedWeightsCleanAndJerk.set72 ? `${calculatedWeightsCleanAndJerk.set72} kg` : '72%'}</p>
            <p>Introduce tu 1RM para Clean & Jerk:</p>
            <input 
              type="number" 
              value={oneRepMaxCleanAndJerk} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
          </div>
        )}
      </div>

      {/* Sección CONDITIONING */}
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
            <p>For Time</p>
            <ul>
              <li>32/27 Cal Ski Erg</li>
              <li>8 Ring Muscle Ups</li>
              <li>16 Alternating Dumbbell Snatches</li>
              <li>8 Ring Muscle Ups</li>
              <li>16 Alternating Dumbbell Snatches</li>
              <li>8 Ring Muscle Ups</li>
              <li>16 Alternating Dumbbell Snatches</li>
              <li>32/27 Cal Ski Erg</li>
            </ul>
            <p>Dumbbell - 32/22,5 kg</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 6-10 Min</p>
            <p>No Ski Erg: 27 Burpee to Target</p>
            <p>No 32,5/22,5 kg Dumbbell: 24 Dumbbell Snatch c/22,5/15 kg</p>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING (OPCIONAL) */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsRowConditioningOpen)}
          aria-expanded={isRowConditioningOpen}
          aria-controls="row-conditioning-content"
        >
          <h3>ROW CONDITIONING (OPCIONAL)</h3>
          <span>{isRowConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isRowConditioningOpen && (
          <div className="section-content" id="row-conditioning-content">
            <p>8 Rounds</p>
            <ul>
              <li>500 m @02:30/500 m</li>
            </ul>
            <p>Rest 1:30 Min b/t Rounds</p>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
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
              <li>12 Strict Parallel Dips</li>
              <li>30 Banded Triceps Extensions</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10 Pronated Grip Strict Pull Ups</li>
              <li>12 Dumbbell Hammer Curls</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* Sección RECOVERY/MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
          aria-controls="midline-content"
        >
          <h3>RECOVERY/MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content" id="midline-content">
            <p>3 Rounds For Quality</p>
            <ul>
              <li>15 Seated Single Leg Pike Ups (Each Leg)</li>
              <li>15 Seated Single Leg Straddle Ups (Each Leg)</li>
              <li>15" Bridge Hold</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
