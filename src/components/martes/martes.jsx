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
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : '0kg';
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
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>10/10 Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Goblet Squats</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
            </ul>
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
            <p><strong>PARTE 1:</strong> Elegir opción según resultado del TEST</p>
            <ul>
              <li><strong>21+ reps:</strong> 2 Sets - 12 Chest-to-Wall HSPU, 12 DB Lunges, 12 Strict HSPU, 12 DB Box Step Ups</li>
              <li><strong>11-20 reps:</strong> 4 Sets - 11+8+6 Strict HSPU con descansos breves</li>
              <li><strong>6-10 reps:</strong> 7 Sets Every 2' - 11+8 Strict HSPU</li>
              <li><strong>1-5 reps:</strong> 5 Sets - 4 Strict HSPU Negativas + 3 Sets Max Unbroken Pike Strict HSPU</li>
            </ul>
            <p><strong>PARTE 2:</strong></p>
            <ul>
              <li>4 x 12 Parallel Dips</li>
              <li>3 x 15 Seated DB Strict Press</li>
            </ul>
            <p><strong>Nota:</strong> Mantener descansos fijos, ajustar peso si es necesario.</p>
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
           
            <p>
              Build to 2 Reps <span className="highlight-weight">@{getRM(0.84)}</span>
            </p>
            <p>
              Then 3 Sets x 6 Front Squats <span className="highlight-weight">@{getRM(0.71)}</span>
            </p>
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
            <p>5 Rounds For Time</p>
            <ul>
              <li>400 m Run</li>
              <li>6/4 Ring Muscle Ups</li>
              <li>11 Front Squats</li>
            </ul>
            <p><strong>Barbell:</strong> 60/42,5 kg</p>
            <p><strong>Score Objetivo:</strong> 18-24 Min</p>
            <p><strong>Objetivos:</strong> Minimizar transiciones y mantener ritmo en corrida</p>
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
              <li>40" Barbell Overhead Hold @Heavy</li>
              <li>40 m Double Kettlebell Farmers Carry</li>
            </ul>
            <p>Rest 1 Min</p>
            <p>Then 3 Rounds</p>
            <ul>
              <li>10 Dumbbell Lateral Raises</li>
              <li>10 Dual Plate Cuban Press</li>
            </ul>
            <p>Rest 1 Min entre rondas</p>
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
            <h4>Warm Up</h4>
            <p>5 Min Run From Easy To Moderate/Hard Pace</p>
            <h4>Workout</h4>
            <ul>
              <li>5 Rounds: 400 m @Moderate/Fast Pace + 200 m @Easy Pace</li>
              <li>Rest 2 Min</li>
              <li>5 Rounds: 200 m @Moderate/Fast Pace + 100 m @Easy Pace</li>
            </ul>
            <h4>Cooldown</h4>
            <p>5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
