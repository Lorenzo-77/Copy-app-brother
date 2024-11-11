import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchComplexOpen, setIsSnatchComplexOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandWalkOpen, setIsHandstandWalkOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRM, setOneRM] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set49: '',
    set53: '',
    set57: '',
    set60: '',
    set64: '',
    set68: '',
    set72: '',
    set76: ''
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        set49: (rm * 0.49).toFixed(2),
        set53: (rm * 0.53).toFixed(2),
        set57: (rm * 0.57).toFixed(2),
        set60: (rm * 0.60).toFixed(2),
        set64: (rm * 0.64).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
        set72: (rm * 0.72).toFixed(2),
        set76: (rm * 0.76).toFixed(2),
      });
    } else {
      setCalculatedWeights({
        set49: '',
        set53: '',
        set57: '',
        set60: '',
        set64: '',
        set68: '',
        set72: '',
        set76: ''
      });
    }
  };

  return (
    <div className="container">
      <h1>Lunes</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
        >
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>8/8 Kettlebell Single Leg Hip Thrust</li>
              <li>6/6 Lateral Box Step Ups</li>
              <li>20 Banded Pull Aparts</li>
              <li>10 Yoga Push Ups</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* SNATCH TECHNIQUE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSnatchTechniqueOpen)}
          aria-expanded={isSnatchTechniqueOpen}
        >
          <h3>SNATCH TECHNIQUE</h3>
          <span>{isSnatchTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchTechniqueOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Pausing Power Snatch (2" Pause At Knee Level)</li>
              <li>1 Hang Squat Snatch (Drop & Reset)</li>
              <li>1 Pausing Squat Snatch (2" Pause At Knee Level)</li>
              <li>1 Low Hang Squat Snatch</li>
            </ul>
            <p>Sets: {calculatedWeights.set49}kg - {calculatedWeights.set53}kg - {calculatedWeights.set57}kg</p>
            <div className="input-block">
        <label>Ingrese su 1RM en kg:</label>
        <input
          type="number"
          value={oneRM}
          onChange={handle1RMChange}
          placeholder="Ej: 100"
        />
      </div>
          </div>
        )}
      </div>

      {/* SNATCH COMPLEX */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsSnatchComplexOpen)}
          aria-expanded={isSnatchComplexOpen}
        >
          <h3>SNATCH COMPLEX</h3>
          <span>{isSnatchComplexOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchComplexOpen && (
          <div className="section-content">
            <p>5 Sets</p>
            <ul>
              <li>1 Snatch Segmented Deadlift</li>
              <li>1 Hang Squat Snatch</li>
              <li>1 High Hang Squat Snatch</li>
            </ul>
            <p>Sets: {calculatedWeights.set60}kg - {calculatedWeights.set64}kg - {calculatedWeights.set68}kg - {calculatedWeights.set72}kg - {calculatedWeights.set76}kg</p>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsConditioningOpen)}
          aria-expanded={isConditioningOpen}
        >
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>250/200 m Ski Erg</li>
              <li>8 Right Arm Dumbbell Snatches</li>
              <li>8 Right Arm Dumbbell Overhead Walking Lunge Steps</li>
              <li>8 Left Arm Dumbbell Snatches</li>
              <li>8 Left Arm Dumbbell Overhead Walking Lunge Steps</li>
              <li>Max Burpee Box Jump Overs</li>
            </ul>
            <p>REST 4 Min b/t Sets</p>
            <p>Dumbbell - 32.5/22.5 kg</p>
            <p>Box - 60/50 cm</p>
          </div>
        )}
      </div>

      {/* HANDSTAND WALK CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsHandstandWalkOpen)}
          aria-expanded={isHandstandWalkOpen}
        >
          <h3>HANDSTAND WALK CONDITIONING</h3>
          <span>{isHandstandWalkOpen ? '▲' : '▼'}</span>
        </div>
        {isHandstandWalkOpen && (
          <div className="section-content">
            <p>AMRAP 8 Min</p>
            <ul>
              <li>5 Sandbag to Shoulder</li>
              <li>7.5 m Sandbag Carry</li>
              <li>15 m Handstand Walk</li>
              <li>7.5 m Sandbag Carry</li>
            </ul>
            <p>Sandbag - 70/45 kg</p>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryOpen)}
          aria-expanded={isAccessoryOpen}
        >
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <ul>
              <li>3 x 12 Goblet Squats</li>
              <li>4 x 6 Good Mornings (Moderate Weight)</li>
              <li>3 x 8/8 Goblet Box Step Ups</li>
              <li>3 x 8-10 Banded GHR</li>
            </ul>
          </div>
        )}
      </div>

      {/* MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
        >
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <p>2 Sets:</p>
            <ul>
              <li>15 Back Extensions (Weighted)</li>
              <li>15 Sit-Ups with Twist</li>
            </ul>
          </div>
        )}
      </div>

     
    </div>
  );
}

export default Lunes;
