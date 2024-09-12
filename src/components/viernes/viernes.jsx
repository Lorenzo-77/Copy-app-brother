import { useState } from 'react';
import '../../styles.css';

const Proyects = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSquatCleanOpen, setIsSquatCleanOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRmClean, setOneRmClean] = useState(0);

  const toggleSection = (setState) => setState(prevState => !prevState);

  const calculateWeight = (percentage) => {
    return (oneRmClean * percentage / 100).toFixed(2);
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
              <li>8 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>10 Russian KB Swings</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Bottom Ring Support Hold + 10" Top Of Ring Support Hold</li>
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
                onChange={(e) => setOneRmClean(e.target.value)}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>OTM 11 Min</p>
            <ul>
              <li>Min 1: 1 Squat Clean @ {calculateWeight(69)}kg</li>
              <li>Min 2: 1 Squat Clean @ {calculateWeight(72)}kg</li>
              <li>Min 3: 1 Squat Clean @ {calculateWeight(75)}kg</li>
              <li>Min 4: REST</li>
              <li>Min 5: 1 Squat Clean @ {calculateWeight(72)}kg</li>
              <li>Min 6: 1 Squat Clean @ {calculateWeight(75)}kg</li>
              <li>Min 7: 1 Squat Clean @ {calculateWeight(78)}kg</li>
              <li>Min 8: REST</li>
              <li>Min 9: 1 Squat Clean @ {calculateWeight(75)}kg</li>
              <li>Min 10: 1 Squat Clean @ {calculateWeight(78)}kg</li>
              <li>Min 11: 1 Squat Clean @ {calculateWeight(81)}kg</li>
            </ul>
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
              <li>21/15 Cal Assault Bike</li>
              <li>6/4 Ring Muscle Ups</li>
              <li>9 Power Cleans @60/42.5 kg</li>
            </ul>
            <p>Score Objetivo: 13-18 Min</p>
            <p>Estímulo & Objetivos: Sostener Ring Muscle Ups Unbroken y planificar los Cleans para mantener intensidad en la Assault Bike.</p>
            <p>Reemplazos: Si no hay Assault Bike, correr 300 m.</p>
          </div>
        )}
      </div>

      {/* ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <ul>
              <li>10 Horizontal Body Rows</li>
              <li>10 Feet Elevated Weighted Bench Dips</li>
              <li>10 Standing Wall Dumbbell Bicep Curls</li>
              <li>15 Medball GHD Sit Ups</li>
            </ul>
            <p>Rest 30-60" entre sets. Todo con peso moderado.</p>
          </div>
        )}
      </div>

      {/* SESSION 2: PRO RUNNER TEST */}
      <h2>SESSION 2: PRO RUNNER TEST</h2>
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsProRunnerOpen)}>
          <h3>PRO RUNNER TEST</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content">
            <p>For Time: 1600 m Run</p>
            <p>ESTRATEGIA:</p>
            <ul>
              <li>Primer 400m: Moderadamente cómodo</li>
              <li>400-800m: Moderadamente desafiante</li>
              <li>800-1200m: Desafiante</li>
              <li>1200-1600m: Máximo esfuerzo</li>
            </ul>
            <p>Consejos adicionales: Calentamiento adecuado, respiración controlada, mantener la técnica.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Proyects;
