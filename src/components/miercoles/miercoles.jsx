import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isOHSOpen, setIsOHSOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isRecoveryMidlineOpen, setIsRecoveryMidlineOpen] = useState(false);

  const [oneRepMax, setOneRepMax] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    set71: '',
  });

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculated = {
        set71: (rm * 0.71).toFixed(2),
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        set71: '',
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
              <li>8 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>5/5 One Arm Muscle Snatch</li>
              <li>6/6 One Arm Overhead Squats (2" Pause At Bottom)</li>
              <li>10 Kip Swings On Bar</li>
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
              <li>1 Behind the Neck Snatch Grip Push Press</li>
              <li>2 Pausing Snatch Balance (2" Pause At Bottom)</li>
            </ul>
            <p>
              All Sets @71%: {calculatedWeights.set71 ? `${calculatedWeights.set71} kg` : '71%'}
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
            <p>For Total Time</p>
            <p>3 Rounds</p>
            <ul>
              <li>15 Chest to Bar Pull Ups</li>
              <li>18 Alternating Dumbbell Snatches (22.5/15 kg)</li>
              <li>12 Box Jump Overs (60/50 cm; Step Down)</li>
            </ul>
            <p>Rest 2 Min</p>
            <p>3 Rounds</p>
            <ul>
              <li>3 Rope Climbs</li>
              <li>12 Alternating Dumbbell Snatches (32.5/22.5 kg)</li>
              <li>8 Box Jump Overs (76/60 cm; Step Down)</li>
            </ul>
            <p>Replacements:</p>
            <ul>
              <li>No 32.5/22.5 kg Dumbbell: 18 Reps w/2 x 22.5/15 kg</li>
            </ul>
            <p>SKILL PRACTICE + CONDITIONING</p>
            <p>OTM 6 Min</p>
            <ul>
              <li>Min 1: 15 m Double Dumbbell Front Rack Walking Lunges</li>
              <li>Min 2: 10-30 Double Under Crossovers</li>
            </ul>
            <p>Dumbbells - 2 x 22.5/15 kg</p>
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
            <p>5 Rounds</p>
            <p>300 m @02:30/500 m</p>
            <p>500 m @Recovery Pace</p>
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
              <li>3 x 15 Close Grip Dumbbell Bench Press</li>
              <li>4 x 8 Barbell Upright Row</li>
              <li>3 x 50/50 One Arm Banded Triceps Extensions</li>
              <li>3 x 50/50 One Arm Banded Biceps Curls</li>
            </ul>
            <p>
              30" Rest b/t Rounds; Rest As Needed b/t Movements
              <br />
              Peso Moderado/pesado; si no llega, modifique el peso, no el tiempo de descanso.
            </p>
          </div>
        )}
      </div>

      {/* RECOVERY / MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsRecoveryMidlineOpen)}
          aria-expanded={isRecoveryMidlineOpen}
          aria-controls="recovery-midline-content"
        >
          <h3>RECOVERY/MIDLINE</h3>
          <span>{isRecoveryMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isRecoveryMidlineOpen && (
          <div className="section-content" id="recovery-midline-content">
            <p>3 Rounds For Quality</p>
            <ul>
              <li>15 Pike Ups</li>
              <li>15 Straddle Ups</li>
              <li>20" Bridge Hold</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
