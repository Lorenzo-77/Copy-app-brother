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
    set57: '',
    set61: '',
    set65: '',
    set68: '',
    set72: '',
    set76: '',
    set80: '',
    set84: ''
  });

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        set57: (rm * 0.57).toFixed(2),
        set61: (rm * 0.61).toFixed(2),
        set65: (rm * 0.65).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
        set72: (rm * 0.72).toFixed(2),
        set76: (rm * 0.76).toFixed(2),
        set80: (rm * 0.80).toFixed(2),
        set84: (rm * 0.84).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        set57: '',
        set61: '',
        set65: '',
        set68: '',
        set72: '',
        set76: '',
        set80: '',
        set84: ''
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
              <li>1 Power Snatch</li>
              <li>1 Low Hang Squat Snatch</li>
              <li>1 Pausing Squat Snatch (2" Pause At Knee Level)</li>
              <li>1 Low Hang Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeights.set57}kg - {calculatedWeights.set61}kg -{' '}
              {calculatedWeights.set65}kg
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
              <li>1 Snatch Segmented Deadlift</li>
              <li>2 Low Hang Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeights.set68}kg - {calculatedWeights.set72}kg -{' '}
              {calculatedWeights.set76}kg - {calculatedWeights.set80}kg -{' '}
              {calculatedWeights.set84}kg
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
            <p>With a Running Clock</p>
            <p>On the 00:00 For Time:</p>
            <ul>
              <li>30 Power Snatches</li>
              <li>30 Chest to Bar Pull Ups</li>
            </ul>
            <p>Time Cap: 8 Min</p>
            <p>On the 10:00 For Time:</p>
            <ul>
              <li>30 Overhead Squats</li>
              <li>15 Wall Walks</li>
            </ul>
            <p>Barbell - 61/43 kg</p>
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
            <p>3 Rounds For Quality</p>
            <ul>
              <li>90 Double Unders</li>
              <li>3 Handstand Walk Segments</li>
            </ul>
            <p>REST 3 Min</p>
            <p>3 Rounds For Quality</p>
            <ul>
              <li>60 Double Unders</li>
              <li>3 Handstand Walk Pirouettes</li>
            </ul>
            <p>
              Pirouette - 1 Rep = 1 Turnaround (1x1m) + 3 m Handstand Walk (4 m
              Total)
            </p>
            <p>Handstand Walk - 7.5 m Unbroken Segments</p>
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
              <li>3 x 10 Double Kettlebell Front Squats</li>
              <li>3 x 30 Banded Good Mornings</li>
              <li>3 x 8/8 Double Dumbbell Box Step Ups (Farmers Hold)</li>
              <li>4 x 8-10 Banded GHR</li>
            </ul>
            <p>30" REST BETWEEN EXERCISES</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
