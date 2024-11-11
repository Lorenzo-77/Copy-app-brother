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
    frontSquatSet75: '',
    frontSquatSet60: '',
    snatchSet49: '',
    snatchSet53: '',
    snatchSet57: ''
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
        frontSquatSet75: (rm * 0.75).toFixed(2),
        frontSquatSet60: (rm * 0.60).toFixed(2),
        snatchSet49: (rm * 0.49).toFixed(2),
        snatchSet53: (rm * 0.53).toFixed(2),
        snatchSet57: (rm * 0.57).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        frontSquatSet75: '',
        frontSquatSet60: '',
        snatchSet49: '',
        snatchSet53: '',
        snatchSet57: ''
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
              <li>6/6 One Arm RKB Swings</li>
              <li>6/6 One Arm Kettlebell Rack Squats</li>
              <li>6/6 One Arm Shoulder Press</li>
              <li>10 Kip Swings On Bar</li>
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
            <p>Build to 3 Reps @ {calculatedWeights.frontSquatSet75 ? `${calculatedWeights.frontSquatSet75} kg` : '75%'}</p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>5 Pause Front Squats @ {calculatedWeights.frontSquatSet60 ? `${calculatedWeights.frontSquatSet60} kg` : '60%'} <em>(3" Pause At Bottom)</em></p>
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
            <p>With a Running Clock</p>
            <p>On the 00:00</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>25 Wall Balls</li>
              <li>15/12 Cal Row</li>
              <li>10 Bar Muscle Ups</li>
            </ul>
            <p>On The 15:00</p>
            <p>3 Rounds For Time</p>
            <ul>
              <li>15 Thrusters</li>
              <li>15/12 Cal Row</li>
              <li>15 Chest to Bar Pull Ups</li>
            </ul>
            <p>Medball - 9/6 kg</p>
            <p>Barbell - 43/30 kg</p>
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
                  <li>3 Sets, Each For Time</li>
                  <li>18 GHD Sit Ups</li>
                  <li>12 Handstand Push Ups*</li>
                  <li>3 Rope Climbs</li>
                  <li>Rest 1 Min b/t Sets</li>
                </ul>
                <p>*Round 1 & 2: Chest-to-Wall Handstand Push Ups</p>
                <p>*Round 3 & 4: Strict Handstand Push Ups</p>
                <p>Rope - 4,57 m</p>
                <p>Then</p>
                <p>3 x 10 Seated Barbell Strict Press</p>
                <p>Rest 30" b/t Rounds</p>
                <p>Then</p>
                <p>3 x 10 Double Dumbbell Tricep Kickback</p>
                <p>Rest 30" b/t Rounds</p>
                <p>All sets @Moderate Weight</p>
                <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
              </li>
              <li>
                <strong>Test: 10-17 Reps</strong>
                <ul>
                  <li>4 Sets, Every 2:30 Min</li>
                  <li>13 Unbroken Chest-to-Wall Handstand Push Ups</li>
                  <li>Then</li>
                  <li>3 x 10 Seated Barbell Strict Press</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>Then</li>
                  <li>3 x 10 Double Dumbbell Tricep Kickback</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>All sets @Moderate Weight</li>
                  <li><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></li>
                </ul>
              </li>
              <li>
                <strong>Test: 5-9 Reps</strong>
                <ul>
                  <li>OTM 6 Min</li>
                  <li>13 Unbroken Chest-to-Wall Handstand Push Ups</li>
                  <li>Then</li>
                  <li>3 x 10 Seated Barbell Strict Press</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>Then</li>
                  <li>3 x 10 Double Dumbbell Tricep Kickback</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>All sets @Moderate Weight</li>
                  <li><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></li>
                </ul>
              </li>
              <li>
                <strong>Test: 1-5 Reps</strong>
                <ul>
                  <li>3 Sets</li>
                  <li>Max Unbroken Feet Elevated Pike Strict Handstand Push Ups</li>
                  <li>Rest 2 Min b/t Sets</li>
                  <li>Then</li>
                  <li>3 x 10 Seated Barbell Strict Press</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>Then</li>
                  <li>3 x 10 Double Dumbbell Tricep Kickback</li>
                  <li>Rest 30" b/t Rounds</li>
                  <li>All sets @Moderate Weight</li>
                  <li><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></li>
                </ul>
              </li>
            </ol>
            <p><strong>NOTAS:</strong></p>
            <ul>
              <li>En este trabajo deben seleccionar lo que van a hacer dependiendo de cómo hayan realizado el Test que se hizo en la semana de descarga de Chest-to-Wall Handstand Push Ups.</li>
            </ul>
            <p><strong>IMPORTANTE:</strong></p>
            <ul>
              <li>En el caso de no haber hecho estos Tests, realizarán lo siguiente:</li>
              <li>1 Set</li>
              <li>Max Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>• Luego de esto descansar 5-10 Minutos y realizan el trabajo del día.</li>
            </ul>
            <p><strong>NOTES:</strong></p>
            <ul>
              <li>Use the Chest-to-Wall Handstand Push Ups Test done on the Deload week to choose the option to do.</li>
            </ul>
            <p><strong>IMPORTANTE:</strong></p>
            <ul>
              <li>If you did not do both Tests, do the following:</li>
              <li>1 Set</li>
              <li>Max Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>• Then rest 5-10 minutes and do today´s workout.</li>
            </ul>
            <p><strong>REEMPLAZOS/REPLACEMENTS:</strong></p>
            <ul>
              <li>No GHD: 1) <a href="https://youtu.be/eWDk5jxAwCE" target="_blank" rel="noopener noreferrer">Video 1</a> ; 2) <a href="https://youtu.be/O3huiwVg4UE" target="_blank" rel="noopener noreferrer">Video 2</a></li>
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
            <p>3 Rounds</p>
            <ul>
              <li>20 Band Pull Aparts</li>
              <li>10/10 Elbow On Knee Banded External Rotation</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>30 m One Arm Overhead Carry (Each Arm)</li>
              <li>30 m One Arm Farmers Carry (Each Arm)</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* SESSION 2: PRO RUNNER */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsProRunnerOpen)}
          aria-expanded={isProRunnerOpen}
          aria-controls="pro-runner-content"
        >
          <h3>SESSION 2: PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content" id="pro-runner-content">
            <h4>Warm-Up</h4>
            <p>5 Min @Very Easy to Moderate Pace (Aumentar ritmo cada minuto // Slowly increase pace each minute)</p>
            <h4>Workout</h4>
            <ul>
              <li>9 Min @06:10/km</li>
              <li>Walk 2 Min</li>
              <li>8 Min @06:10/km</li>
              <li>Walk 2 Min</li>
              <li>7 Min @06:10/km</li>
              <li>Walk 2 Min</li>
              <li>6 Min @06:10/km</li>
            </ul>
            <h4>Cool-Down</h4>
            <p>5 Min @Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
