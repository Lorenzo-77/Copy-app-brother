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

      {/* JERK COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('jerk')}>
          <h3>JERK COMPLEX</h3><span>{sections.jerk ? '▲' : '▼'}</span>
        </div>
        {sections.jerk && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Push Jerk</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Sets: {getRM(0.72)} - {getRM(0.77)} - {getRM(0.82)}</p>
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

      {/* CLEAN & JERK COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('cleanjerk')}>
          <h3>CLEAN & JERK COMPLEX</h3><span>{sections.cleanjerk ? '▲' : '▼'}</span>
        </div>
        {sections.cleanjerk && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Power Clean</li>
              <li>1 Low Hang Squat Clean</li>
              <li>1 Front Squat</li>
              <li>1 Split Jerk</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Sets: {getRM(0.70)} - {getRM(0.74)} - {getRM(0.78)} - {getRM(0.82)}</p>
            <label htmlFor="cleanRM">1RM (kg):</label>
            <input
              type="number"
              id="cleanRM"
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
          <h3>CONDITIONING</h3><span>{sections.conditioning ? '▲' : '▼'}</span>
        </div>
        {sections.conditioning && (
          <div className="section-content">
            <p>3 Rounds For Time</p>
            <ul>
              <li>10 Deadlift</li>
              <li>10 Hang Squat Cleans</li>
              <li>10 Shoulder to Overhead</li>
            </ul>
            <p>REST 5 Min</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>8/6 Ring Muscle Ups</li>
              <li>15 m Handstand Walk</li>
              <li>8 Box Jump Overs (Step Down)</li>
            </ul>
            <p>Barbell - 70/47,5 kg</p>
            <p>Box - 76/60 cm</p>
            <p>Handstand Walk - 7,5 m Segments (1,5 m Unbroken Check Points)</p>
            <p><strong>Score Objetivo:</strong> 6-9 Min (Cada parte)</p>
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
            <p>1500 m Row @02:05/500m</p>
            <p>Rest 2 Min</p>
            <p>4 Rounds</p>
            <ul>
              <li>500 m Row @01:45/500m</li>
              <li>Rest 45" b/t Rounds</li>
            </ul>
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
              <li>4 x 6 Dumbbell Bench Press</li>
              <li>3 x 8 Double Kettlebell Pendlay Rows</li>
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
