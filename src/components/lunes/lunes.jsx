import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchComplexOpen, setIsSnatchComplexOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandWalkOpen, setIsHandstandWalkOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRM, setOneRM] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set60: '',
    set64: '',
    set68: '',
    set70: '',
    set74: '',
    set78: '',
    set82: ''
  });

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        set60: (rm * 0.60).toFixed(2),
        set64: (rm * 0.64).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
        set70: (rm * 0.70).toFixed(2),
        set74: (rm * 0.74).toFixed(2),
        set78: (rm * 0.78).toFixed(2),
        set82: (rm * 0.82).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        set60: '',
        set64: '',
        set68: '',
        set70: '',
        set74: '',
        set78: '',
        set82: ''
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
              <li>1 Snatch Segmented Deadlift</li>
              <li>1 High Hang Squat Snatch</li>
              <li>1 Hang Squat Snatch</li>
              <li>(Drop & Reset)</li>
              <li>1 Slow-Pull Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeights.set60}kg - {calculatedWeights.set64}kg -{' '}
              {calculatedWeights.set68}kg
            </p>
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
              <li>1 Snatch Lift Off</li>
              <li>1 Slow-Pull Squat Snatch</li>
              <li>1 High Hang Squat Snatch</li>
              <li>(Drop & Reset)</li>
              <li>1 Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeights.set70}kg - {calculatedWeights.set74}kg -{' '}
              {calculatedWeights.set78}kg - {calculatedWeights.set82}kg
            </p>
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
      <p>AMRAP 3 Min</p>
      <ul>
        <li>21/15 Cal Row</li>
        <li>21 Overhead Squats (35/25 kg)</li>
        <li>Max Burpee Box Jumps</li>
      </ul>
      <p>Rest 3 Min</p>

      <p>AMRAP 3 Min</p>
      <ul>
        <li>21/15 Cal Row</li>
        <li>18 Overhead Squats (42,5/30 kg)</li>
        <li>Max Burpee Box Jumps</li>
      </ul>
      <p>Rest 3 Min</p>

      <p>AMRAP 3 Min</p>
      <ul>
        <li>21/15 Cal Row</li>
        <li>15 Overhead Squats (50/35 kg)</li>
        <li>Max Burpee Box Jumps</li>
      </ul>
      <p>Rest 3 Min</p>

      <p>AMRAP 3 Min</p>
      <ul>
        <li>21/15 Cal Row</li>
        <li>12 Overhead Squats (60/42,5 kg)</li>
        <li>Max Burpee Box Jumps</li>
      </ul>

      <p>Box - 60/50 cm</p>
      <p>
        <strong>REEMPLAZOS/REPLACEMENTS</strong>
      </p>
      <ul>
        <li>No Row: 25 American Kettlebell Swings (24/16 kg)</li>
      </ul>
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
            <p>OTM 12 Min</p>
            <ul>
              <li>Min 1: 2-3 Sandbag Bearhug Carry Segments</li>
              <li>Min 2: 2-3 Handstand Walk Segments</li>
            </ul>
            <p>Sandbag - 70/45 kg</p>
            <p>            REEMPLAZOS/REPLACEMENTS
            • No Sandbag: 2-3 Double Kettlebell Front Rack Carry Segments (2 x 24/16 kg)</p>

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
              <li>3 x 12 Front Squats</li>
              <li>4 x 6 Sumo Stance Good Mornings</li>
              <li>3 x 8/8 Back Rack Reverse Lunges</li>
              <li>4 x 8-10 Banded GHR</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
