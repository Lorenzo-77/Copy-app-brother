import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSquatCleanOpen, setIsSquatCleanOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isSkillPracticeOpen, setIsSkillPracticeOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRmClean, setOneRmClean] = useState('');
  const [oneRmBackSquat, setOneRmBackSquat] = useState('');

  // Función para manejar el cambio de 1RM Clean
  const handle1RMCleanChange = (e) => {
    setOneRmClean(e.target.value);
  };

  // Función para manejar el cambio de 1RM Back Squat
  const handle1RMBackSquatChange = (e) => {
    setOneRmBackSquat(e.target.value);
  };

  // Cálculo de pesos basados en porcentajes
  const calculateWeight = (percentage, oneRm) => {
    return oneRm ? Math.round((parseFloat(oneRm) * (percentage / 100))) : '-';
  };

  const toggleSection = (setState) => setState(prevState => !prevState);

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
              <li>8 Cuban Press</li>
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
                onChange={handle1RMCleanChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmClean && (
              <>
                <p>OTM 15 Min</p>
                <ul>
                  <li>Min 1: 3 Squat Clean @ {calculateWeight(62, oneRmClean)}% ({calculateWeight(62, oneRmClean)}kg)</li>
                  <li>Min 2: 3 Squat Clean @ {calculateWeight(65, oneRmClean)}% ({calculateWeight(65, oneRmClean)}kg)</li>
                  <li>Min 3: 3 Squat Clean @ {calculateWeight(68, oneRmClean)}% ({calculateWeight(68, oneRmClean)}kg)</li>
                  <li>Min 4: REST</li>
                  <li>Min 5: 2 Squat Clean @ {calculateWeight(72, oneRmClean)}% ({calculateWeight(72, oneRmClean)}kg)</li>
                  <li>Min 6: 2 Squat Clean @ {calculateWeight(75, oneRmClean)}% ({calculateWeight(75, oneRmClean)}kg)</li>
                  <li>Min 7: 2 Squat Clean @ {calculateWeight(78, oneRmClean)}% ({calculateWeight(78, oneRmClean)}kg)</li>
                  <li>Min 8: REST</li>
                  <li>Min 9: 1 Squat Clean @ {calculateWeight(82, oneRmClean)}% ({calculateWeight(82, oneRmClean)}kg)</li>
                  <li>Min 10: 1 Squat Clean @ {calculateWeight(85, oneRmClean)}% ({calculateWeight(85, oneRmClean)}kg)</li>
                  <li>Min 11: 1 Squat Clean @ {calculateWeight(88, oneRmClean)}% ({calculateWeight(88, oneRmClean)}kg)</li>
                  <li>Min 12: REST</li>
                  <li>Min 13: 1 Squat Clean @ {calculateWeight(82, oneRmClean)}% ({calculateWeight(82, oneRmClean)}kg)</li>
                  <li>Min 14: 1 Squat Clean @ {calculateWeight(85, oneRmClean)}% ({calculateWeight(85, oneRmClean)}kg)</li>
                  <li>Min 15: 1 Squat Clean @ {calculateWeight(88, oneRmClean)}% ({calculateWeight(88, oneRmClean)}kg)</li>
                </ul>
                <p>*Todos los Cleans son Singles, No hacer Touch And Go</p>
                <p>*All reps are Singles, No Touch and Go</p>
                <p><strong>1RM (Full):</strong> En este apartado el usuario cargará su RM que es un número
                  (puede ser 130, 70, etc., lo que se debe hacer es donde están los % calcular con ese número. O sea, si coloca 100 en sets se coloca 61kg como ejemplo).</p>
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
            <label>
              Ingresar 1RM de Back Squat (kg):
              <input
                type="number"
                value={oneRmBackSquat}
                onChange={handle1RMBackSquatChange}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            {oneRmBackSquat && (
              <>
                <p>Build to 3 Reps @ {calculateWeight(86, oneRmBackSquat)}% ({calculateWeight(86, oneRmBackSquat)}kg)</p>
                <p>Then</p>
                <ul>
                  <li>6 Back Squats @ {calculateWeight(64, oneRmBackSquat)}% ({calculateWeight(64, oneRmBackSquat)}kg)</li>
                  <li>6 Back Squats @ {calculateWeight(68, oneRmBackSquat)}% ({calculateWeight(68, oneRmBackSquat)}kg)</li>
                  <li>4 Back Squats @ {calculateWeight(72, oneRmBackSquat)}% ({calculateWeight(72, oneRmBackSquat)}kg)</li>
                  <li>4 Back Squats @ {calculateWeight(76, oneRmBackSquat)}% ({calculateWeight(76, oneRmBackSquat)}kg)</li>
                </ul>
                <p>Rest 60-90" entre sets.</p>
                <p><strong>1RM (Full):</strong> En este apartado el usuario cargará su RM que es un número
                  (puede ser 130, 70, etc., lo que se debe hacer es donde están los % calcular con ese número. O sea, si coloca 100 en sets se coloca 61kg como ejemplo).</p>
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
            <ul>
              <li>15 m Handstand Walk</li>
              <li>20 GHD Sit Ups</li>
              <li>5 Sandbag to Shoulder</li>
            </ul>
            <ul>
              <li>Handstand Walk - 7,5 m Unbroken Segments</li>
              <li>Sandbag - 70/45 kg</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 14-18 Min</p>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE + CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSkillPracticeOpen)}>
          <h3>SKILL PRACTICE + CONDITIONING</h3>
          <span>{isSkillPracticeOpen ? '▲' : '▼'}</span>
        </div>
        {isSkillPracticeOpen && (
          <div className="section-content">
            <p>5 Min Pullovers Practice</p>
            <p>Then</p>
            <p>OTM 8-10 Min</p>
            <ul>
              <li>Min 1: 18/14 Cal Row</li>
              <li>Min 2: 2 Legless Rope Climb*</li>
            </ul>
            <p>*Mujeres: 1 Legless Rope Climb + 1 Rope Climb</p>
            <p>Legless - 4,57 m</p>
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
              <li>15 Belt Squats</li>
              <li>20 Hip Thrusts @Moderate Weight</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>

            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10/10 Back Rack Drop Lunges</li>
              <li>20 Reverse Hypers (Hold 2" Each Rep) w/Medball</li>
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
