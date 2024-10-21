import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandWalkConditioningOpen, setIsHandstandWalkConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRM, setOneRM] = useState('');
  const [calculatedWeightsSnatch, setCalculatedWeightsSnatch] = useState({
    set60: '',
    set64: '',
    set68: '',
    set72: '',
    set74: '',
    set78: '',
    set82: '',
    set86: '',
    set90: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeightsSnatch({
        set60: (rm * 0.60).toFixed(2),
        set64: (rm * 0.64).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
        set72: (rm * 0.72).toFixed(2),
        set74: (rm * 0.74).toFixed(2),
        set78: (rm * 0.78).toFixed(2),
        set82: (rm * 0.82).toFixed(2),
        set86: (rm * 0.86).toFixed(2),
        set90: (rm * 0.90).toFixed(2),
      });
    } else {
      setCalculatedWeightsSnatch({
        set60: '',
        set64: '',
        set68: '',
        set72: '',
        set74: '',
        set78: '',
        set82: '',
        set86: '',
        set90: '',
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
              <li>10 Russian KB Swings</li>
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
              <li>1 High Hang Squat Snatch (Drop & Reset)</li>
              <li>1 Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculatedWeightsSnatch.set60}kg - {calculatedWeightsSnatch.set64}kg - {calculatedWeightsSnatch.set68}kg - {calculatedWeightsSnatch.set72}kg
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
            <p>OTM 12 Min</p>
            <ul>
              <li>Min 1: 1 Squat Snatch @ {calculatedWeightsSnatch.set74}kg</li>
              <li>Min 2: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg</li>
              <li>Min 3: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg</li>
              <li>Min 4: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg</li>
              <li>Min 5: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg</li>
              <li>Min 6: 1 Squat Snatch @ {calculatedWeightsSnatch.set86}kg</li>
              <li>Min 7: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg</li>
              <li>Min 8: 1 Squat Snatch @ {calculatedWeightsSnatch.set86}kg</li>
              <li>Min 9: 1 Squat Snatch @ {calculatedWeightsSnatch.set90}kg</li>
              <li>Min 10: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg</li>
              <li>Min 11: 1 Squat Snatch @ {calculatedWeightsSnatch.set86}kg</li>
              <li>Min 12: 1 Squat Snatch @ {calculatedWeightsSnatch.set90}kg</li>
            </ul>
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
            <p>Min 00:00 - 04:00: 2 Rounds For Time</p>
            <ul>
              <li>8 Power Snatches</li>
              <li>8 Lateral Burpees Over the Bar</li>
            </ul>
            <p>Min 04:00 - 08:00: For Time</p>
            <ul>
              <li>35/27 Cal Assault Bike</li>
            </ul>
            <p>Min 08:00 - 16:00: 4 Rounds For Time</p>
            <ul>
              <li>8 Overhead Squats</li>
              <li>12 Chest to Bar Pull Ups</li>
            </ul>
            <p>Min 16:00 - 20:00: For Time</p>
            <ul>
              <li>35/27 Cal Assault Bike</li>
            </ul>
            <p>Min 20:00 - 24:00: 2 Rounds For Time</p>
            <ul>
              <li>8 Lateral Burpees Over the Bar</li>
              <li>8 Power Snatches</li>
            </ul>
            <p>Barbell - 60/42.5 kg</p>
          </div>
        )}
      </div>

      {/* Sección HANDSTAND WALK CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsHandstandWalkConditioningOpen)}
          aria-expanded={isHandstandWalkConditioningOpen}
          aria-controls="handstand-walk-conditioning-content"
        >
          <h3>HANDSTAND WALK CONDITIONING</h3>
          <span>{isHandstandWalkConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isHandstandWalkConditioningOpen && (
          <div className="section-content" id="handstand-walk-conditioning-content">
            <p>AMRAP 10 Min</p>
            <ul>
              <li>15/12 Cal Row</li>
              <li>2 Pirouettes</li>
            </ul>
            <p>Pirouette - 1 Rep = 1 Turnaround (1x1m) + 3 m Handstand Walk (4 m Total)</p>
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
              <li>12 Front Squats</li>
              <li>8 Sumo Stance Good Mornings</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>8/8 Back Rack Reverse Lunges</li>
              <li>10-12 Banded GHR</li>
              <li>Rest 1 Min b/t Sets</li>
            </ul>
            <p>All Sets @Moderate Weight</p>
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
            <p>3 Sets For Quality</p>
            <ul>
              <li>30" Handstand Floaters</li>
              <li>3 x 20" Tuck Hold On Parallel Bars</li>
              <li>12/12 Side Plank Raise (1-2" Hold Each Rep)</li>
              <li>Rest 45-60" b/t Sets</li>
            </ul>
            <p>Then</p>
            <p>4 x 20 Plate Turkish Sit Ups (Rest 30" b/t)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
