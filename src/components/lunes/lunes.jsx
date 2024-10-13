import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRM, setOneRM] = useState('');
  const [calculatedWeightsSnatchTechnique, setCalculatedWeightsSnatchTechnique] = useState({
    set56: '',
    set60: '',
    set64: '',
    set68: '',
  });
  const [calculatedWeightsSnatch, setCalculatedWeightsSnatch] = useState({
    set70: '',
    set74: '',
    set78: '',
    set82: '',
    set86: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeightsSnatchTechnique({
        set56: (rm * 0.56).toFixed(2),
        set60: (rm * 0.60).toFixed(2),
        set64: (rm * 0.64).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
      });
      setCalculatedWeightsSnatch({
        set70: (rm * 0.70).toFixed(2),
        set74: (rm * 0.74).toFixed(2),
        set78: (rm * 0.78).toFixed(2),
        set82: (rm * 0.82).toFixed(2),
        set86: (rm * 0.86).toFixed(2),
      });
    } else {
      setCalculatedWeightsSnatchTechnique({
        set56: '',
        set60: '',
        set64: '',
        set68: '',
      });
      setCalculatedWeightsSnatch({
        set70: '',
        set74: '',
        set78: '',
        set82: '',
        set86: '',
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
              <li>6/6 One Arm Muscle Snatches</li>
              <li>6/6 One Arm Rack Squats</li>
              <li>6/6 One Arm Shoulder Press</li>
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
            <p>Sets: {calculatedWeightsSnatchTechnique.set56 ? `${calculatedWeightsSnatchTechnique.set56}kg (56%)` : '56%'} - {calculatedWeightsSnatchTechnique.set60 ? `${calculatedWeightsSnatchTechnique.set60}kg (60%)` : '60%'} - {calculatedWeightsSnatchTechnique.set64 ? `${calculatedWeightsSnatchTechnique.set64}kg (64%)` : '64%'} - {calculatedWeightsSnatchTechnique.set68 ? `${calculatedWeightsSnatchTechnique.set68}kg (68%)` : '68%'}</p>
            
            {/* Input para 1RM dentro de SNATCH TECHNIQUE */}
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
              <li>Min 1: 1 Squat Snatch @ {calculatedWeightsSnatch.set70}kg (70%)</li>
              <li>Min 2: 1 Squat Snatch @ {calculatedWeightsSnatch.set74}kg (74%)</li>
              <li>Min 3: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg (78%)</li>
              <li>Min 4: 1 Squat Snatch @ {calculatedWeightsSnatch.set74}kg (74%)</li>
              <li>Min 5: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg (78%)</li>
              <li>Min 6: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg (82%)</li>
              <li>Min 7: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg (78%)</li>
              <li>Min 8: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg (82%)</li>
              <li>Min 9: 1 Squat Snatch @ {calculatedWeightsSnatch.set86}kg (86%)</li>
              <li>Min 10: 1 Squat Snatch @ {calculatedWeightsSnatch.set78}kg (78%)</li>
              <li>Min 11: 1 Squat Snatch @ {calculatedWeightsSnatch.set82}kg (82%)</li>
              <li>Min 12: 1 Squat Snatch @ {calculatedWeightsSnatch.set86}kg (86%)</li>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>400 m Run</li>
              <li>15 Overhead Squats</li>
              <li>15 Bar Facing Burpees</li>
            </ul>
            <p>Barbell - 60/42.5 kg</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 18-24 Min</p>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING (OPCIONAL) */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsRowConditioningOpen)}
          aria-expanded={isRowConditioningOpen}
          aria-controls="row-conditioning-content"
        >
          <h3>ROW CONDITIONING (OPCIONAL)</h3>
          <span>{isRowConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isRowConditioningOpen && (
          <div className="section-content" id="row-conditioning-content">
            <p>4 Rounds</p>
            <ul>
              <li>250 m Row @02:28/500 m</li>
              <li>250 m @Recovery Pace</li>
              <li>No Additional Rest b/t Rounds</li>
            </ul>
            <p>Rest 5 Min</p>
            <p>4 Rounds</p>
            <ul>
              <li>250 m Row @02:28/500 m</li>
              <li>250 m @Recovery Pace</li>
              <li>No Additional Rest b/t Rounds</li>
            </ul>
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
            {/* Primera Parte de ACCESSORY */}
            <p>3 Rounds</p>
            <ul>
              <li>10 Front Squats</li>
              <li>8 Sumo Stance Good Mornings</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>

            {/* Segunda Parte de ACCESSORY */}
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>6/6 Back Rack Reverse Lunges</li>
              <li>10-12 Banded GHR</li>
            </ul>
            <p>Rest 1 Min b/t Sets</p>
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
            <p>10 Min For Quality</p>
            <ul>
              <li>15" Hollow Body Flutter Kicks</li>
              <li>15" Side Star Plank (Each Side)</li>
              <li>15" Sorenson Hold</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
