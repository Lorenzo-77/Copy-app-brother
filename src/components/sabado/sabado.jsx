import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isSkillOpen, setIsSkillOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRmDeadlift, setOneRmDeadlift] = useState('');

  const toggleSection = (setState) => setState(prev => !prev);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    if (value >= 0) setOneRmDeadlift(value);
  };

  const calcWeight = (percent) => {
    return oneRmDeadlift ? Math.round((parseFloat(oneRmDeadlift) * percent) / 100) + 'kg' : '-';
  };

  return (
    <div className="container">
      <h1>SÁBADO</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>WARM UP</h3><span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>8 Inchworm + Push Ups</li>
              <li>10 Alternating Cossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>6/6 One Arm Suitcase Deadlift</li>
              <li>6/6 One Arm Shoulder Press</li>
              <li>10" Wall Facing Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* DEADLIFT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsDeadliftOpen)}>
          <h3>DEADLIFT</h3><span>{isDeadliftOpen ? '▲' : '▼'}</span>
        </div>
        {isDeadliftOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <p>5 Deadlift @ {calcWeight(60)}</p>
            <p>Rest 60-90" b/t</p>
            <label htmlFor="rmDeadlift">Ingresar 1RM Deadlift (kg):</label>
            <input
              type="number"
              id="rmDeadlift"
              value={oneRmDeadlift}
              onChange={handle1RMChange}
              placeholder="Ej: 130"
            />
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3><span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p><strong>Parte 1</strong></p>
            <p>4 Rounds For Time</p>
            <ul>
              <li>21/15 Cal Assault Bike</li>
              <li>9 Power Clean & Jerks</li>
            </ul>
            <p><strong>REST 5 Min</strong></p>
            <p><strong>Parte 2</strong></p>
            <p>4 Rounds For Time</p>
            <ul>
              <li>9 Shuttle Runs</li>
              <li>9 Double Dumbbell Thrusters</li>
            </ul>
            <p>Barbell - 61/43 kg</p>
            <p>Dumbbells - 2 x 22,5/15 kg</p>
            <h4>ACTIVACIÓN</h4>
            <ul>
              <li>7/5 Cal Assault Bike</li>
              <li>3 Power Clean & Jerks</li>
              <li>3 Shuttle Runs</li>
              <li>4 Double Dumbbell Thrusters</li>
            </ul>
          </div>
        )}
      </div>

      {/* SKILL PRACTICE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSkillOpen)}>
          <h3>SKILL PRACTICE</h3><span>{isSkillOpen ? '▲' : '▼'}</span>
        </div>
        {isSkillOpen && (
          <div className="section-content">
            <p>OTM 8 Min</p>
            <ul>
              <li>Min 1: 15 GHD Sit Ups</li>
              <li>Min 2: 1-2 Handstand Walk Pirouette</li>
            </ul>
            <p>Pirouette - 1 Rep en 1x1 m + 2 m Handstand Walk</p>
            <p><strong>NOTAS:</strong> Trabajo por calidad, foco en práctica del Handstand Walk Pirouette tras estímulo de zona media.</p>
            <p><strong>REEMPLAZOS GHD:</strong></p>
            <ul>
              <li><a href="https://youtu.be/eWDk5jxAwCE" target="_blank" rel="noreferrer">Opción 1</a></li>
              <li><a href="https://youtu.be/O3huiwVg4UE" target="_blank" rel="noreferrer">Opción 2</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3><span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>30 m Right Arm Farmers, Left Arm Overhead Carry</li>
              <li>30 m Left Arm Farmers, Right Arm Overhead Carry</li>
              <li>30 m Double Kettlebell Front Rack Carry</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
