import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [sections, setSections] = useState({});
  const [oneRM, setOneRM] = useState('');

  const toggleSection = (name) => {
    setSections(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const getRM = (percent) => {
    const rm = parseFloat(oneRM);
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : `0kg`;
  };

  return (
    <div className="container">
      <h1>MIÉRCOLES</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>WARM UP</h3>
          <span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Copenhagen Raise</li>
              <li>10/10 Single Leg Hip Bridge</li>
              <li>6/6 Lateral Box Step Ups</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Thrusters</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* SNATCH */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatch')}>
          <h3>SNATCH</h3>
          <span>{sections.snatch ? '▲' : '▼'}</span>
        </div>
        {sections.snatch && (
          <div className="section-content">
            <p>10 Sets</p>
            <ul>
              <li>1 Slow-Pull Power Snatch</li>
              <li>1 Overhead Squat</li>
            </ul>
            <p>Rest 30-60" b/t</p>
            <p>Sets:</p>
            <ul>
              <li>#1-2: {getRM(0.60)}</li>
              <li>#3-4: {getRM(0.63)}</li>
              <li>#5-6: {getRM(0.66)}</li>
              <li>#7-8: {getRM(0.69)}</li>
              <li>#9-10: {getRM(0.72)}</li>
            </ul>
            <label htmlFor="rm">1RM (kg):</label>
            <input
              type="number"
              id="rm"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('conditioning')}>
          <h3>CONDITIONING</h3>
          <span>{sections.conditioning ? '▲' : '▼'}</span>
        </div>
        {sections.conditioning && (
          <div className="section-content">
            <p>10 Rounds For Time</p>
            <ul>
              <li>8 Ground to Overhead</li>
              <li>10 Bar Facing Burpees</li>
            </ul>
            <p>Barbell - 43/30 kg</p>
            <p><strong>Time Cap:</strong> 15 Min</p>
            <p><strong>Score Objetivo:</strong> 9-15 Min</p>
            <p><strong>Estimulo:</strong> TEST – Workout 20.1 del Open de CrossFit Games</p>
            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>2-3 Rounds</li>
              <li>3 Ground to Overhead</li>
              <li>4 Bar Facing Burpees</li>
            </ul>
          </div>
        )}
      </div>

      {/* ROW CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('rowconditioning')}>
          <h3>ROW CONDITIONING</h3>
          <span>{sections.rowconditioning ? '▲' : '▼'}</span>
        </div>
        {sections.rowconditioning && (
          <div className="section-content">
            <h4>Primera Parte</h4>
            <p>4 Rounds</p>
            <ul>
              <li>1:40 ON (Target: 01:45/500m)</li>
              <li>20" OFF</li>
            </ul>
            <p>Rest 2 Min</p>
            <h4>Segunda Parte</h4>
            <p>3 Rounds</p>
            <ul>
              <li>1:40 ON (Target: 01:45/500m)</li>
              <li>20" OFF</li>
            </ul>
            <p><strong>Nota:</strong> Mantener ritmo cercano o mejor que su ritmo de 2K</p>
          </div>
        )}
      </div>

      {/* ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>3 x 50 Banded Face Pulls</li>
              <li>3 x 50 Banded Triceps Extensions</li>
              <li>3 x 50 Banded Biceps Curls</li>
              <li>3 x 1 Min Pallof Press Hold (Cada lado)</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
            <p>*Completar las 3 vueltas de un movimiento, luego pasar al otro.</p>
            <p>**Peso Moderado/pesado; si no se llega, ajustar peso pero mantener descansos.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
