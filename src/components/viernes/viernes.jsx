import { useState } from 'react';
import '../../styles.css';

const Proyects = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSquatCleanOpen, setIsSquatCleanOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false); // Agregado para Back Squat
  const [isMidlineOpen, setIsMidlineOpen] = useState(false); // Agregado para Midline

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
              <li>6 Dual Plate Cuban Press</li>
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
            <p>OTM 11 Min</p>
            <ul>
              <li>Min 1: 3 Squat Clean @ {calculateWeight(62, oneRmClean)}kg</li>
              <li>Min 2: 3 Squat Clean @ {calculateWeight(65, oneRmClean)}kg</li>
              <li>Min 3: 3 Squat Clean @ {calculateWeight(68, oneRmClean)}kg</li>
              <li>Min 4: REST</li>
              <li>Min 5: 2 Squat Clean @ {calculateWeight(72, oneRmClean)}kg</li>
              <li>Min 6: 2 Squat Clean @ {calculateWeight(75, oneRmClean)}kg</li>
              <li>Min 7: 2 Squat Clean @ {calculateWeight(78, oneRmClean)}kg</li>
              <li>Min 8: REST</li>
              <li>Min 9: 1 Squat Clean @ {calculateWeight(76, oneRmClean)}kg</li>
              <li>Min 10: 1 Squat Clean @ {calculateWeight(79, oneRmClean)}kg</li>
              <li>Min 11: 1 Squat Clean @ {calculateWeight(82, oneRmClean)}kg</li>
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
            <p>Build to 3 Reps @ {calculateWeight(80, oneRmBackSquat)}kg</p>
            <p>Then</p>
            <ul>
              <li>6 Back Squats @ {calculateWeight(58, oneRmBackSquat)}kg</li>
              <li>6 Back Squats @ {calculateWeight(62, oneRmBackSquat)}kg</li>
              <li>4 Back Squats @ {calculateWeight(66, oneRmBackSquat)}kg</li>
              <li>4 Back Squats @ {calculateWeight(70, oneRmBackSquat)}kg</li>
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
            <p>AMRAP 7 Min</p>
            <ul>
              <li>15/12 Cal Row</li>
              <li>15 Toes to Bar</li>
            </ul>
            <p>REST 3 Min</p>
            <p>AMRAP 7 Min</p>
            <ul>
              <li>5 Bar Muscle Ups</li>
              <li>10 Thrusters @43/30 kg</li>
            </ul>
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
              <li>10 Belt Squats</li>
              <li>12 Hip Thrusts @Moderate Weight</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>6/6 Back Rack Drop Lunges</li>
              <li>12 Reverse Hypers (Hold 1" Each Rep) w/Medball</li>
            </ul>
            <p>Rest 1 Min b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <ul>
              <li>3 x 20 Plate Turkish Sit Ups</li>
              <li>3 x 10 Supine Leg Raises</li>
              <li>3 x 10/10 One Arm Suitcase Deadlift</li>
            </ul>
            <p>Rest 30" b/t Rounds</p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Proyects;
