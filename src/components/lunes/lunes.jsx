import { useState } from 'react';
import '../../styles.css';

function Lunes() {
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
      <h1>Lunes</h1>

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
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>15"/15" Copenhagen Plank</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
              <li>10" Wall Facing Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* BOX SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('boxsquat')}>
          <h3>BOX SQUAT</h3>
          <span>{sections.boxsquat ? '▲' : '▼'}</span>
        </div>
        {sections.boxsquat && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>6 Box Back Squats</li>
            </ul>
            <p>Rest 1-2 Min entre sets</p>
            <p>Sets: {getRM(0.55)} - {getRM(0.60)} - {getRM(0.65)}</p>
            <label htmlFor="backSquatRM">1RM Back Squat:</label>
            <input
              type="number"
              id="backSquatRM"
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
            <p>3 Rounds For Time</p>
            <ul>
              <li>7 Wall Walks</li>
              <li>14 Front Squats</li>
              <li>21 American Kettlebell Swings</li>
            </ul>
            <p><strong>Barbell:</strong> 60/42.5 kg</p>
            <p><strong>Kettlebell:</strong> 24/16 kg</p>
            <p><strong>SCORE OBJETIVO:</strong> 8-12 Min</p>
            <p><strong>ESTIMULO & OBJETIVOS:</strong></p>
            <ul>
              <li>Acelerar el ritmo de los Wall Walks.</li>
              <li>Minimizar el tiempo de transición entre movimientos.</li>
            </ul>
            <p><strong>ACTIVACIÓN:</strong></p>
            <ul>
              <li>2 Wall Walks</li>
              <li>4 Front Squats</li>
              <li>6 American Kettlebell Swings</li>
              <li>2 Wall Walks</li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY</h3>
          <span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>3 x 12 Flat Bench Dumbbell Flys</li>
              <li>3 x 30 Banded Pull Aparts</li>
              <li>3 x 8/8 Goblet Cossack Squats</li>
              <li>3 x 15/15 Single Leg Banded Hamstring Curls</li>
            </ul>
            <p><strong>30" Rest b/t Rounds; Rest As Needed b/t Movements</strong></p>
            <p><strong>Nota:</strong> Peso Moderado/pesado; mantener descansos fijos y ajustar peso si es necesario.</p>
          </div>
        )}
      </div>

      {/* MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('midline')}>
          <h3>MIDLINE</h3>
          <span>{sections.midline ? '▲' : '▼'}</span>
        </div>
        {sections.midline && (
          <div className="section-content">
            <ul>
              <li>4 x 20" L-Hang</li>
              <li>4 x 30" Sandbag Bearhug Hold</li>
              <li>4 x 10/10 Side Bends @Heavy Dumbbell</li>
            </ul>
            <p><strong>30" Rest b/t Rounds; Rest As Needed b/t Movements</strong></p>
            <p><strong>Nota:</strong> Peso Moderado/pesado; mantener descansos fijos y ajustar peso si es necesario.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
