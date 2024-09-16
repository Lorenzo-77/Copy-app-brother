import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkTechniqueOpen, setIsJerkTechniqueOpen] = useState(false);
  const [isCleanJerkOpen, setIsCleanJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [oneRmCleanJerk, setOneRmCleanJerk] = useState(0);

  const toggleSection = (setState) => setState(prevState => !prevState);

  const calculateWeight = (percentage) => {
    return Math.round(oneRmCleanJerk * (percentage / 100));
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
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10/10 Squat + Thoracic Extension Rotation</li>
              <li>6/6 One Arm Russian KB Swings</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección JERK TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsJerkTechniqueOpen)}>
          <h3>JERK TECHNIQUE</h3>
          <span>{isJerkTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isJerkTechniqueOpen && (
          <div className="section-content">
            <p>1) Foot Positioning</p>
            <ul>
              <li>2 x 5 Back Rack Step to Split @Light Weight</li>
              <li>2 x 3 Back Rack Jump to Split @Light to Moderate Weight</li>
            </ul>
            <p>2) Overhead Position</p>
            <ul>
              <li>1 x 4 Jerk Balance In Split @Moderate Weight</li>
            </ul>
          </div>
        )}
      </div>

      {/* Input para 1RM */}


      {/* Sección CLEAN & JERK */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsCleanJerkOpen)}>
          <h3>CLEAN & JERK</h3>
          <span>{isCleanJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanJerkOpen && (
          <div className="section-content">
            <p>OTM 4 Min</p>
            <ul>
              <li>1 Power Clean </li>
              <li>1 Hang Power Clean</li>
              <li>1 Push Jerk</li>
              <li>1 Split Jerk </li>
              <li>@{calculateWeight(63)}kg</li>
            </ul>
            <div className="section-block">
        <label>
          Ingresar 1RM Clean & Jerk (kg):
          <input
            type="number"
            value={oneRmCleanJerk}
            onChange={(e) => setOneRmCleanJerk(e.target.value)}
            placeholder="Ingresa tu 1RM en kg"
          />
        </label>
      </div>
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
            <p>3 Rounds For Time</p>
            <ul>
              <li>50 Double Unders</li>
              <li>9 Power Snatches</li>
              <li>3 Rope Climbs</li>
            </ul>
            <p>Rest 5 Min</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>50 Double Unders</li>
              <li>9 Squat Cleans</li>
              <li>6 Wall Walks</li>
            </ul>
            <p>Barbell - 60/40 kg</p> {/* Valor fijo */}
            <p>Rope - 4,57 m</p> {/* Valor fijo */}
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
      <div className="section-block">
        <h3>ACCESSORY</h3>
        <p>3 Rounds</p>
        <ul>
          <li>12 Dumbbell Bench Press</li>
          <li>12 Rolling DB Triceps Extensions</li>
        </ul>
        <p>Rest 1 Min b/t Rounds</p>
        <p>Then</p>
        <p>3 Rounds</p>
        <ul>
          <li>10 Supinated Grip Strict Pull Ups</li>
          <li>12 Barbell Bicep Curls</li>
        </ul>
        <p>Rest 1 Min b/t Rounds</p>
      </div>
    </div>
  );
}

export default Miercoles;
