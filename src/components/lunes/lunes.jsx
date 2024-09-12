import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isGymTestOpen, setIsGymTestOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

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
              <li>10/10 Banded Side Steps</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>6/6 Goblet Lateral Box Step Ups</li>
              <li>10 Bootstraps</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección GYMNASTICS TEST */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsGymTestOpen)}>
          <h3>GYMNASTICS TEST</h3>
          <span>{isGymTestOpen ? '▲' : '▼'}</span>
        </div>
        {isGymTestOpen && (
          <div className="section-content">
            <p>For Time</p>
            <ul>
              <li>50 Strict Handstand Push Ups</li>
            </ul>
            <div className="notes">
              <h4>NOTAS</h4>
              <p>ESTIMULO & OBJETIVOS</p>
              <ul>
                <li>Buscamos hacer un Test de Handstand Push Ups diferente, intentando hacer en el menor tiempo posible 50 repeticiones estrictas.</li>
                <li>Anoten el tiempo que les tomó, ya que utilizaremos este en combinación con el máximo de Chest-to-Wall Handstand Push Ups para hacer los trabajos lo más específicos posible de aquí en adelante.</li>
              </ul>
              <h4>NOTES</h4>
              <p>STIMULUS & GOALS</p>
              <ul>
                <li>Handstand Push Up Stamina Test para medir la resistencia en este movimiento.</li>
                <li>Anoten el tiempo para usarlo con el Chest-to-Wall Handstand Push Up Test en los próximos entrenamientos.</li>
              </ul>
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
            <p>4 Sets, Each For Time</p>
            <ul>
              <li>25/18 Cal Row</li>
              <li>100 Double Unders</li>
              <li>25 Rower Facing Burpees</li>
            </ul>
            <p>Rest 3 Min b/t Sets</p>
            <div className="notes">
              <h4>NOTAS</h4>
              <ul>
                <li>SCORE OBJETIVO: 2-4 Min (Cada Set)</li>
                <li>ESTIMULO & OBJETIVOS: Sprint, con esfuerzo máximo en los Burpees.</li>
              </ul>
              <h4>NOTES</h4>
              <ul>
                <li>TARGET SCORE: 2-4 Min (Each Set)</li>
                <li>STIMULUS & GOALS: Sprint workout, con foco en alta intensidad en los Burpees.</li>
              </ul>
              <p>REEMPLAZOS: 10 Shuttle Runs (7.5 m Segments; 1 rep = 15 m)</p>
            </div>
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
            <p>3 Sets</p>
            <ul>
              <li>8/8 Lateral Goblet Box Step Ups</li>
              <li>8/8 Kettlebell Single Leg Deadlift</li>
              <li>8/8 One Arm Shoulder Press</li>
              <li>8/8 One Arm Upright Row</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
