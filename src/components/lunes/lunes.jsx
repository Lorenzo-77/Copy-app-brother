import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isSnatchDeadliftOpen, setIsSnatchDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);
  const [oneRepMaxSnatch, setOneRepMaxSnatch] = useState('');

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (event) => {
    setOneRepMaxSnatch(event.target.value);
  };

  // Cálculo de pesos basados en porcentajes
  const calculateWeights = (percentages) => {
    return percentages.map(percentage => 
      Math.round((oneRepMaxSnatch * percentage) / 100)
    );
  };

  const snatchTechniquePercentages = [64, 67, 70, 73];
  const snatchPercentages = [76, 81, 86];
  const snatchDeadliftPercentages = [90, 95, 95, 100];
  
  const snatchTechniqueWeights = oneRepMaxSnatch ? calculateWeights(snatchTechniquePercentages) : [];
  const snatchWeights = oneRepMaxSnatch ? calculateWeights(snatchPercentages) : [];
  const snatchDeadliftWeights = oneRepMaxSnatch ? calculateWeights(snatchDeadliftPercentages) : [];

  const toggleSection = (setState) => setState(prevState => !prevState);

  return (
    <div className="container">
      <h1>Lunes</h1>

      {/* Sección WARM UP */}
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
              <li>6/6 Goblet Lateral Box Step Ups</li>
              <li>8 Yoga Push Ups</li>
              <li>10 Russian KB Swings</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección SNATCH TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchTechniqueOpen)}>
          <h3>SNATCH TECHNIQUE</h3>
          <span>{isSnatchTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchTechniqueOpen && (
          <div className="section-content">
            <p>Introduce tu 1RM para Snatch:</p>
            <input 
              type="number" 
              value={oneRepMaxSnatch} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
            {oneRepMaxSnatch && (
              <div>
                <p>4 Sets con los siguientes pesos:</p>
                <ul>
                  <li>Set 1: {snatchTechniqueWeights[0]} kg (64%)</li>
                  <li>Set 2: {snatchTechniqueWeights[1]} kg (67%)</li>
                  <li>Set 3: {snatchTechniqueWeights[2]} kg (70%)</li>
                  <li>Set 4: {snatchTechniqueWeights[3]} kg (73%)</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sección SNATCH */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchOpen)}>
          <h3>SNATCH</h3>
          <span>{isSnatchOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchOpen && (
          <div className="section-content">
            <p>3 Sets:</p>
            <ul>
              <li>3 Snatch @76% ({snatchWeights[0]} kg)</li>
              <li>2 Snatch @81% ({snatchWeights[1]} kg)</li>
              <li>1 Snatch @86% ({snatchWeights[2]} kg)</li>
            </ul>
            <p>Rest 45" entre sets</p>
          </div>
        )}
      </div>

      {/* Sección SNATCH DEADLIFT & PULLS */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchDeadliftOpen)}>
          <h3>SNATCH DEADLIFT & PULLS</h3>
          <span>{isSnatchDeadliftOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchDeadliftOpen && (
          <div className="section-content">
            <p>4 Sets:</p>
            <ul>
              <li>1 Snatch Lift Off (Hold 2" At Knee Level)</li>
              <li>1 Segmented Snatch Deadlift (2" Pause on each position)</li>
              <li>1 Pause Snatch Pull (2" Pause At Knee Level)</li>
            </ul>
            {oneRepMaxSnatch && (
              <ul>
                <li>Set 1: {snatchDeadliftWeights[0]} kg (90%)</li>
                <li>Set 2: {snatchDeadliftWeights[1]} kg (95%)</li>
                <li>Set 3: {snatchDeadliftWeights[2]} kg (95%)</li>
                <li>Set 4: {snatchDeadliftWeights[3]} kg (100%)</li>
              </ul>
            )}
            <p>Rest 1-2 Min b/t sets</p>
          </div>
        )}
      </div>

      {/* Sección CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>For Time</p>
            <ul>
              <li>9-7-5 Ring Muscle Ups</li>
              <li>Squat Snatch</li>
            </ul>
            <p>Time Cap: 10 Min</p>
            <p>Barbell - 61/43 kg</p>
            <p>SCORE OBJETIVO: 4-6 Min</p>
          </div>
        )}
      </div>

      {/* Sección HANDSTAND WALK CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>HANDSTAND WALK CONDITIONING</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>OTM 12 Min</p>
            <ul>
              <li>Min 1: 15/12 Cal Assault Bike</li>
              <li>Min 2: 18 Toes to Bar</li>
              <li>Min 3: 1-2 Handstand Walk Pirouettes</li>
            </ul>
            <p>Pirouette - 1 Rep = 1 Turnaround (1x1m) + 3 m Handstand Walk (4 m Total)</p>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 Rounds</p>
            <ul>
              <li>12 Box Front Squats (Box justo debajo del Paralelo)</li>
              <li>8 Good Mornings</li>
            </ul>
            <p>Rest 1 Min entre rounds</p>

            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>12 Barbell Hip Thrusts</li>
              <li>12 Heavy Russian Kettlebell Swings</li>
            </ul>
            <p>Rest 1 Min entre rounds</p>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>10/10 Lateral Med Ball Throws</li>
              <li>10 Standing Med Ball Throws</li>
              <li>8 Strict Hanging Leg Raises</li>
            </ul>
            <p>Rest 1 Min entre sets</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
