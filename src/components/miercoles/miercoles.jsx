import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [oneRmSnatch, setOneRmSnatch] = useState(0);

  const toggleSection = (setState) => setState(prevState => !prevState);

  const calculateWeight = (percentage) => {
    return Math.round(oneRmSnatch * (percentage / 100));
  };

  return (
    <div className="container">
      <h1>Miércoles</h1>

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
              <li>8 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>10 Russian KB Swings</li>
              <li>8 Yoga Push Ups</li>
              <li>5 Cuban Press Complex</li>
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
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Power Snatch</li>
              <li>1 Overhead Squat</li>
              <li>1 Hang Squat Snatch</li>
            </ul>
            <p>
              Sets: {calculateWeight(53)} kg - {calculateWeight(56)} kg - {calculateWeight(59)} kg - {calculateWeight(62)} kg
            </p>
          </div>
        )}
      </div>

      {/* Input para 1RM */}
      <div className="section-block">
        <label>
          Ingresar 1RM Snatch (kg):
          <input
            type="number"
            value={oneRmSnatch}
            onChange={(e) => setOneRmSnatch(e.target.value)}
            placeholder="Ingresa tu 1RM en kg"
          />
        </label>
      </div>

      {/* Sección SNATCH */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchOpen)}>
          <h3>SNATCH</h3>
          <span>{isSnatchOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchOpen && (
          <div className="section-content">
            <p>OTM 11 Min</p>
            <ul>
              <li>Min 1: 1 Snatch @ {calculateWeight(67)}kg</li>
              <li>Min 2: 1 Snatch @ {calculateWeight(72)}kg</li>
              <li>Min 3: 1 Snatch @ {calculateWeight(77)}kg</li>
              <li>Min 4: Rest</li>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>3 Wall Walks</li>
              <li>6 Power Snatch (42.5/30 kg)</li>
              <li>9 Box Jump Overs (60/50 cm; STEP DOWN)</li>
            </ul>
            <p>Rest 5 Min</p>
            <p>4 Rounds For Time</p>
            <ul>
              <li>2 Handstand Walk Segments</li>
              <li>4 Power Snatch (50/35 kg)</li>
              <li>6 Box Jump Overs (76/60 cm; STEP DOWN)</li>
            </ul>
            <p>Handstand Walk - 7,5 m Unbroken Segments</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
