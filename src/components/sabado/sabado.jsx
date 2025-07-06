import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [sections, setSections] = useState({});
  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getRM = (percent) => {
    const rm = parseFloat(oneRmDeadlift);
    return oneRmDeadlift
      ? <span className="highlight-weight">{(rm * percent / 100).toFixed(0)}kg</span>
      : <span className="highlight-weight">0kg</span>;
  };

  return (
    <div className="container">
      <h1>SÁBADO</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>WARM UP</h3>
          <span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <ul>
              <li>8 Inchworm + Push Ups</li>
              <li>10 Alternating Cossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>6/6 One Arm Suitcase Deadlift</li>
              <li>6/6 One Arm Shoulder Press</li>
              <li>10" Supinated Hang</li>
            </ul>
          </div>
        )}
      </div>

      {/* DEADLIFT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('deadlift')}>
          <h3>DEADLIFT</h3>
          <span>{sections.deadlift ? '▲' : '▼'}</span>
        </div>
        {sections.deadlift && (
          <div className="section-content">
            <p>Work Up To a Heavy 1 Deadlift</p>
            <label>Ingresar 1RM Deadlift (kg):</label>
            <input
              type="number"
              value={oneRmDeadlift}
              onChange={(e) => setOneRmDeadlift(e.target.value)}
              placeholder="Ej: 130"
            />
            <p>Peso ejemplo 60%: {getRM(60)}</p>
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
            <p>With a Running Clock</p>
            <p>On The 00:00 - For Time</p>
            <ul>
              <li>12 Sandbag to Shoulder</li>
              <li>24/18 Cal Assault Bike</li>
              <li>36 m Handstand Walk</li>
            </ul>
            <p>On The 12:00 - For Time</p>
            <ul>
              <li>36 GHD Sit Ups</li>
              <li>24 Double Dumbbell Shoulder to Overhead</li>
              <li>8 Rope Climbs</li>
            </ul>
            <p>Sandbag - 70/45 kg | Dumbbells - 2 x 22,5/15 kg | Rope - 4,57 m</p>
            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>4 Sandbag to Shoulder</li>
              <li>10/7 Cal Assault Bike</li>
              <li>5 m Handstand Walk</li>
              <li>6 GHD Sit Ups</li>
              <li>4 Double DB Shoulder to Overhead</li>
              <li>2 Rope Climbs</li>
            </ul>
          </div>
        )}
      </div>

      {/* GYMNASTICS DEVELOPMENT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('gymnastics')}>
          <h3>GYMNASTICS DEVELOPMENT</h3>
          <span>{sections.gymnastics ? '▲' : '▼'}</span>
        </div>
        {sections.gymnastics && (
          <div className="section-content">
            <p>OTM 3 Min: 2-3 Legless Rope Climbs</p>
            <p>REST 2 Min</p>
            <p>AMRAP 8 Min (Weight Vest)</p>
            <ul>
              <li>6 Strict Pull Ups</li>
              <li>12 Perfect Push Ups</li>
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
              <li>4 x 10 Banded Barbell Bench Press</li>
              <li>4 x 8 Barbell Upright Row</li>
              <li>4 x 8 Incline DB PullOvers</li>
              <li>3 x 10 DB Front Raises</li>
            </ul>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
          </div>
        )}
      </div>

      {/* OPTIONAL ASSAULT BIKE CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('optionalbike')}>
          <h3>OPTIONAL: ASSAULT BIKE CONDITIONING</h3>
          <span>{sections.optionalbike ? '▲' : '▼'}</span>
        </div>
        {sections.optionalbike && (
          <div className="section-content">
            <p>3 Rounds</p>
            <ul>
              <li>30/21 Cal Assault Bike @Hard</li>
              <li>Rest 30"</li>
              <li>10/7 Cal Assault Bike @MAX Effort</li>
            </ul>
            <p>Rest 2 Min b/t Rounds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
