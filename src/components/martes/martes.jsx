import { useState } from 'react';
import '../../styles.css';

function Martes() {
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
      <h1>Martes</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Goblet Squats</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
              <li>10" Wall Facing Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* FRONT SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('frontsquat')}>
          <h3>FRONT SQUAT</h3>
          <span>{sections.frontsquat ? '▲' : '▼'}</span>
        </div>
        {sections.frontsquat && (
          <div className="section-content">
            <p>Build to 2 Reps @{getRM(0.88)}</p>
            <p>Then 3 Sets x 6 Front Squats @{getRM(0.74)}</p>
            <p>Rest 60-90" entre sets</p>
            <label htmlFor="frontSquatRM">1RM Front Squat:</label>
            <input
              type="number"
              id="frontSquatRM"
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
              <li>15 Toes to Bar</li>
              <li>3 Dumbbell Front Rack Walking Lunge Segments</li>
            </ul>
            <p>REST 4 Min</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>15 Double Dumbbell Thrusters</li>
              <li>2 Handstand Walk Segments</li>
            </ul>
            <p><strong>Dumbbells:</strong> 2 x 22.5/15 kg</p>
            <p><strong>Score Objetivo:</strong> 4-7 Min (Cada parte)</p>
          </div>
        )}
      </div>

      {/* HANDSTAND PUSH UP DEVELOPMENT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('hspu')}>
          <h3>HANDSTAND PUSH UP DEVELOPMENT</h3>
          <span>{sections.hspu ? '▲' : '▼'}</span>
        </div>
        {sections.hspu && (
          <div className="section-content">
            <p><strong>PARTE 1:</strong> Elegir según resultado del TEST</p>
            <ul>
              <li><strong>21+ reps:</strong> AMRAP 10 Min: 12/9 Cal Row, 3 x [1 Wall Walk + 2 Chest-to-Wall HSPU], 6 Alternating Dumbbell Snatches</li>
              <li><strong>11-20 reps:</strong> 4 Sets: 13, 11, 8 Strict HSPU (unbroken)</li>
              <li><strong>6-10 reps:</strong> 5 Sets Every 2' - 16, 13 Strict HSPU (unbroken)</li>
              <li><strong>1-5 reps:</strong> 5 Sets: 6 HSPU Negativas + 3 Sets Max Unbroken Pike HSPU</li>
            </ul>
            <p><strong>PARTE 2:</strong> 4 x 18 Parallel Dips, 4 x 15 Seated DB Strict Press</p>
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
            <p>3 Rounds</p>
            <ul>
              <li>50" Barbell Overhead Hold @Heavy</li>
              <li>50 m Double KB Farmers Carry</li>
            </ul>
            <p>Rest 1 Min</p>
            <p>Then 3 Rounds</p>
            <ul>
              <li>10 Dumbbell Lateral Raises</li>
              <li>12 Dual Plate Cuban Press</li>
            </ul>
          </div>
        )}
      </div>

      {/* PRO RUNNER */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('prorunner')}>
          <h3>SESSION 2: PRO RUNNER</h3>
          <span>{sections.prorunner ? '▲' : '▼'}</span>
        </div>
        {sections.prorunner && (
          <div className="section-content">
            <p>Warm Up: 3 Rounds 200 m Easy to Moderate</p>
            <p>Workout:</p>
            <ul>
              <li>4 Sets: 1000m @Moderate + 1' Rest + 400m @Moderate + 2' Rest + 200m @Easy</li>
            </ul>
            <p>Cooldown: 5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
