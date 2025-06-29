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
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : '0kg';
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
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
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
            <p>AMRAP 8 Min</p>
            <ul>
              <li>3 Parallette Handstand Push Ups</li>
              <li>6 Bar Muscle Ups</li>
              <li>36 Crossovers</li>
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
            <p>
              Build to 2 Reps @ <span className="highlight-weight">{getRM(0.84)}</span>
            </p>
            <p>
              Then 3 Sets x 6 Back Squats @ <span className="highlight-weight">{getRM(0.71)}</span>
            </p>
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
            <p>For Time</p>
            <ul>
              <li>21-18-15-12-9</li>
              <li>Toes to Bar</li>
              <li>Thrusters</li>
              <li>Bar Facing Burpees</li>
            </ul>
            <p>Barbell - 43/30 kg</p>
            <p><strong>Score Objetivo:</strong> 14-22 Min</p>
            <p><strong>Estimulo:</strong> Ritmo fuerte y constante en Burpees; cortes breves en Toes to Bar y Thrusters</p>
            <h4>Activación</h4>
            <ul>
              <li>2 Rounds: 3 Toes to Bar, 3 Thrusters, 3 Bar Facing Burpees</li>
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
              <li>3 x 15 Belt Squats</li>
              <li>3 x 10 Weighted Single Leg GHD Hip Extensions</li>
              <li>3 x 12/12 Patrick Step (Level 1)</li>
              <li>3 x 10/10 Single Leg Banded Hamstring Curl</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
            <p>*Completar las 3 vueltas de un movimiento antes de pasar al siguiente</p>
            <p>**Peso Moderado/pesado; ajustar peso si es necesario</p>
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
            <p>3 Min @Easy Pace</p>
            <p>Then</p>
            <ul>
              <li>30" @Moderate</li>
              <li>30" @Easy</li>
              <li>30" @Hard</li>
              <li>30" @Easy</li>
            </ul>
            <h4>Workout</h4>
            <p>5 Sets</p>
            <ul>
              <li>500 m @Moderate Pace</li>
              <li>100 m Recovery Jog</li>
            </ul>
            <p>No added rest between reps/sets</p>
            <p>Rest 3-5 Min</p>
            <p>4 Sets</p>
            <ul>
              <li>150 m Sprint @92-98% effort</li>
              <li>150 m Walk</li>
            </ul>
            <p>Cooldown: 5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
