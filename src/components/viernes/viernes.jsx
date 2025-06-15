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
        set63: (rm * 0.63).toFixed(0),
        set66: (rm * 0.66).toFixed(0),
        set69: (rm * 0.69).toFixed(0),
        set72: (rm * 0.72).toFixed(0)
      });
    } else {
      setWeights({});
    }
  };

  return (
    <div className="container">
      <h1>VIERNES</h1>

      {/* Warm Up */}
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
              <li>10 Yoga Push Ups</li>
              <li>10 Russian KB Swings</li>
              <li>10 Goblet Squats</li>
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Gymnastics + Weightlifting */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('gymnastics')}>
          <h3>GYMNASTICS + WEIGHTLIFTING</h3>
          <span>{sections.gymnastics ? '▲' : '▼'}</span>
        </div>
        {sections.gymnastics && (
          <div className="section-content">
            <p>OTM 8 Min</p>
            <p><strong>Min 1:</strong></p>
            <ul>
              <li>1 Power Clean</li>
              <li>1 Hang Squat Clean</li>
              <li>1 Split Jerk</li>
            </ul>
            <p><strong>Min 2:</strong></p>
            <ul>
              <li>4/3 Ring Muscle Ups</li>
              <li>4 Kipping Ring Dips</li>
            </ul>
                        <p>Sets: {weights.set63 || 0}kg - {weights.set66 || 0}kg - {weights.set69 || 0}kg - {weights.set72 || 0}kg</p>
            <label>Ingresar 1RM (kg):</label>
            <input
              type="number"
              value={oneRM}
              onChange={handleRMChange}
              placeholder="1RM (Full)"
            />

          </div>
        )}
      </div>

      {/* Conditioning */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('conditioning')}>
          <h3>CONDITIONING</h3>
          <span>{sections.conditioning ? '▲' : '▼'}</span>
        </div>
        {sections.conditioning && (
          <div className="section-content">
            <p>Every 4 Min x 16 Min (4 Sets)</p>
            <p>For Time</p>
            <ul>
              <li>9/6 Cal Ski Erg</li>
              <li>3 Rope Climbs</li>
              <li>9 Burpee Box Get Overs</li>
            </ul>
            <p>*Sets 2 & 4 in Reverse Order</p>
            <p>Rope - 4.57 m | Box - 120/100 cm</p>
            <p><strong>SCORE OBJETIVO:</strong> 2-2:30 Min por set</p>
            <p><strong>ESTIMULO:</strong> Velocidad de ejecución y transiciones rápidas</p>
            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>5/4 Cal Ski Erg</li>
              <li>1-2 Rope Climbs</li>
              <li>4 Burpee Box Get Overs</li>
            </ul>
          </div>
        )}
      </div>

      {/* Accessory & Midline */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>3 x 10/10 One Arm Upright Row</li>
              <li>3 x 10/10 One Arm Seated Shoulder Press</li>
              <li>3 x 8/8 Double Dumbbell Box Step Ups</li>
              <li>3 x 8/8 Single Leg Good Morning</li>
            </ul>
            <p>30" Rest entre sets. Peso moderado/pesado. Ajustar si no llegás sin modificar el descanso.</p>
          </div>
        )}
      </div>

      {/* Pro Runner Test */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('prorunner')}>
          <h3>SESSION 2: PRO RUNNER TEST</h3>
          <span>{sections.prorunner ? '▲' : '▼'}</span>
        </div>
        {sections.prorunner && (
          <div className="section-content">
            <h4>Warm Up</h4>
            <p>3 Min Run @Easy Pace</p>
            <p>Then 3 Rounds:</p>
            <ul>
              <li>30" @Moderate Pace</li>
              <li>30" @Easy Pace</li>
            </ul>
            <h4>Workout</h4>
            <p>For Time: 5000 m Run</p>
            <h4>Cooldown</h4>
            <p>5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
