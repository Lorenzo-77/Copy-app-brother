import { useState } from 'react';
import '../../styles.css';

function Martes() {
  const [sections, setSections] = useState({});

  const toggleSection = (name) => {
    setSections(prev => ({ ...prev, [name]: !prev[name] }));
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
              <li>15"/15" Copenhagen Plank</li>
              <li>6/6 Single Leg Hip Bridge</li>
              <li>6/6 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats (2" Pause At Bottom)</li>
              <li>10 Hanging Hip Touches</li>
            </ul>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('skill')}>
          <h3>SKILL PRACTICE</h3>
          <span>{sections.skill ? '▲' : '▼'}</span>
        </div>
        {sections.skill && (
          <div className="section-content">
            <p>10 Min Handstand Walk O-Course Practice</p>
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
            <p>AMRAP 4 Min</p>
            <ul>
              <li>100 DoubleUnders</li>
              <li>20/15 Cal Row</li>
              <li>35 Toes to Bar</li>
              <li>Max Handstand Walk Segments</li>
            </ul>
            <p>REST 4 Min</p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>100 DoubleUnders</li>
              <li>20/15 Cal Row</li>
              <li>25 Chest to Bar Pull Ups</li>
              <li>Max Handstand Walk Segments</li>
            </ul>
            <p>REST 4 Min</p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>100 DoubleUnders</li>
              <li>20/15 Cal Row</li>
              <li>15 Bar Muscle Ups</li>
              <li>Max Handstand Walk Segments</li>
            </ul>
            <p><strong>Handstand Walk:</strong> 5 m Unbroken Segments</p>
            <p><strong>Score Objetivo:</strong> 2+ Handstand Walk Segments (Cada Set)</p>
            <p><strong>Estimulo & Objetivos:</strong></p>
            <ul>
              <li>Foco en sets largos de movimientos gimnásticos con pulsaciones altas.</li>
              <li>Minimizar tiempo en cortes y transiciones.</li>
            </ul>
            <p><strong>Reemplazos:</strong></p>
            <ul>
              <li>No Row: 20 Sumo Deadlift High Pull (35/25 kg)</li>
            </ul>
            <p><strong>Activación:</strong></p>
            <ul>
              <li>30 DoubleUnders</li>
              <li>10/7 Cal Row</li>
              <li>5 Toes to Bar + 4 Chest to Bar Pull Ups + 3 Bar Muscle Ups</li>
              <li>1 Handstand Walk Segment</li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>3 x 10 Dumbbell PullOvers</li>
              <li>3 x 10/10 One Arm Tripod Row</li>
              <li>3 x 15 Shoulder Lateral Raises</li>
              <li>3 x 50 m Double Dumbbell Front Rack Carry</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
            <p><strong>*</strong>Completar las 3 vueltas de un movimiento, luego pasar al siguiente.</p>
            <p><strong>**</strong>Peso moderado/pesado; si no se llega, ajustar el peso, no el descanso.</p>
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
            <p>1600 m Run @Easy Pace</p>
            <p>Rest 2 Min</p>
            <p>5 Rounds</p>
            <ul>
              <li>300 m @Hard Pace</li>
              <li>Rest 1:30 b/t</li>
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
