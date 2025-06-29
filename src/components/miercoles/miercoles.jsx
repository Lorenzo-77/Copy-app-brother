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
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : '0kg';
  };

  return (
    <div className="container">
      <h1>MIÉRCOLES</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>WARM UP</h3><span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>15"/15" Copenhagen Plank</li>
              <li>6/6 Single Leg Hip Bridge</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats (2" Pause At Bottom)</li>
              <li>10" Wall Facing Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* JERK COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('jerk')}>
          <h3>JERK</h3><span>{sections.jerk ? '▲' : '▼'}</span>
        </div>
        {sections.jerk && (
          <div className="section-content">
            <p>1) Technique</p>
            <ul>
              <li>1 x 4 Jump to Split</li>
              <li>1 x 4 Press in Split</li>
              <li>2 x 3 Drop to Split</li>
              <li>2 x 3 Squat Jerk</li>
              <li>2 x 2 [1 Behind the Neck Split Jerk + 1 Split Jerk]</li>
            </ul>
            <p>*Rest 30" entre Sets & Rest As Needed b/t movements</p>
            <p>**Utilizar pesos livianos a moderados, buscando hacer prolijo el movimiento y llegar a las posiciones deseadas</p>

            <p>2) Jerk Complex - 3 Sets</p>
            <p>2 Split Jerk</p>
            <p>Rest 60-90" b/t Sets</p>
            <p>
              Sets: <span className="highlight-weight">{getRM(0.75)}</span> - 
              <span className="highlight-weight"> {getRM(0.80)}</span> - 
              <span className="highlight-weight"> {getRM(0.85)}</span>
            </p>
            <label htmlFor="jerkRM">1RM (kg):</label>
            <input
              type="number"
              id="jerkRM"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
        )}
      </div>

      {/* CLEAN & JERK */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('cleanjerk')}>
          <h3>CLEAN & JERK</h3><span>{sections.cleanjerk ? '▲' : '▼'}</span>
        </div>
        {sections.cleanjerk && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Squat Clean</li>
              <li>1 Low Hang Squat Clean</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>
              Sets: <span className="highlight-weight">{getRM(0.74)}</span> - 
              <span className="highlight-weight"> {getRM(0.78)}</span> - 
              <span className="highlight-weight"> {getRM(0.82)}</span> - 
              <span className="highlight-weight"> {getRM(0.86)}</span>
            </p>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('conditioning')}>
          <h3>CONDITIONING</h3><span>{sections.conditioning ? '▲' : '▼'}</span>
        </div>
        {sections.conditioning && (
          <div className="section-content">
            <p>For Time</p>
            <ul>
              <li>60/45 Cal Row</li>
              <li>45 Power Cleans</li>
              <li>30 Burpee Box Jump Overs</li>
              <li>15 Wall Walks</li>
            </ul>
            <p>Barbell - 61/43 kg | Box - 60/50 cm</p>
            <p><strong>Score Objetivo:</strong> 12-18 Min</p>
            <p><strong>Estimulo:</strong> Sostener ritmo en Power Cleans y Burpees/Wall Walks sin frenar</p>
            <p><strong>Reemplazos:</strong> No Row: 600 m Run</p>
            <h4>Activación</h4>
            <ul>
              <li>10/7 Cal Row</li>
              <li>6 Power Cleans</li>
              <li>4 Burpee Box Jump Overs</li>
            </ul>
          </div>
        )}
      </div>

      {/* ROW CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('rowconditioning')}>
          <h3>ROW CONDITIONING</h3><span>{sections.rowconditioning ? '▲' : '▼'}</span>
        </div>
        {sections.rowconditioning && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>300 m Row @01:45/500m</li>
              <li>300 m Row @Marathon Pace</li>
              <li>100 m Row @Sprint</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then 2 Sets</p>
            <ul>
              <li>300 m Row @Sub 01:45/500m</li>
            </ul>
            <p>Rest 1 Min b/t</p>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY</h3><span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>4 x 8 Dumbbell Bench Press</li>
              <li>3 x 8 Double Kettlebell Bent Over Rows</li>
              <li>3 x 12 Rolling Dumbbell Triceps Extensions</li>
              <li>3 x 12 Dumbbell Hammer Curls</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
            <p>*Completar las 3 vueltas de un movimiento, luego pasar al siguiente</p>
            <p>**Peso Moderado/pesado; ajustar carga si es necesario sin modificar descanso</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
