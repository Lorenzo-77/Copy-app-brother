import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isJerkTechniqueOpen, setIsJerkTechniqueOpen] = useState(false);
  const [isCleanJerkOpen, setIsCleanJerkOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false); // Añadido para MIDLINE (OPCIONAL)

  const [oneRmCleanJerk, setOneRmCleanJerk] = useState('');

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRmCleanJerk(value);
  };

  // Cálculo de pesos basados en porcentajes
  const calculateWeight = (percentage) => {
    return oneRmCleanJerk ? Math.round((parseFloat(oneRmCleanJerk) * (percentage / 100))) : '-';
  };

  const toggleSection = (setState) => setState(prevState => !prevState);

  return (
    <div className="container">
      <h1>Miércoles</h1>

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
        <div
          className="section-header"
          onClick={() => toggleSection(setIsJerkTechniqueOpen)}
          aria-expanded={isJerkTechniqueOpen}
          aria-controls="jerk-technique-content"
        >
          <h3>JERK TECHNIQUE</h3>
          <span>{isJerkTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isJerkTechniqueOpen && (
          <div className="section-content" id="jerk-technique-content">
            <p>1) Foot Positioning</p>
            <ul>
              <li>1 x 5 Back Rack Jump to Split @ Light to Moderate Weight</li>
              <li>2 x 3 Back Rack Drop to Split @ Light to Moderate Weight</li>
            </ul>
            <p>2) Overhead Position</p>
            <ul>
              <li>3 x 3 Jerk Balance In Split @ Moderate Weight</li>
            </ul>
          </div>
        )}
      </div>

      {/* Input para 1RM */}
      <div className="section-block">
        <label htmlFor="oneRmCleanJerk">
          Ingresar 1RM Clean & Jerk (kg):
          <input
            type="number"
            id="oneRmCleanJerk"
            value={oneRmCleanJerk}
            onChange={handle1RMChange}
            placeholder="Ingresa tu 1RM en kg"
          />
        </label>
      </div>

      {/* Sección CLEAN & JERK */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsCleanJerkOpen)}
          aria-expanded={isCleanJerkOpen}
          aria-controls="clean-jerk-content"
        >
          <h3>CLEAN & JERK</h3>
          <span>{isCleanJerkOpen ? '▲' : '▼'}</span>
        </div>
        {isCleanJerkOpen && (
          <div className="section-content" id="clean-jerk-content">
            <p>OTM 4 Min</p>
            <ul>
              <li>1 Power Clean</li>
              <li>1 Hang Power Clean</li>
              <li>1 Push Jerk</li>
              <li>1 Split Jerk</li>
              <li>All Sets @69%</li>
              <li>@{calculateWeight(69)}kg</li>
            </ul>
            <p>
              <strong>1RM (Full):</strong> En este apartado el usuario cargará su RM que es un número
              (puede ser 130, 70, etc. Lo que se debe hacer es donde están los % calcular con ese
              número. O sea, si coloca 100 en sets se coloca 61kg como ejemplo).
            </p>
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
            <p>4 Sets</p>
            <p>AMRAP 3 Min</p>
            <ul>
              <li>3 Rope Climbs</li>
              <li>X Cal Ski Erg</li>
              <li>Max Clean & Jerks</li>
            </ul>
            <p>Rest 3 Min b/t Sets</p>
            <ul>
              <li>Set 1: 30/21 Cal Ski Erg & 60/40 kg</li>
              <li>Set 2: 27/19 Cal Ski Erg & 70/47.5 kg</li>
              <li>Set 3: 24/17 Cal Ski Erg & 80/55 kg</li>
              <li>Set 4: 21/15 Cal Ski Erg & 90/60 kg</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 6-10 Min (Incluyendo descansos)</p>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING (OPTIONAL) */}
      <div className="section-block">
        <h3>ROW CONDITIONING (OPTIONAL)</h3>
        <ul>
          <li>5 Rounds</li>
          <li>300 m Row @02:28/500 m</li>
          <li>500 m @Recovery Pace</li>
        </ul>
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
              <li>12 Decline Dumbbell Bench Press</li>
              <li>12 Dumbbell Overhead Triceps Extensions</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>

            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>10 Wide Grip Pronated Grip Strict Pull Ups</li>
              <li>12 Barbell Preacher Curls</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>

            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* Sección MIDLINE (OPCIONAL) */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
          aria-controls="midline-content"
        >
          <h3>MIDLINE (OPCIONAL)</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content" id="midline-content">
            <p>3 Sets For Quality</p>
            <ul>
              <li>10/10 Hanging Single Leg Circles</li>
              <li>25" Extended Crab Hold</li>
              <li>50" Angled Wall Hold</li>
            </ul>
            <p>Rest 45-60" b/t Sets</p>

            <p>Then</p>
            <p>3 x 30 V-Sit Ups (Rest 30" b/t)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
