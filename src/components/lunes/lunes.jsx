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
    return oneRM
      ? <span className="highlight-weight">{(rm * percent).toFixed(0)}kg</span>
      : <span className="highlight-weight">0kg</span>;
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
              <li>15"/15" Copenhagen Plank</li>
              <li>8/8 Single Leg Hip Thrust</li>
              <li>6/6 Cossack Squats</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* SNATCH TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchtech')}>
          <h3>SNATCH TECHNIQUE</h3>
          <span>{sections.snatchtech ? '▲' : '▼'}</span>
        </div>
        {sections.snatchtech && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Slow-Pull Power Snatch</li>
              <li>1 Hang Squat Snatch</li>
              <li>(Drop & Reset)</li>
              <li>1 Squat Snatch</li>
              <li>1 Snatch Balance</li>
            </ul>
            <p>Sets: {getRM(0.60)} - {getRM(0.65)} - {getRM(0.70)}</p>
            <label>1RM Snatch (Full):</label>
            <input
              type="number"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
        )}
      </div>

      {/* SNATCH COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchcomplex')}>
          <h3>SNATCH COMPLEX</h3>
          <span>{sections.snatchcomplex ? '▲' : '▼'}</span>
        </div>
        {sections.snatchcomplex && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Squat Snatch</li>
              <li>2 Low Hang Squat Snatch</li>
            </ul>
            <p>Rest 60-90" entre sets</p>
            <p>Sets: {getRM(0.77)} - {getRM(0.80)} - {getRM(0.83)} - {getRM(0.86)}</p>
            <label>1RM Snatch (Full):</label>
            <input
              type="number"
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
            <p>4 Rounds</p>
            <ul>
              <li>400 m Run</li>
              <li>15 Overhead Squats</li>
              <li>15 Bar Facing Burpees</li>
            </ul>
            <p><strong>Barbell:</strong> 60/42.5 kg</p>
            <p><strong>Score Objetivo:</strong> 18-24 Min</p>
            <p><strong>Activación:</strong></p>
            <ul>
              <li>200 m Run</li>
              <li>5 Overhead Squats</li>
              <li>5 Bar Facing Burpees</li>
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
              <li>3 x 10/10 Double Kettlebell Front Rack Cossack Squats</li>
              <li>4 x 8 Hip Thrust @Heavy Weight</li>
              <li>3 x 10 Back Rack Standing Calf Raises (movimiento lento y controlado)</li>
              <li>4 x 8-10 Glute Ham Raises</li>
            </ul>
            <p>30" Rest entre rondas; libre entre movimientos</p>
            <p>Peso moderado/pesado; ajustar carga si es necesario</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
