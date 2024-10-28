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
    set75: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMaxCleanAndJerk(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set75: (rm * 0.75).toFixed(2),
      };
      setCalculatedWeightsCleanAndJerk(calculatedWeights);
    } else {
      setCalculatedWeightsCleanAndJerk({
        set75: '',
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
              <li>Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>5/5 One Arm Muscle Snatch</li>
              <li>5/5 One Arm Shoulder Press</li>
              <li>10/10 Squat + Thoracic Extension Rotation</li>
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
            <p>All Sets @75%: {calculatedWeightsCleanAndJerk.set75 ? `${calculatedWeightsCleanAndJerk.set75} kg` : '75%'}</p>
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
              <li>40 Toes to Bar</li>
              <li>20 Sandbag to Shoulder</li>
            </ul>
            <p>REST 5 Min</p>
            <p>For Time</p>
            <ul>
              <li>20 Double Kettlebell Hang Clean & Jerks</li>
              <li>40 Burpee Box Jump Overs</li>
            </ul>
            <p>Sandbag - 70/45 kg</p>
            <p>Kettlebells - 2 x 32/24 kg</p>
            <p>Box - 60/50 cm</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 4-8 Min (Cada parte)</p>
            <p>No Sandbag: 20 Devil Press (2 x 22,5/15 kg)</p>
            <p>No 32/24 kg Kettlebells: 25 Reps w/24/16 kg</p>
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
            <p>600 m @02:30/500 m</p>
            <p>Rest 30"</p>
            <p>250 m @02:26/500 m</p>
            <p>Rest 30"</p>
            <p>200 m @02:22/500 m</p>
            <p>Rest 2 Min</p>
            <p>500 m @02:30/500 m</p>
            <p>Rest 30"</p>
            <p>200 m @02:26/500 m</p>
            <p>Rest 30"</p>
            <p>150 m @02:22/500 m</p>
            <p>Rest 2 Min</p>
            <p>400 m @02:30/500 m</p>
            <p>Rest 30"</p>
            <p>150 m @02:26/500 m</p>
            <p>Rest 30"</p>
            <p>100 m @02:22/500 m</p>
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
              <li>12 Decline Dumbbell Bench Press</li>
              <li>12 Dumbbell Overhead Triceps Extensions</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10 Wide Grip Pronated Grip Strict Pull Ups</li>
              <li>12 Barbell Preacher Curls</li>
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
            <p>3 Rounds</p>
            <ul>
              <li>30 Ab Mat Sit Ups</li>
              <li>30 Plank Shoulder Taps</li>
              <li>30 Russian Twists</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
