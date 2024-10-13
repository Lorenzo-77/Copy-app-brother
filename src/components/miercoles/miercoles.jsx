import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isCleanAndJerkOpen, setIsCleanAndJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isStaminaConditioningOpen, setIsStaminaConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRepMaxCleanAndJerk, setOneRepMaxCleanAndJerk] = useState('');
  const [calculatedWeightsCleanAndJerk, setCalculatedWeightsCleanAndJerk] = useState({
    set69: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMaxCleanAndJerk(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set69: (rm * 0.69).toFixed(2),
      };
      setCalculatedWeightsCleanAndJerk(calculatedWeights);
    } else {
      setCalculatedWeightsCleanAndJerk({
        set69: '',
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
              <li>10/10 Thoracic Extension Rotation</li>
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
            <p>All Sets @69%: {calculatedWeightsCleanAndJerk.set69 ? `${calculatedWeightsCleanAndJerk.set69} kg` : '69%'}</p>
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
            <p>With a Running Clock</p>
            <p>On The 00:00</p>
            <p>For Time</p>
            <ul>
              <li>12-9-6 Power Snatches</li>
              <li>12-9-6 Burpee Box Jump Overs</li>
            </ul>
            <p>On The 12:00</p>
            <p>For Time</p>
            <ul>
              <li>6-9-12 Power Clean & Jerks</li>
              <li>2-4-6 Rope Climbs</li>
            </ul>
            <p>Barbell - 60/42,5 kg</p>
            <p>Rope - 4,57 m</p>
            <h4>ACTIVACIÓN/ACTIVATION</h4>
            <p>2 Rounds</p>
            <ul>
              <li>3 Power Snatch</li>
              <li>3 Burpee Box Jump Overs</li>
            </ul>
            <p>Rest 30-45”</p>
            <p>1 Round</p>
            <ul>
              <li>3 Clean & Jerks</li>
              <li>1 Rope Climb</li>
            </ul>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 6-10 Min (Cada parte)</p>
          </div>
        )}
      </div>

      {/* Sección STAMINA CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsStaminaConditioningOpen)}
          aria-expanded={isStaminaConditioningOpen}
          aria-controls="stamina-conditioning-content"
        >
          <h3>STAMINA CONDITIONING</h3>
          <span>{isStaminaConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isStaminaConditioningOpen && (
          <div className="section-content" id="stamina-conditioning-content">
            <p>Every 3:30 Min x 10:30 Min (3 Sets)</p>
            <ul>
              <li>15/12 Cal Ski Erg</li>
              <li>15 Chest to Bar Pull Ups</li>
              <li>15 m Double Kettlebell Overhead Walking Lunges</li>
            </ul>
            <p>Kettlebells - 2 x 24/16 kg</p>
            <p><strong>REEMPLAZOS/REPLACEMENTS:</strong> No Ski Erg: 12 Burpee to Target</p>
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
              <li>12 Dumbbell Bench Press</li>
              <li>12 Rolling DB Triceps Extensions</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10 Supinated Grip Strict Pull Ups</li>
              <li>12 Barbell Bicep Curls</li>
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
            <p>1 Min Wall Sit</p>
            <p>2-3 Sets</p>
            <ul>
              <li>12 Ab Wheel Roll Outs</li>
              <li>12/12 Hanging Oblique Knee Raises</li>
            </ul>
            <p>Rest 1 Min b/t Sets</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
