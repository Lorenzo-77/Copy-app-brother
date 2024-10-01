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
    set86: '',
    set68: '',
    set71: '',
    set74: ''
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set86: (rm * 0.86).toFixed(2),  // Para los 3 reps principales
        set68: (rm * 0.68).toFixed(2),
        set71: (rm * 0.71).toFixed(2),
        set74: (rm * 0.74).toFixed(2)
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
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>8/8 Kettlebell Single Leg Hip Thrust</li>
              <li>6/6 Goblet Lateral Box Step Ups</li>
              <li>8 Yoga Push Ups</li>
              <li>10 Russian KB Swings</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
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
            <p>Build to 3 Reps @<strong>{calculatedWeights.set86 || '86%'}</strong></p>
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
                <ul>
                  <li>6 Front Squats {calculatedWeights.set68} kg (68%)</li>
                  <li>6 Front Squats {calculatedWeights.set71} kg (71%)</li>
                  <li>6 Front Squats {calculatedWeights.set74} kg (74%)</li>
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
            <p>For Time</p>
            <ul>
              <li>40 Burpee Box Jump Overs</li>
              <li>40 Wall Balls</li>
              <li>40/30 Cal Row</li>
              <li>40 Wall Balls</li>
              <li>40/30 Cal Row</li>
              <li>40 Wall Balls</li>
              <li>40 Burpee Box Jump Overs</li>
            </ul>
            <ul>
              <li>Medball - 9/6 kg</li>
              <li>Box - 60/50 cm</li>
            </ul>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 15-22 Min</p>
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

            {/* Test Sub 3 Min */}
            <h4>1) Test Sub 3 Min</h4>
            <p>AMRAP 9 Min</p>
            <ul>
              <li>7 Chest-to-Wall Handstand Push Ups</li>
              <li>12 Alternating Pistols</li>
              <li>35 Double Unders</li>
            </ul>
            <p>Then</p>
            <p>3 x 15 Seated Dumbbell Strict Press</p>
            <p>Rest 30" b/t Rounds</p>
            <p>Then</p>
            <p>3 x 10 Barbell Skull Crushers</p>
            <p>Rest 30" b/t Rounds</p>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p>All sets @Moderate Weight</p>

            <hr />

            {/* Test entre 3 y 5 Min */}
            <h4>2) Test entre 3 y 5 Min</h4>
            <p>2 Sets</p>
            <ul>
              <li>3 Rounds</li>
              <li>13 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <p>3 x 15 Seated Dumbbell Strict Press</p>
            <p>Rest 30" b/t Rounds</p>
            <p>Then</p>
            <p>3 x 10 Barbell Skull Crushers</p>
            <p>Rest 30" b/t Rounds</p>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p>All sets @Moderate Weight</p>

            <hr />

            {/* Test entre 5 y 8 Min */}
            <h4>3) Test entre 5 y 8 Min</h4>
            <p>2 Sets</p>
            <ul>
              <li>3 Rounds</li>
              <li>11 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <p>3 x 15 Seated Dumbbell Strict Press</p>
            <p>Rest 30" b/t Rounds</p>
            <p>Then</p>
            <p>3 x 10 Barbell Skull Crushers</p>
            <p>Rest 30" b/t Rounds</p>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p>All sets @Moderate Weight</p>

            <hr />

            {/* Test arriba de 8 Min */}
            <h4>4) Test arriba de 8 Min</h4>
            <p>3 Sets</p>
            <ul>
              <li>15 Unbroken Chest-to-Wall Handstand Push Ups</li>
            </ul>
            <p>Rest 1 Min b/t</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>25 Unbroken Pike Strict Handstand Push Ups</li>
            </ul>
            <p>Rest 30" b/t Rounds</p>
            <p>Then</p>
            <p>3 x 15 Seated Dumbbell Strict Press</p>
            <p>Rest 30" b/t Rounds</p>
            <p>Then</p>
            <p>3 x 10 Barbell Skull Crushers</p>
            <p>Rest 30" b/t Rounds</p>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p>All sets @Moderate Weight</p>
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
              <li>10/10 One Arm Bent Over Row</li>
              <li>10 Double Plate Cuban Press</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <ul>
              <li>Then</li>
              <li>3 Rounds</li>
              <li>30 m Double Kettlebell Overhead Carry</li>
              <li>30 m Double Dumbbell Farmers Carry</li>
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
