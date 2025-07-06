import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [sections, setSections] = useState({});
  const [oneRM, setOneRM] = useState('');

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getRM = (percent) => {
    const rm = parseFloat(oneRM);
    return oneRM
      ? <span className="highlight-weight">{(rm * percent).toFixed(0)}kg</span>
      : <span className="highlight-weight">0kg</span>;
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
              <li>5 Supinated Strict Pull Ups +10" Supinated Hang</li>
            </ul>
          </div>
        )}
      </div>

      {/* GYMNASTICS CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('gymnastics')}>
          <h3>GYMNASTICS CONDITIONING</h3>
          <span>{sections.gymnastics ? '▲' : '▼'}</span>
        </div>
        {sections.gymnastics && (
          <div className="section-content">
            <p>AMRAP 9 Min</p>
            <ul>
              <li>6 Deficit Kipping Handstand Push Ups (10/7 cm)</li>
              <li>9 Chest to Bar Pull Ups</li>
              <li>50 Double Unders</li>
            </ul>
            <p><strong>Score Objetivo:</strong> 4+ Rounds</p>
            <p><strong>Estimulo:</strong> Alta intensidad sin llegar al fallo</p>
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
            <label>Ingresar 1RM (kg):</label>
            <input
              type="number"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
            <p>Build to 3 Reps @ {getRM(0.88)}</p>
            <p>Then 3 Sets x 6 Back Squats @ {getRM(0.74)}</p>
            <p>Rest 60-90" b/t Sets</p>
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
            <p>AMRAP 15 Min</p>
            <ul>
              <li>10-20-30-40-… Wall Balls</li>
              <li>5-10-15-20-… Burpee Box Jump Overs</li>
            </ul>
            <p>Medball - 9/6 kg | Box - 60/50 cm</p>
            <p><strong>Estimulo:</strong> Ritmo fuerte y constante en Burpees; controlar cortes en Wall Balls</p>
            <h4>Activación</h4>
            <ul>
              <li>6 Wall Balls</li>
              <li>3 Burpee Box Jump Overs</li>
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
              <li>3 x 18 Belt Squats</li>
              <li>3 x 12 Weighted Single Leg GHD Hip Extensions</li>
              <li>3 x 10/10 Patrick Step (Level 2)</li>
              <li>3 x 12/12 Single Leg Banded Hamstring Curl</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
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
            <p>400 m Run @Easy To Moderate Pace</p>
            <p>Rest 1 Min</p>
            <p>100 m @Moderate</p>
            <p>100 m @Fast</p>
            <p>100 m Recovery Jog</p>
            <h4>Workout</h4>
            <p>3 Sets</p>
            <ul>
              <li>800 m @Moderate/Fast Pace</li>
              <li>90" Rest</li>
              <li>400 m @Moderate/Fast Pace</li>
              <li>Rest 60"</li>
            </ul>
            <p>Rest 3 Min</p>
            <p>3 Sets</p>
            <ul>
              <li>400 m @Faster Pace</li>
              <li>30" Rest</li>
              <li>200 m Recovery Jog</li>
            </ul>
            <p>Cooldown: 5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
