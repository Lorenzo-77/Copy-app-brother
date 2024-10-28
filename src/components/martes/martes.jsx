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
    frontSquatSet90: '',
    frontSquatSet71: ''
  });

  // Función para alternar secciones
  const toggleSection = (setState) => setState(prevState => !prevState);

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculated = {
        frontSquatSet90: (rm * 0.90).toFixed(2),
        frontSquatSet71: (rm * 0.71).toFixed(2)
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        frontSquatSet90: '',
        frontSquatSet71: ''
      });
    }
  };

  return (
    <div className="container">
      <h1>MARTES</h1>

      {/* Sección WARM UP */}
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
              <li>10" Top Of Ring Support Hold + 10" Bottom Ring Support Hold</li>
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
            <p>Build to 2 Reps @ {calculatedWeights.frontSquatSet90 ? `${calculatedWeights.frontSquatSet90} kg` : '90%'}</p>
            <p>Then</p>
            <p>OTM 5 Min</p>
            <p>4 Front Squats @ {calculatedWeights.frontSquatSet71 ? `${calculatedWeights.frontSquatSet71} kg` : '71%'}</p>
            <p><em>*Enfoque en velocidad de ejecución (Hacia abajo y hacia arriba)</em></p>
            
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
            <p>Every 6 Min x 18 Min (3 Sets)</p>
            <ul>
              <li>15/12 Cal Assault Bike</li>
              <li>10 m Handstand Walk</li>
              <li>10 m Double Dumbbell Front Rack Walking Lunges</li>
              <li>10/7 Ring Muscle Ups</li>
            </ul>
            <p>Dumbbells - 2 x 22,5/15 kg</p>
            <p>Handstand Walk & Lunges - 10 m Segment (5 m Unbroken Check Point)</p>
            <h4>NOTAS</h4>
            <p>SCORE OBJETIVO:</p>
            <ul>
              <li>• 3-4 Min (Cada Set)</li>
              <li>• No Assault Bike: 15 Box Jump Overs (Step Down; 60/50 cm)</li>
            </ul>
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
              <li>Test Sub 3 Min: AMRAP 10 Min - 30 Double Unders, 10 Chest to Bar Pull Ups, 30 Double Unders, 5 Strict Deficit Handstand Push Ups (Deficit - 9/5 cm)</li>
              <li>Test entre 3 y 5 Min: 3 Sets - 14 Unbroken Chest-to-Wall Handstand Push Ups, Rest As Little As Possible, etc.</li>
              <li>Test entre 5 y 8 Min: 3 Sets - 12 Unbroken Chest-to-Wall Handstand Push Ups, Rest As Little As Possible, etc.</li>
              <li>Test arriba de 8 Min: 2 Sets - 3 Rounds - 31 Unbroken Pike Strict Handstand Push Ups, Rest 30" b/t Rounds, etc.</li>
            </ol>
            <p>IMPORTANTE: En el caso de no haber hecho estos Tests, realizarán lo siguiente...</p>
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
              <li>10/10 One Arm Bent Over Row</li>
              <li>10 Double Plate Cuban Press</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>Then 3 Rounds</p>
            <ul>
              <li>30 m Double Kettlebell Overhead Carry</li>
              <li>30 m Double Dumbbell Farmers Carry</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* Sección PRO RUNNER */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsProRunnerOpen)}
          aria-expanded={isProRunnerOpen}
          aria-controls="pro-runner-content"
        >
          <h3>PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content" id="pro-runner-content">
            <p>WARM UP:</p>
            <ul>
              <li>3 Min @Easy Pace</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>5 Rounds</li>
              <li>30" @Hard Pace</li>
              <li>30" @Easy Pace</li>
              <li>Workout</li>
              <li>4 Rounds</li>
              <li>200 m in 00:48</li>
              <li>800 m in 04:47</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
