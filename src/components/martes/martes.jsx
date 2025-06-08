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
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : `0kg`;
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
              <li>15"/15" Copenhagen Plank</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
              <li>10" Supinated Bar Hang</li>
            </ul>
          </div>
        )}
      </div>

      {/* HANDSTAND PUSH UP DEVELOPMENT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('handstand')}>
          <h3>HANDSTAND PUSH UP DEVELOPMENT</h3>
          <span>{sections.handstand ? '▲' : '▼'}</span>
        </div>
        {sections.handstand && (
          <div className="section-content">
            <h4>PARTE 1: Según tu Test</h4>
            <h5>1) Test: 21+ Reps</h5>
            <p>4 Sets, Each For Time</p>
            <ul>
              <li>5 Wall Walks</li>
              <li>10 Box Jump Overs (Step Down)</li>
              <li>10 Chest-to-Wall HSPU (R1 & R3)</li>
              <li>10 Strict HSPU (R2 & R4)</li>
              <li>15 m Handstand Walk</li>
            </ul>
            <p>Rest 1:1 b/t Sets</p>

            <h5>2) Test: 11-20 Reps</h5>
            <p>3 Sets</p>
            <ul>
              <li>13 + 11 + 8 Unbroken Strict HSPU</li>
              <li>Rest 2 Min b/t Sets</li>
            </ul>

            <h5>3) Test: 6-10 Reps</h5>
            <p>4 Sets Every 2 Min</p>
            <ul>
              <li>16 + 13 Unbroken Strict HSPU</li>
            </ul>

            <h5>4) Test: 1-5 Reps</h5>
            <p>4 Sets</p>
            <ul>
              <li>6 Strict HSPU Negatives (5" Descenso)</li>
            </ul>
            <p>+ 2 Sets Max Unbroken Pike Strict HSPU</p>
            <p><strong>Notas:</strong> No sobrepasar 20 reps. Elevar los pies para más estímulo.</p>

            <h4>PARTE 2</h4>
            <ul>
              <li>3 x 18 Parallel Dips</li>
              <li>4 x 15 Banded Incline DB Bench Press</li>
            </ul>
            <p>30" Rest entre sets. Peso moderado/pesado.</p>

            <h4>IMPORTANTE</h4>
            <p>Si no hiciste el test: 1 Set Max Strict HSPU, luego descansar 5-10 min y aplicar el nivel.</p>
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
            <p>Build to 2 Reps @ {getRM(0.84)}</p>
            <p>Then 3 Sets of 6 Reps @ {getRM(0.70)}</p>
            <p>Rest 60-90" b/t Sets</p>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>500/400 m Ski Erg</li>
              <li>9 Sandbag Squats (70/45 kg)</li>
              <li>3 Rope Climbs (4.57 m)</li>
            </ul>
            <p><strong>Score Objetivo:</strong> 14-18 Min</p>
            <p><strong>Estimulo:</strong> Ritmo sostenido, apretar mentalmente donde más cueste.</p>

            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>200 m Ski Erg</li>
              <li>4 Sandbag Squats</li>
              <li>1-2 Rope Climbs</li>
            </ul>

            <h4>REEMPLAZOS</h4>
            <ul>
              <li>No Ski Erg: 500/400 m Row o 400 m Run</li>
              <li>No Sandbag: 15 Double KB Front Squats (2 x 24/16 kg)</li>
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
            <p>3 Rounds</p>
            <ul>
              <li>50" Barbell Overhead Hold @1RM Strict Press</li>
              <li>50 m Double KB Front Rack Carry</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then 2 Rounds:</p>
            <ul>
              <li>15 DB Shoulder Frontal Raises</li>
              <li>12/12 Elbow On Knee DB External Rotation</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
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
            <ul>
              <li>3 Rounds</li>
              <li>200 m Run (Easy to Moderate/Hard Pace)</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <h4>Workout</h4>
            <ul>
              <li>5 Sets</li>
              <li>500 m Run @Hard Pace</li>
              <li>60" Rest</li>
              <li>500 m Run @Hard Pace</li>
              <li>Rest 2 Min b/t Sets</li>
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
