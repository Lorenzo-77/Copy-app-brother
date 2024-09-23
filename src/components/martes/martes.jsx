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
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>10/10 Banded Side Steps</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>10 Bootstraps</li>
              <li>10 Squat Press Out</li>
              <li>8 Yoga Push Ups</li>

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
                <ul >
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
{/* HANDSTAND PUSH UP DEVELOPMENT */}
<div className="section-block">
  <div className="section-header" onClick={() => toggleSection(setIsHSPUDevOpen)}>
    <h3>HANDSTAND PUSH UP DEVELOPMENT</h3>
    <span>{isHSPUDevOpen ? '▲' : '▼'}</span>
  </div>
  {isHSPUDevOpen && (
    <div className="section-content">
      <p>Elegir la opción de acuerdo al resultado del TEST de Chest-to-Wall Handstand Push Ups. // Choose the option according to your Chest-to-Wall Handstand Push Ups Test</p>

      <h4>1) Test Sub 3 Min</h4>
      <p>Every 4 Min x 12 Min (3 Sets)</p>
      <ul>
        <li>15 Wall Balls</li>
        <li>15 Strict Handstand Push Ups</li>
        <li>15 m Handstand Walk</li>
      </ul>
      <p>Medball - 9/6 kg</p>
      <p>Handstand Walk - 7,5 m Segment (1,5 m Unbroken Check Points)</p>

      <p>Then</p>
      <p>3 x 12 Seated Dumbbell Strict Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p>Then</p>
      <p>3 x 10 Tate Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
      <p>All sets @Moderate Weight</p>

      <hr />

      <h4>2) Test entre 3 y 5 Min</h4>
      <p>3 Sets</p>
      <ul>
        <li>9 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest As Little As Possible</li>
        <li>7 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest As Little As Possible</li>
        <li>5 Unbroken Chest-to-Wall Handstand Push Ups</li>
      </ul>
      <p>Rest 2 Min b/t Sets</p>

      <p>Then</p>
      <p>3 x 12 Seated Dumbbell Strict Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p>Then</p>
      <p>3 x 10 Tate Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
      <p>All sets @Moderate Weight</p>

      <hr />

      <h4>3) Test entre 5 y 8 Min</h4>
      <p>3 Sets</p>
      <ul>
        <li>7 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest As Little As Possible</li>
        <li>5 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest As Little As Possible</li>
        <li>3 Unbroken Chest-to-Wall Handstand Push Ups</li>
      </ul>
      <p>Rest 2 Min b/t Sets</p>

      <p>Then</p>
      <p>3 x 12 Seated Dumbbell Strict Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p>Then</p>
      <p>3 x 10 Tate Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
      <p>All sets @Moderate Weight</p>

      <hr />

      <h4>4) Test arriba de 8 Min</h4>
      <p>2 Sets</p>
      <p>3 Rounds</p>
      <ul>
        <li>23 Unbroken Pike Strict Handstand Push Ups</li>
      </ul>
      <p>Rest 30" b/t Rounds</p>

      <p>Rest 2 Min b/t Sets</p>

      <p>Then</p>
      <p>3 x 12 Seated Dumbbell Strict Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p>Then</p>
      <p>3 x 10 Tate Press</p>
      <p>Rest 30" b/t Rounds</p>

      <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
      <p>All sets @Moderate Weight</p>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>1000/800 m Bike Erg</li>
              <li>10 Devil Press</li>
              <li>65 Double Unders</li>
              <li>15 m Double Kettlebell Front Rack Walking Lunges</li>
            </ul>
            <ul>
              <li>Lunges - 7,5 m Unbroken Segments</li>
              <li>Dumbbells - 2 x 22,5/15 kg</li>
            </ul>
            <p>SCORE OBJETIVO 22-28 Min</p>
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
        <li>3 Rounds</li>
        <li>10/10 One Arm Upright Row</li>
        <li>10/10 Elbow On Knee Dumbbell External Rotation</li>
        <li>Rest 1 Min b/t Rounds</li>
      </ul>
      <ul>
        <li>Then</li>
        <li>3 Rounds</li>
        <li>40 m One Arm Overhead Carry (Each Arm)</li>
        <li>40 m One Arm Farmers Carry (Each Arm)</li>
        <li>Rest 1 Min b/t Rounds</li>
      </ul>
      <p>All Sets @Moderate Weight</p>
    </div>
  )}
</div>

    </div>
  );
}

export default About;
