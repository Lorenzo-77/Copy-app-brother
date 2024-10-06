import { useState } from 'react';
import '../../styles.css';

function Miercoles() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isFrontSquatOpen, setIsFrontSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isRowConditioningOpen, setIsRowConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const [oneRepMaxFrontSquat, setOneRepMaxFrontSquat] = useState('');
  const [calculatedWeightsFrontSquat, setCalculatedWeightsFrontSquat] = useState({
    set58: '',
    set62: '',
    set66: '',
    set70: ''
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMaxFrontSquat(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set58: (rm * 0.58).toFixed(2),
        set62: (rm * 0.62).toFixed(2),
        set66: (rm * 0.66).toFixed(2),
        set70: (rm * 0.70).toFixed(2)
      };
      setCalculatedWeightsFrontSquat(calculatedWeights);
    } else {
      setCalculatedWeightsFrontSquat({
        set58: '',
        set62: '',
        set66: '',
        set70: ''
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
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>10 Bootstraps</li>
              <li>10 Squat Press Out</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Bottom Ring Support Hold + 10" Top Of Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección FRONT SQUAT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsFrontSquatOpen)}
          aria-expanded={isFrontSquatOpen}
          aria-controls="front-squat-content"
        >
          <h3>FRONT SQUAT</h3>
          <span>{isFrontSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isFrontSquatOpen && (
          <div className="section-content" id="front-squat-content">
            <p>OTM 8 Min</p>
            <ul>
              <li>1 Pause Front Squat (3" At Bottom)</li>
              <li>1 Front Squat</li>
            </ul>
            <p>Sets:</p>
            <ul>
              <li>Min 1-2: {calculatedWeightsFrontSquat.set58 ? `${calculatedWeightsFrontSquat.set58} kg (58%)` : '58%'}</li>
              <li>Min 3-4: {calculatedWeightsFrontSquat.set62 ? `${calculatedWeightsFrontSquat.set62} kg (62%)` : '62%'}</li>
              <li>Min 5-6: {calculatedWeightsFrontSquat.set66 ? `${calculatedWeightsFrontSquat.set66} kg (66%)` : '66%'}</li>
              <li>Min 7-8: {calculatedWeightsFrontSquat.set70 ? `${calculatedWeightsFrontSquat.set70} kg (70%)` : '70%'}</li>
            </ul>
            <p>Introduce tu 1RM para Front Squat:</p>
            <input 
              type="number" 
              value={oneRepMaxFrontSquat} 
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
            <p>3 Sets</p>
            <p>AMRAP 4 Min</p>
            <ul>
              <li>21 Toes to Bar</li>
              <li>15 m Handstand Walk</li>
              <li>9 Bar Muscle Ups</li>
              <li>15 m Dumbbell Walking Lunges*</li>
              <li>15 Burpee Box Jump Overs</li>
            </ul>
            <p>REST 4 Min b/t Sets</p>
            <ul>
              <li>*Round 1: Farmers</li>
              <li>*Round 2: Front Rack</li>
              <li>*Round 3: Overhead</li>
            </ul>
            <p>Dumbbells - 2 x 22,5/15 kg</p>
            <p>Lunges & Handstand Walk - 7,5 m Segments (1,5 m Unbroken Check Points)</p>
            <p>Box - 60/50 cm</p>
            <p>SCORE: 1 rep = 7,5 m Segment (Lunges & Handstand Walk)</p>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 1 Round</p>
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
            <p>10 Rounds</p>
            <ul>
              <li>250 m Row @02:30/500 m</li>
            </ul>
            <p>Rest 30" b/t Rounds</p>
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
            {/* Primera Parte de ACCESSORY */}
            <p>3 Sets</p>
            <ul>
              <li>30 m One Arm Farmers Carry (Cada brazo)</li>
              <li>30 m One Arm Overhead Carry (Cada brazo)</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>

            {/* Segunda Parte de ACCESSORY */}
            <p>Then</p>
            <p>8 Unbroken Rounds</p>
            <ul>
              <li>10" Bent Knee Hollow Body Hold</li>
              <li>10 Lemon Squeeze</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
          aria-controls="midline-content"
        >
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content" id="midline-content">
            <p>10 Min For Quality</p>
            <ul>
              <li>15" Hollow Body Flutter Kicks</li>
              <li>15" Side Star Plank (Each Side)</li>
              <li>15" Sorenson Hold</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Miercoles;
