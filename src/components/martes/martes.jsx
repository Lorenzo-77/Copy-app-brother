import { useState } from 'react';
import '../../styles.css';

function About() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isFrontSquatOpen, setIsFrontSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isHSPUDevOpen, setIsHSPUDevOpen] = useState(false); // Para HANDSTAND PUSH UP DEVELOPMENT
  const [oneRepMax, setOneRepMax] = useState(''); 
  const [calculatedWeights, setCalculatedWeights] = useState({
    set83: '',
    set65: '',
    set68: '',
    set71: ''
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set83: (rm * 0.83).toFixed(2),  // Para los 3 reps principales
        set65: (rm * 0.65).toFixed(2),
        set68: (rm * 0.68).toFixed(2),
        set71: (rm * 0.71).toFixed(2)
      };
      setCalculatedWeights(calculatedWeights);
    }
  };

  return (
    <div className="container">
      <h1>MARTES</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Banded Side Steps</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>10 Bootstraps</li>
              <li>10 Squat Press Out</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Bottom Ring Support Hold + 10" Top Of Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* FRONT SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsFrontSquatOpen)}>
          <h3>FRONT SQUAT</h3>
          <span>{isFrontSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isFrontSquatOpen && (
          <div className="section-content">
            <p>Build to 3 Reps @<strong>{calculatedWeights.set83 || '83%'}</strong></p>
            <p>Introduce tu 1RM para Front Squat:</p>
            <input 
              type="number" 
              value={oneRepMax} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
            {oneRepMax && (
              <div>
                <p>3 Sets con los siguientes pesos:</p>
                <ul className="set-list">
                  <li>6 Front Squats {calculatedWeights.set65} kg (65%)</li>
                  <li>6 Front Squats {calculatedWeights.set68} kg (68%)</li>
                  <li>6 Front Squats {calculatedWeights.set71} kg (71%)</li>
                </ul>
              </div>
            )}
            <ul>
              <li>Rest 60-90" entre sets</li>
            </ul>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>3 Sets - AMRAP 4 Min</p>
            <ul>
              <li>40 Wall Balls</li>
              <li>10/7 Ring Muscle Ups</li>
              <li>2 Handstand Walk Segments</li>
              <li>30/21 Cal Row</li>
            </ul>
            <p>Rest 4 Min entre sets</p>
          </div>
        )}
      </div>

      {/* HANDSTAND PUSH UP DEVELOPMENT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsHSPUDevOpen)}>
          <h3>HANDSTAND PUSH UP DEVELOPMENT</h3>
          <span>{isHSPUDevOpen ? '▲' : '▼'}</span>
        </div>
        {isHSPUDevOpen && (
          <div className="section-content">
            <p>Elegir la opción según el resultado del TEST de Chest-to-Wall Handstand Push Ups.</p>
            <h4>1) Test Sub 3 Min</h4>
            <p>4 Rounds For Total Time</p>
            <ul>
              <li>15 GHD Sit Ups</li>
              <li>15 Double Dumbbell Farmers Walking Lunges</li>
              <li>15 Handstand Push Ups</li>
            </ul>
            <p>Rest 1 Min entre rondas</p>
            <p><strong>***Round 1 & 2:</strong> Chest-to-Wall Handstand Push Ups</p>
            <p><strong>***Round 3 & 4:</strong> Strict Handstand Push Ups</p>
            <ul>
              <li>Dumbbells - 2 x 22,5/15 kg</li>
              <li>Lunges - 7,5 m Unbroken Segments</li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <ul>
              <li>3 Rounds - 10/10 Three Point Dumbbell Row</li>
              <li>10/10 Elbow On Knee Banded External Rotation</li>
              <li>Rest 1 Min entre rondas</li>
            </ul>
            <ul>
              <li>3 Rounds - 30 m One Arm Overhead Carry (Each Arm)</li>
              <li>30 m One Arm Farmers Carry (Each Arm)</li>
              <li>Rest 1 Min entre rondas</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
