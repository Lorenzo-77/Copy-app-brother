import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandWalkOpen, setIsHandstandWalkOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRM, setOneRM] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set60: '',
    set67: '',
    set71: '',
    set75: '',
    set78: '',
    set82: '',
    set86: '',
    set90: '',
    set94: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        set60: (rm * 0.60).toFixed(2),
        set67: (rm * 0.67).toFixed(2),
        set71: (rm * 0.71).toFixed(2),
        set75: (rm * 0.75).toFixed(2),
        set78: (rm * 0.78).toFixed(2),
        set82: (rm * 0.82).toFixed(2),
        set86: (rm * 0.86).toFixed(2),
        set90: (rm * 0.90).toFixed(2),
        set94: (rm * 0.94).toFixed(2),
      });
    } else {
      setCalculatedWeights({
        set60: '',
        set67: '',
        set71: '',
        set75: '',
        set78: '',
        set82: '',
        set86: '',
        set90: '',
        set94: '',
      });
    }
  };

  return (
    <div className="container">
      <h1>Lunes</h1>

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
              <li>8/8 Kettlebell Single Leg Hip Thrust</li>
              <li>6/6 Lateral Box Step Ups</li>
              <li>10 Banded External Rotation Face Pulls</li>
              <li>10 Yoga Push Ups</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección SNATCH TECHNIQUE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSnatchTechniqueOpen)}
          aria-expanded={isSnatchTechniqueOpen}
          aria-controls="snatch-technique-content"
        >
          <h3>SNATCH TECHNIQUE</h3>
          <span>{isSnatchTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchTechniqueOpen && (
          <div className="section-content" id="snatch-technique-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Pausing Squat Snatch (2" Pause At Knee Level)</li>
              <li>1 Hang Squat Snatch (Drop & Reset)</li>
              <li>1 Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeights.set60}kg - {calculatedWeights.set67}kg - {calculatedWeights.set71}kg - {calculatedWeights.set75}kg
            </p>
            <div className="input-block">
              <label htmlFor="oneRM">Ingrese su 1RM (kg):</label>
              <input
                type="number"
                id="oneRM"
                value={oneRM}
                onChange={handle1RMChange}
                placeholder="Ingresa tu 1RM en kg"
                min="0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Sección SNATCH */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSnatchOpen)}
          aria-expanded={isSnatchOpen}
          aria-controls="snatch-content"
        >
          <h3>SNATCH</h3>
          <span>{isSnatchOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchOpen && (
          <div className="section-content" id="snatch-content">
            <p>OTM 9 Min</p>
            <ul>
              <li>Min 1: 1 Squat Snatch @ {calculatedWeights.set78}kg</li>
              <li>Min 2: 1 Squat Snatch @ {calculatedWeights.set82}kg</li>
              <li>Min 3: 1 Squat Snatch @ {calculatedWeights.set86}kg</li>
              <li>Min 4: 1 Squat Snatch @ {calculatedWeights.set82}kg</li>
              <li>Min 5: 1 Squat Snatch @ {calculatedWeights.set86}kg</li>
              <li>Min 6: 1 Squat Snatch @ {calculatedWeights.set90}kg</li>
              <li>Min 7: 1 Squat Snatch @ {calculatedWeights.set86}kg</li>
              <li>Min 8: 1 Squat Snatch @ {calculatedWeights.set90}kg</li>
              <li>Min 9: 1 Squat Snatch @ {calculatedWeights.set94}kg</li>
            </ul>
            <p>Then</p>
            <p>3 x 1 Heavy Squat Snatch Singles</p>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>7 Power Snatch</li>
              <li>11 Thrusters</li>
              <li>500/400 m Row</li>
            </ul>
            <p>Barbell - 50/35 kg</p>
            <p>NOTAS</p>
            <p>SCORE OBJETIVO</p>
            <ul>
              <li>15-20 Min</li>
              <li>No Row: 400 m Run</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección HANDSTAND WALK O-COURSE PRACTICE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsHandstandWalkOpen)}
          aria-expanded={isHandstandWalkOpen}
          aria-controls="handstand-walk-content"
        >
          <h3>HANDSTAND WALK O-COURSE PRACTICE</h3>
          <span>{isHandstandWalkOpen ? '▲' : '▼'}</span>
        </div>
        {isHandstandWalkOpen && (
          <div className="section-content" id="handstand-walk-content">
            <p>For Quality</p>
            <p>10 Min Handstand Walk Obstacle Course Practice</p>
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
              <li>15 Front Squats</li>
              <li>8 Sumo Stance Good Mornings</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
          aria-controls="midline-content"
        >
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content" id="midline-content">
            <p>5 Sets</p>
            <ul>
              <li>Pechito</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
