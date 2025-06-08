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

      {/* SNATCH TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchTechnique')}>
          <h3>SNATCH TECHNIQUE</h3>
          <span>{sections.snatchTechnique ? '▲' : '▼'}</span>
        </div>
        {sections.snatchTechnique && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Pause Power Snatch (2" Pause At Knee Level)</li>
              <li>1 High Hang Squat Snatch</li>
              <li>1 Squat Snatch</li>
              <li>1 Snatch Balance</li>
            </ul>
            <p>Sets: {getRM(0.55)} - {getRM(0.60)} - {getRM(0.65)}</p>
            <label htmlFor="snatchRM">1RM Snatch (Full):</label>
            <input
              type="number"
              id="snatchRM"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
        )}
      </div>

      {/* SNATCH COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchComplex')}>
          <h3>SNATCH COMPLEX</h3>
          <span>{sections.snatchComplex ? '▲' : '▼'}</span>
        </div>
        {sections.snatchComplex && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off (2" Pause At Knee Level)</li>
              <li>1 Squat Snatch</li>
              <li>1 Low Hang Squat Snatch</li>
              <li>1 Hang Squat Snatch</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Sets: {getRM(0.69)} - {getRM(0.72)} - {getRM(0.75)} - {getRM(0.78)}</p>
             <input
              type="number"
              id="snatchRM"
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
            <p>4 Sets - AMRAP 3 Min</p>
            <ul>
              <li>30 Wall Balls</li>
              <li>80 Double Unders</li>
              <li>16 Toes to Bar</li>
              <li>8 Bar Muscle Ups</li>
            </ul>
            <p>Rest 3 Min b/t Sets</p>
            <p><strong>Medball:</strong> 9/6 kg</p>
            <p><strong>Score Objetivo:</strong> 1 Round (Cada Set)</p>
            <p><strong>Estimulo & Objetivos:</strong></p>
            <ul>
              <li>Buscar velocidad en transiciones.</li>
              <li>Mantener los movimientos lo más unbroken posible.</li>
            </ul>
            <p><strong>Activación:</strong></p>
            <ul>
              <li>8 Wall Balls</li>
              <li>30 Double Unders</li>
              <li>6 Toes to Bar</li>
              <li>4 Bar Muscle Ups</li>
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
              <li>3 x 10/10 Double KB Front Rack Drop Lunges</li>
              <li>3 x 12 Sumo Stance Good Morning</li>
              <li>4 x 10 DB Suitcase Standing Calf Raises (lento y controlado)</li>
              <li>3 x 8-10 Glute Ham Raises</li>
            </ul>
            <p><strong>Descanso:</strong> 30" entre vueltas; libre entre movimientos.</p>
            <p><strong>Notas:</strong> Peso moderado/pesado. Si no se llega, mantener descanso y ajustar peso.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
