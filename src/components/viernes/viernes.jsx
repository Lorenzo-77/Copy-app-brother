import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSquatCleanOpen, setIsSquatCleanOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRmClean, setOneRmClean] = useState(0);
  const [oneRmBackSquat, setOneRmBackSquat] = useState(0);

  const toggleSection = (setState) => setState(prevState => !prevState);

  const calculateWeight = (percentage, oneRm) => {
    return (oneRm * percentage / 100).toFixed(2);
  };

  return (
    <div className="container">
      <h1>VIERNES</h1>

      {/* SESSION 1 */}
      <h2>SESSION 1</h2>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>WARM UP</h3>
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
              <li>8 Dual Plate Cuban Press</li>
            </ul>
          </div>
        )}
      </div>

      {/* SQUAT CLEAN */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSquatCleanOpen)}>
          <h3>SQUAT CLEAN</h3>
          <span>{isSquatCleanOpen ? '▲' : '▼'}</span>
        </div>
        {isSquatCleanOpen && (
          <div className="section-content">
            <label>
              Ingresar 1RM de Clean (kg):
              <input
                type="number"
                value={oneRmClean}
                onChange={(e) => setOneRmClean(Number(e.target.value))}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>OTM 15 Min</p>
            <ul>
              <li>Min 1: 3 Squat Clean @ {calculateWeight(59, oneRmClean)}kg</li>
              <li>Min 2: 3 Squat Clean @ {calculateWeight(62, oneRmClean)}kg</li>
              <li>Min 3: 3 Squat Clean @ {calculateWeight(65, oneRmClean)}kg</li>
              <li>Min 4: REST</li>
              <li>Min 5: 2 Squat Clean @ {calculateWeight(69, oneRmClean)}kg</li>
              <li>Min 6: 2 Squat Clean @ {calculateWeight(72, oneRmClean)}kg</li>
              <li>Min 7: 2 Squat Clean @ {calculateWeight(75, oneRmClean)}kg</li>
              <li>Min 8: REST</li>
              <li>Min 9: 1 Squat Clean @ {calculateWeight(79, oneRmClean)}kg</li>
              <li>Min 10: 1 Squat Clean @ {calculateWeight(82, oneRmClean)}kg</li>
              <li>Min 11: 1 Squat Clean @ {calculateWeight(85, oneRmClean)}kg</li>
              <li>Min 12: REST</li>
              <li>Min 13: 1 Squat Clean @ {calculateWeight(79, oneRmClean)}kg</li>
              <li>Min 14: 1 Squat Clean @ {calculateWeight(82, oneRmClean)}kg</li>
              <li>Min 15: 1 Squat Clean @ {calculateWeight(85, oneRmClean)}kg</li>
            </ul>
            <p>*Todos los Cleans son Singles, No hacer Touch And Go</p>
            <p>*All reps are Singles, No Touch and Go</p>
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
            <label>
              Ingresar 1RM de Back Squat (kg):
              <input
                type="number"
                value={oneRmBackSquat}
                onChange={(e) => setOneRmBackSquat(Number(e.target.value))}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>Build to 3 Reps @ {calculateWeight(83, oneRmBackSquat)}kg</p>
            <p>Then</p>
            <ul>
              <li>6 Back Squats @ {calculateWeight(61, oneRmBackSquat)}kg</li>
              <li>6 Back Squats @ {calculateWeight(65, oneRmBackSquat)}kg</li>
              <li>4 Back Squats @ {calculateWeight(69, oneRmBackSquat)}kg</li>
              <li>4 Back Squats @ {calculateWeight(73, oneRmBackSquat)}kg</li>
            </ul>
            <p>Rest 60-90" entre sets.</p>
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
            <ul>
              <li>500/400 m Row</li>
              <li>18 Toes to Bar</li>
              <li>12 Double Dumbbell Thrusters</li>
              <li>*Dumbbells - 2 x 22,5/15 kg</li>
            </ul>
            <p>SCORE OBJETIVO
            • 14-18 Min</p>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE + CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>SKILL PRACTICE + CONDITIONING</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <p>5 Min Triple Under Practice</p>
            <ul>
              <li>Min 1: 10-15 Double Under Crossovers + 30 Crossovers</li>
              <li>Min 2: 2/1 Legless Rope Climb (Rope de 4,57 m)</li>
            </ul>
            <p>OTM 8-10 Min</p>
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
            <p>3 Rounds</p>
            <ul>
              <li>12 Belt Squats</li>
              <li>15 Hip Thrusts @Moderate Weight</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>8/8 Back Rack Drop Lunges</li>
              <li>15 Reverse Hypers (Hold 2" Each Rep) w/Medball</li>
            </ul>
            <p>Rest 1 Min b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      

    </div>
  );
};

export default Viernes;
