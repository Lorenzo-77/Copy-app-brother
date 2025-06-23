import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [sections, setSections] = useState({});
  const [oneRM, setOneRM] = useState('');
  const [weights, setWeights] = useState({});

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRMChange = (e) => {
    const value = e.target.value;
    setOneRM(value);
    if (value) {
      const rm = parseFloat(value);
      setWeights({
        bs68: (rm * 0.68).toFixed(0),
        bs80: (rm * 0.80).toFixed(0),
      });
    } else {
      setWeights({});
    }
  };

  return (
    <div className="container">
      <h1>VIERNES</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <ul>
              <li>10/10 Copenhagen Raise</li>
              <li>10/10 Single Leg Kettlebell Hip Thrust</li>
              <li>10 Russian KB Swings</li>
              <li>10 Goblet Squats</li>
              <li>10 Yoga Push Ups</li>
              <li>10" Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* HANDSTAND WALK CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('hwalk')}>
          <h3>HANDSTAND WALK CONDITIONING</h3>
          <span>{sections.hwalk ? '▲' : '▼'}</span>
        </div>
        {sections.hwalk && (
          <div className="section-content">
            <p>3 Rounds For Time</p>
            <ul>
              <li>15/12 Cal Ski Erg</li>
              <li>15 m Handstand Walk (1 Pirouette Every 7.5 m)</li>
            </ul>
            <p><strong>SCORE OBJETIVO:</strong> 4–8 Min</p>
            <p><strong>ESTIMULO:</strong> Gimnásticos a alta intensidad sin llegar al fallo.</p>
            <p><strong>REEMPLAZO:</strong> No Ski Erg: 12 Burpee to Target</p>
          </div>
        )}
      </div>

      {/* BACK SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('backsquat')}>
          <h3>BACK SQUAT</h3>
          <span>{sections.backsquat ? '▲' : '▼'}</span>
        </div>
        {sections.backsquat && (
          <div className="section-content">
            <p>Build to 2 Reps @80%</p>
            <p>Then 3 Sets of 6 Reps @68%</p>
            <p><strong>Peso objetivo:</strong> {weights.bs68 || 0}kg x6 - {weights.bs80 || 0}kg x2</p>
            <label>Ingresar 1RM (kg):</label>
            <input
              type="number"
              value={oneRM}
              onChange={handleRMChange}
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
            <p>For Time - 6-9-12-9-6</p>
            <ul>
              <li>Lateral Burpees Over the Bar</li>
              <li>Front Squats</li>
              <li>Chest to Bar Pull Ups</li>
            </ul>
            <p><strong>Barbell:</strong> 75/50 kg</p>
            <p><strong>Objetivo:</strong> 4–9 Min (Sprint)</p>
            <p><strong>ACTIVACIÓN:</strong></p>
            <ul>
              <li>4-3 Lateral Burpees Over the Bar</li>
              <li>4-3 Front Squats</li>
              <li>4-3 Chest to Bar Pull Ups</li>
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
              <li>3 x 12 Belt Squats</li>
              <li>3 x 8 Weighted Single Leg GHD Hip Extensions</li>
              <li>3 x 10/10 Patrick Step</li>
              <li>3 x 8/8 Single Leg Banded Hamstring Curl</li>
            </ul>
            <p>30" Rest entre sets. Peso moderado/pesado.</p>
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
            <p>3 Min Run @Easy</p>
            <p>400 m Run @Moderate</p>
            <p>2 Rounds: 100 m @Moderate, 100 m @Fast</p>
            <p>2 Rounds: 100 m @Easy, 50 m Sprint (Not Max)</p>
            <h4>Workout</h4>
            <p>100m → 200m (de 10 en 10 m)</p>
            <p>Full Recovery entre repeticiones</p>
            <h4>Cooldown</h4>
            <p>5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
