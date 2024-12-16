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
    set74: '',
  });

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculated = {
        set74: (rm * 0.74).toFixed(2),
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        set74: '',
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
              <li>10 Russian KB Swings</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
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
              All Sets @74%: {calculatedWeights.set74 ? `${calculatedWeights.set74} kg` : '74%'}
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
            <p>15/12 Cal Assault Bike</p>
            <p>12 Power Clean & Jerks</p>
            <p>9/8 Ring Muscle Ups</p>

            <p>Rest 1 Min</p>

            <p>15/12 Cal Assault Bike</p>
            <p>9 Power Clean & Jerks</p>
            <p>7/6 Ring Muscle Ups</p>

            <p>Rest 1 Min</p>

            <p>15/12 Cal Assault Bike</p>
            <p>6 Power Clean & Jerks</p>
            <p>5/4 Ring Muscle Ups</p>

            <p>Rest 1 Min</p>

            <p>15/12 Cal Assault Bike</p>
            <p>3 Power Clean & Jerks</p>
            <p>3/2 Ring Muscle Ups</p>

            <p>Barbell - 60/42.5 kg</p>

            <p>Replacements:</p>
            <ul>
              <li>No Assault Bike: 10 Shuttle Runs (7.5 m Segment; 1 rep = 15 m)</li>
            </ul>
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
            <p>4 Rounds</p>
            <p>250 m @02:26/500 m</p>
            <p>250 m @Recovery Pace</p>
            <p>No Rest b/t Rounds</p>

            <p>Rest 5 Min</p>

            <p>4 Rounds</p>
            <p>250 m @02:26/500 m</p>
            <p>250 m @Recovery Pace</p>
            <p>No Rest b/t Rounds</p>
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
              <li>3 x 15 Close Grip Incline Dumbbell Bench Press</li>
              <li>4 x 8 Pendlay Rows</li>
              <li>3 x 12 Double Dumbbell Triceps Kickback</li>
              <li>3 x 10 Standing Wall DB Bicep Curls</li>
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
