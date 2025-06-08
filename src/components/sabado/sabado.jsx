import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [isGymnasticsOpen, setIsGymnasticsOpen] = useState(false);
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
            <label htmlFor="rmDeadlift">Ingresar 1RM Deadlift (kg):</label>
            <input
              type="number"
              id="rmDeadlift"
              value={oneRmDeadlift}
              onChange={handle1RMChange}
              placeholder="Ej: 130"
            />
            <p>Work Up To 88% x 2 Reps ({calcWeight(88)})</p>
            <p>Then 4 x 2 Deadlift @73% ({calcWeight(73)}) - 1 Min Rest</p>
            <p>*Todas las reps son singles. No touch and go.</p>
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
            <p><strong>Parte 1 - On the 00:00</strong></p>
            <ul>
              <li>45 Deadlift @102/70 kg</li>
              <li>45 Deficit Kipping Handstand Push Ups</li>
            </ul>
            <p><strong>Parte 2 - On the 10:00</strong></p>
            <ul>
              <li>45/30 Cal Assault Bike</li>
              <li>45 m Double Dumbbell Walking Lunges (Farmers, Front Rack, Overhead)</li>
            </ul>
            <p><strong>Notas:</strong> Objetivo: 4-7 min por parte</p>
          </div>
        )}
      </div>


      {/* GYMNASTICS ENDURANCE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsGymnasticsOpen)}>
          <h3>GYMNASTICS ENDURANCE</h3><span>{isGymnasticsOpen ? '▲' : '▼'}</span>
        </div>
        {isGymnasticsOpen && (
          <div className="section-content">
            <p>1) Legless Rope Climb Complex x 6 cada 30"</p>
            <p>*3-4 Pulls + 1-2 Kip Touch</p>
            <p>REST 2 Min</p>
            <p>OTM 6 Min</p>
            <ul>
              <li>Min 1: 8 Strict Pull Ups</li>
              <li>Min 2: 12 Perfect Push Ups</li>
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
            <p>4 x 12 Seated Dumbbell Strict Press</p>
            <p>3 x 12/12 One Arm Upright Row</p>
            <p>4 x 8 Dumbbell PullOvers</p>
            <p>3 x 10 Shoulder Lateral Raises</p>
            <p>30" Rest entre rondas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
