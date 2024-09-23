import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkTechniqueOpen, setIsJerkTechniqueOpen] = useState(false);
  const [isCleanJerkOpen, setIsCleanJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
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
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Overhead Squats</li>
              <li>10" Bottom Ring Support Hold + 10" Top Of Ring Support Hold</li>
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
              <li>1 x 5 Back Rack Step to Split @Light Weight</li>
              <li>3 x 3 Back Rack Jump to Split @Light to Moderate Weight</li>
            </ul>
            <p>2) Overhead Position</p>
            <ul>
              <li>2 x 3 Jerk Balance In Split @Moderate Weight</li>
            </ul>
          </div>
        )}
      </div>

      {/* Input para 1RM */}
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
              <li>1 Power Clean</li>
              <li>1 Hang Power Clean</li>
              <li>1 Push Jerk</li>
              <li>1 Split Jerk</li>
              <li>@{calculateWeight(66)}kg</li>
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
            <p>For Total Time</p>
            <ul>
              <li>12/9 Ring Muscle Ups</li>
              <li>12 Front Squats</li>
              <li>Rest 45"</li>
              <li>9/7 Ring Muscle Ups</li>
              <li>9 Front Squats</li>
              <li>Rest 45"</li>
              <li>6/5 Ring Muscle Ups</li>
              <li>6 Front Squats</li>
              <li>Rest 45"</li>
              <li>3 Ring Muscle Ups</li>
              <li>3 Front Squats</li>
            </ul>
            <p>Barbell - 75/50 kg</p>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING (OPTIONAL) */}
      <div className="section-block">
        <h3>ROW CONDITIONING (OPTIONAL)</h3>
        <ul>
          <li>1000 m Row @02:30/500</li>
          <li>Rest 2 Min</li>
          <li>2 Rounds</li>
          <li>300 m Row @02:30/500</li>
          <li>500 m @Recovery Pace</li>
          <li>300 m Row @02:25/500</li>
          <li>Rest 2 Min b/t Rounds</li>
        </ul>
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
              <li>12 Strict Parallel Dips</li>
              <li>30 Banded Triceps Extensions</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10 Pronated Grip Strict Pull Ups</li>
              <li>12 Dumbbell Hammer Curls</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
          </div>
        )}
      </div>

      {/* Sección RECOVERY/MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsRecoveryOpen)}>
          <h3>RECOVERY/MIDLINE</h3>
          <span>{isRecoveryOpen ? '▲' : '▼'}</span>
        </div>
        {isRecoveryOpen && (
          <div className="section-content">
            <p>10 Min For Quality</p>
            <ul>
              <li>15" Hollow Body Flutter Kicks</li>
              <li>15" Chinese Plank Back</li>
              <li>10/10 Dumbbell Side Plank Rotations @Light Weight</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
