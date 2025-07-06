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
    return oneRM
      ? <span className="highlight-weight">{(rm * percent).toFixed(0)}kg</span>
      : <span className="highlight-weight">0kg</span>;
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
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* JERK */}
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
            <p>**Pesos livianos a moderados, foco en técnica</p>

            <p>2) Jerk Complex - 3 Sets</p>
            <p>2 Split Jerk</p>
            <p>Rest 60-90" b/t Sets</p>
            <p>Sets: {getRM(0.78)} - {getRM(0.83)} - {getRM(0.88)}</p>
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
            <p>Sets: {getRM(0.78)} - {getRM(0.82)} - {getRM(0.86)} - {getRM(0.90)}</p>
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
            <p>For Total Time</p>
            <ul>
              <li>12-8-4 Power Clean & Jerks</li>
              <li>Ring Muscle Ups (Women: 9-6-4)</li>
              <li>Power Snatches</li>
              <li>Bar Muscle Ups (Women: 9-6-4)</li>
            </ul>
            <p>REST 90" b/t Rounds</p>
            <p>Barbell - 61/43 kg</p>
            <p><strong>Score Objetivo:</strong> 18-24 Min (Incluyendo descansos)</p>
            <p><strong>Estimulo:</strong> Singles rápidos en barra + controlar cortes en gimnásticos</p>
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
            <p>8 Sets</p>
            <ul>
              <li>500 m Row @02:00/500m</li>
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
              <li>3 x 10 Dumbbell Bench Press</li>
              <li>3 x 8 Double Kettlebell Prone Rows</li>
              <li>3 x 12 Rolling Dumbbell Triceps Extensions</li>
              <li>3 x 12 Dumbbell Hammer Curls</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
