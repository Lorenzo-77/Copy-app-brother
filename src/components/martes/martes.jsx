import { useState } from 'react';
import '../../styles.css';

function Martes() {
  // Estados para secciones colapsables
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isFrontSquatOpen, setIsFrontSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandPushUpDevOpen, setIsHandstandPushUpDevOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  // Estado para 1RM y pesos calculados
  const [oneRepMax, setOneRepMax] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    frontSquatSet81: '',
    frontSquatSet66: ''
  });

  // Función para alternar secciones
  const toggleSection = (setState) => setState(prevState => !prevState);

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        frontSquatSet81: (rm * 0.81).toFixed(2),
        frontSquatSet66: (rm * 0.66).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        frontSquatSet81: '',
        frontSquatSet66: ''
      });
    }
  };

  return (
    <div className="container">
      <h1>MARTES</h1>

      {/* SESSION 1: WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content" id="warm-up-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Samson Walking Lunge Steps</li>
              <li>6/6 One Arm Suitcase Deadlift</li>
              <li>6/6 One Arm Rack Squats</li>
              <li>6/6 One Arm Shoulder Press</li>
            </ul>
          </div>
        )}
      </div>

      {/* FRONT SQUAT */}
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
            <p>Build to 2 Reps @ {calculatedWeights.frontSquatSet81 ? `${calculatedWeights.frontSquatSet81} kg` : '81%'}</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Pause Front Squats @ {calculatedWeights.frontSquatSet66 ? `${calculatedWeights.frontSquatSet66} kg` : '66%'} <em>(3" Pause At Bottom)</em></p>
            <p>Rest 60-90" b/t Sets</p>
            
            <div className="input-block">
              <label htmlFor="oneRepMax">Ingrese su 1RM (kg):</label>
              <input
                type="number"
                id="oneRepMax"
                value={oneRepMax}
                onChange={handle1RMChange}
                placeholder="1RM en kg"
                min="0"
              />
            </div>
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
            <p>4 Rounds For Total Time</p>
            <ul>
              <li>15 Thrusters</li>
              <li>20 Burpee Box Jump Overs</li>
              <li>25 GHD Sit Ups</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Barbell - 43/30 kg</p>
            <p>Box - 60/50 cm</p>
            <p><strong>SCORE OBJETIVO</strong>: 16-21 Min</p>
            <p><strong>REEMPLAZOS:</strong> No GHD: 1) <a href="https://youtu.be/eWDk5jxAwCE">Video 1</a>; 2) <a href="https://youtu.be/O3huiwVg4UE">Video 2</a></p>
          </div>
        )}
      </div>

      {/* Sección HANDSTAND PUSH UP DEVELOPMENT */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsHandstandPushUpDevOpen)}
          aria-expanded={isHandstandPushUpDevOpen}
          aria-controls="handstand-pushup-dev-content"
        >
          <h3>HANDSTAND PUSH UP DEVELOPMENT</h3>
          <span>{isHandstandPushUpDevOpen ? '▲' : '▼'}</span>
        </div>
        {isHandstandPushUpDevOpen && (
          <div className="section-content" id="handstand-pushup-dev-content">
            <p>Elegir la opción de acuerdo al resultado del TEST de Chest-to-Wall Handstand Push Ups.</p>
            <ol>
              <li>
                <strong>Test: 18+ Reps</strong>
                <ul>
                  <li>For Total Time</li>
                  <li>25/20 Cal Ski Erg</li>
                  <li>30 Alternating Dumbbell Snatches</li>
                  <li>25 Strict Handstand Push Ups</li>
                  <li>REST 3 Min</li>
                  <li>25/20 Cal Ski Erg</li>
                  <li>30 Alternating Dumbbell Snatches</li>
                  <li>25 Chest-to-Wall Handstand Push Ups</li>
                  <li>Dumbbell - 22.5/15 kg</li>
                  <li>Then</li>
                  <li>3 x 15 Seated Barbell Strict Press</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>Then</li>
                  <li>3 x 10 Barbell Skull Crushers</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>All sets @Moderate Weight</li>
                  <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
                </ul>
              </li>
              <li>
                <strong>Test: 10-17 Reps</strong>
                <ul>
                  <li>4 Sets, Every 2:30 Min</li>
                  <li>15 Unbroken Chest-to-Wall Handstand Push Ups</li>
                  <li>Then</li>
                  <li>3 x 15 Seated Barbell Strict Press</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>Then</li>
                  <li>3 x 10 Barbell Skull Crushers</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>All sets @Moderate Weight</li>
                </ul>
              </li>
            </ol>
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
            <p>10-12 x 3 Sets</p>
            <ul>
              <li>Alternating Dumbbell Snatch</li>
              <li>Seated Shoulder Press</li>
              <li>Russian Twists</li>
              <li>Rest 1 min b/t sets</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
