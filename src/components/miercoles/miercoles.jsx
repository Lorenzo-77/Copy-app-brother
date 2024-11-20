import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isOHSOpen, setIsOHSOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  const [oneRepMax, setOneRepMax] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set68: '',
  });

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculated = {
        set68: (rm * 0.68).toFixed(2),
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        set68: '',
      });
    }
  };

  return (
    <div className="container">
      <h1>Miércoles</h1>

      {/* WARM UP */}
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
              <li>10 Bootstraps</li>
              <li>10/10 Squat + Thoracic Extension Rotation</li>
              <li>5/5 One Arm Muscle Snatch</li>
              <li>5/5 One Arm KB Rack Squats</li>
              <li>5/5 One Arm Shoulder Press</li>
            </ul>
          </div>
        )}
      </div>

      {/* OVERHEAD SQUAT DEVELOPMENT */}
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
            <p>
              All Sets @68%: {calculatedWeights.set68 ? `${calculatedWeights.set68} kg` : '68%'}
            </p>
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

      {/* CONDITIONING */}
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
            <p>With a Running Clock</p>
            <p>On the 00:00</p>
            <ul>
              <li>21 Box Jump Overs (Step Down)</li>
              <li>15 Power Clean & Jerks (80/55 kg)</li>
              <li>9/6 Ring Muscle Ups</li>
            </ul>
            <p>On the 12:00</p>
            <ul>
              <li>21 Deficit Kipping Handstand Push Ups</li>
              <li>15 Power Snatches (70/47.5 kg)</li>
              <li>9/6 Ring Muscle Ups</li>
            </ul>
            <p>On the 24:00</p>
            <ul>
              <li>150 Double Unders</li>
              <li>15 Thrusters (60/42.5 kg)</li>
              <li>9/6 Ring Muscle Ups</li>
            </ul>
            <p>
              Box - 76/60 cm
              <br />
              Deficit - 15/10 cm
            </p>
            <h4>NOTAS</h4>
            <p>
              <strong>SCORE OBJETIVO:</strong> 4-8 Min (Cada parte)
            </p>
          </div>
        )}
      </div>

      {/* ROW CONDITIONING */}
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
            <p>4 Sets</p>
            <ul>
              <li>300 m @02:30/500 m</li>
              <li>300 m @Marathon Pace</li>
              <li>100 m SPRINT</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
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
            <ul>
              <li>3 x 15 Incline Dumbbell Bench Press</li>
              <li>4 x 8 Barbell Prone Row</li>
              <li>3 x 12 Inverted Skull Crushers</li>
              <li>3 x 12 Barbell Preacher Curls</li>
            </ul>
            <p>
              30" Rest b/t Rounds; Rest As Needed b/t Movements
              <br />
              Peso Moderado/pesado; si no llega, modifique el peso, no el tiempo de descanso.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
