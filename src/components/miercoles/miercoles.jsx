import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isOHSOpen, setIsOHSOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isStaminaConditioningOpen, setIsStaminaConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRepMax, setOneRepMax] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set65: '',
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculated = {
        set65: (rm * 0.65).toFixed(2),
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        set65: '',
      });
    }
  };

  return (
    <div className="container">
      <h1>Miercoles</h1>

      {/* Sección WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content" id="warm-up-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>6 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>5/5 One Arm Muscle Snatch</li>
              <li>5/5 One Arm Thrusters</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección OVERHEAD SQUAT DEVELOPMENT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsOHSOpen)}
          aria-expanded={isOHSOpen}
          aria-controls="ohs-content"
        >
          <h3>OVERHEAD SQUAT DEVELOPMENT</h3>
          <span>{isOHSOpen ? '▲' : '▼'}</span>
        </div>
        {isOHSOpen && (
          <div className="section-content" id="ohs-content">
            <p>OTM 4 Min</p>
            <ul>
              <li>3 Behind the Neck Snatch Grip Push Press</li>
              <li>3 Overhead Squats</li>
            </ul>
            <p>All Sets @65%: {calculatedWeights.set65 ? `${calculatedWeights.set65} kg` : '65%'}</p>
            <p>Introduce tu 1RM para Overhead Squat:</p>
            <input 
              type="number" 
              value={oneRepMax} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
          </div>
        )}
      </div>

      {/* Sección CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsConditioningOpen)}
          aria-expanded={isConditioningOpen}
          aria-controls="conditioning-content"
        >
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content" id="conditioning-content">
            <p>3 Rounds For Time</p>
            <ul>
              <li>50 Double Unders</li>
              <li>5 Power Snatches</li>
            </ul>
            <p>REST 3 Min</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>50 Double Unders</li>
              <li>5 Squat Snatches</li>
            </ul>
            <p>Barbell - 70/47.5 kg</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 4-6 Min (Cada parte)</p>
          </div>
        )}
      </div>

      {/* Sección STAMINA CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsStaminaConditioningOpen)}
          aria-expanded={isStaminaConditioningOpen}
          aria-controls="stamina-conditioning-content"
        >
          <h3>STAMINA CONDITIONING</h3>
          <span>{isStaminaConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isStaminaConditioningOpen && (
          <div className="section-content" id="stamina-conditioning-content">
            <p>For Total Time</p>
            <ul>
              <li>30 Double Dumbbell Bench Press</li>
              <li>Rest 1 Min</li>
              <li>45 m Handstand Walk</li>
            </ul>
            <p>Dumbbells - 2 x 32.5/22.5 kg</p>
            <p>Handstand Walk - 7.5 m Unbroken Segments</p>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsRowConditioningOpen)}
          aria-expanded={isRowConditioningOpen}
          aria-controls="row-conditioning-content"
        >
          <h3>ROW CONDITIONING</h3>
          <span>{isRowConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isRowConditioningOpen && (
          <div className="section-content" id="row-conditioning-content">
            <p>1500 m @02:28/500 m</p>
            <p>Rest 2 minutes</p>
            <p>3 Rounds</p>
            <ul>
              <li>400 m @02:30/500 m</li>
              <li>500 m @Recovery Pace</li>
              <li>300 m @02:27/500 m</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsAccessoryOpen)}
          aria-expanded={isAccessoryOpen}
          aria-controls="accessory-content"
        >
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content" id="accessory-content">
            <p>3 x 15 Dumbbell Bench Press</p>
            <p>4 x 8 Barbell Bent Over Row</p>
            <p>3 x 12 Rolling Dumbbell Triceps Extensions</p>
            <p>3 x 10 Hammer Curls</p>
            <p>30" Rest b/t Rounds; Rest As Needed b/t Movements</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
