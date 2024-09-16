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

  const snatchTechniquePercentages = [58, 61, 64, 67];
  const snatchPercentages = [70, 75, 80];
  const snatchTechniqueWeights = oneRepMaxSnatch ? calculateWeights(snatchTechniquePercentages) : [];
  const snatchWeights = oneRepMaxSnatch ? calculateWeights(snatchPercentages) : [];

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
             <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Power Snatch</li>
              <li>1 Overhead Squat</li>
              <li>1 Hang Squat Snatch</li>
            </ul>
            {oneRepMaxSnatch && (
              <div>
                <p>4 Sets con los siguientes pesos:</p>
                <ul>
                  <li>Set 1: {snatchTechniqueWeights[0]} kg (58%)</li>
                  <li>Set 2: {snatchTechniqueWeights[1]} kg (61%)</li>
                  <li>Set 3: {snatchTechniqueWeights[2]} kg (64%)</li>
                  <li>Set 4: {snatchTechniqueWeights[3]} kg (67%)</li>
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
              <li>3 Snatch @70% ({snatchWeights[0]} kg)</li>
              <li>2 Snatch @75% ({snatchWeights[1]} kg)</li>
              <li>1 Snatch @80% ({snatchWeights[2]} kg)</li>
            </ul>
            <p>Rest 45" entre sets</p>
          </div>
        )}
      </div>

      {/* Sección SNATCH DEADLIFT & PULLS ON RISER */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchDeadliftOpen)}>
          <h3>SNATCH DEADLIFT & PULLS ON RISER</h3>
          <span>{isSnatchDeadliftOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchDeadliftOpen && (
          <div className="section-content">
            <p>4 Sets:</p>
            <ul>
              <li>85kg - 90kg - 90kg - 95kg</li>
            </ul>
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
            <p>5 Rounds For Time</p>
            <ul>
              <li>30/20 Cal Assault Bike</li>
              <li>30 Alternating Dumbbell Snatch</li>
              <li>20 Burpee Box Jump Overs</li>
            </ul>
            <p>Dumbbell: 22.5/15 kg, Box: 60/50 cm</p>
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
              <li>8 Box Front Squats</li>
              <li>8 Good Mornings</li>
            </ul>
            <p>Rest 1 Min entre rounds</p>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>MIDLINE (OPCIONAL)</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <p>3 Sets For Quality</p>
            <ul>
              <li>6/6 Hanging Single Leg Circles</li>
              <li>15" Extended Crab Hold</li>
              <li>30" Angled Wall Hold</li>
            </ul>
            <p>Rest 45-60" entre sets</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
