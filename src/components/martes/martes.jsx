import { useState } from 'react';
import '../../styles.css';

function About() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isGymTestOpen, setIsGymTestOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);
  const [oneRepMax, setOneRepMax] = useState(''); 
  const [calculatedWeights, setCalculatedWeights] = useState([]);

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const percentages = [0.58, 0.62, 0.66, 0.70];
      const weights = percentages.map(percentage => (value * percentage).toFixed(2));
      setCalculatedWeights(weights);
    }
  };

  return (
    <div className="container">
      <h1>Martes</h1>

      {/* Sección WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>6/6 Goblet Lateral Box Step Ups</li>
              <li>10 Bootstraps</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección GYMNASTICS TEST */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsGymTestOpen)}>
          <h3>FRONT SQUAT</h3>
          <span>{isGymTestOpen ? '▲' : '▼'}</span>
        </div>
        {isGymTestOpen && (
          <div className="section-content">
            <p>Introduce tu 1RM para Front Squat:</p>
            <input 
              type="number" 
              value={oneRepMax} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
            {oneRepMax && (
              <div>
                <p>4 Sets con los siguientes pesos:</p>
                <ul className="set-list">
  <li>Set 1: {calculatedWeights[0]} kg (58%)</li>
  <li>Set 2: {calculatedWeights[1]} kg (62%)</li>
  <li>Set 3: {calculatedWeights[2]} kg (66%)</li>
  <li>Set 4: {calculatedWeights[3]} kg (70%)</li>
</ul>

              </div>
            )}
            <ul>
              <li>3 Tempo Front Squat</li>
              <li>Rest 60-90" b/t Sets</li>
              <li>TEMPO: 5" bajando, 3" abajo, subida rápida</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>4 Sets, Each For Time</p>
            <ul>
              <li>25/18 Cal Row</li>
              <li>100 Double Unders</li>
              <li>25 Rower Facing Burpees</li>
            </ul>
            <p>Rest 3 Min b/t Sets</p>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <ul>
              <li>8/8 Lateral Goblet Box Step Ups</li>
              <li>8/8 Kettlebell Single Leg Deadlift</li>
              <li>8/8 One Arm Shoulder Press</li>
              <li>8/8 One Arm Upright Row</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <ul>
              <li>2 x 10" Standing Straight Leg Hold</li>
              <li>10 Lemon Squeeze</li>
              <li>10" L Hang</li>
              <li>10 GHD Hip Extensions (2" Hold On Top)</li>
              <li>30" Samson Stretch (cada lado)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
