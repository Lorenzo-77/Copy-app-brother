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
    frontSquatSet78: '',
    frontSquatSet57: ''
  });

  // Función para alternar secciones
  const toggleSection = (setState) => setState((prevState) => !prevState);

  // Función para manejar el cambio de 1RM
  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      setCalculatedWeights({
        frontSquatSet78: (rm * 0.78).toFixed(2),
        frontSquatSet57: (rm * 0.57).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        frontSquatSet78: '',
        frontSquatSet57: ''
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
              <li>6/6 One Arm Suitcase Deadlift</li>
              <li>6/6 One Arm Rack Squats</li>
              <li>6/6 One Arm Shoulder Press</li>
              <li>10" Handstand Hold</li>
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
            <p>
              Build to 3 Reps @{' '}
              {calculatedWeights.frontSquatSet78 ? `${calculatedWeights.frontSquatSet78} kg` : '78%'}
            </p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>
              5 1,25 Pause Front Squats @{' '}
              {calculatedWeights.frontSquatSet57 ? `${calculatedWeights.frontSquatSet57} kg` : '57%'}{' '}
              <em>(3" Pause At Bottom)</em>
            </p>
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
            <p>Every 3 Min x 24 Min (4 Sets Each)</p>
            <ul>
              <li>A) 250/200 m Ski Erg</li>
              <li>15 Thrusters</li>
              <li>B) 500/400 m Assault Bike</li>
              <li>7/5 Ring Muscle Ups</li>
            </ul>
            <p>Barbell - 43/30 kg</p>
            <p>
              <strong>SCORE OBJETIVO:</strong> 1:30-2:00 Min (Cada Set)
            </p>
            <p><strong>REEMPLAZOS:</strong></p>
            <ul>
              <li>No Ski Erg: 12 Burpee to Target</li>
              <li>No Assault Bike: 200 m Run</li>
            </ul>
          </div>
        )}
      </div>

{/* HANDSTAND PUSH UP DEVELOPMENT */}
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
      <p>
        Elegir la opción de acuerdo al resultado del TEST de Chest-to-Wall Handstand Push Ups.{' '}
        <strong>// Choose the option according to your Chest-to-Wall Handstand Push Ups Test</strong>
      </p>

      <h4>1) Test: 18+ Reps</h4>
      <p><strong>AMRAP 10 Min</strong></p>
      <ul>
        <li>250/200 m Row</li>
        <li>3 [1 Wall Walk + 2 Chest-to-Wall Handstand Push Ups]</li>
        <li>35 Double Unders</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Banded Seated Barbell Strict Press</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Inverted Skull Crushers</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>All sets @Moderate Weight</p>
      <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

      <hr />

      <h4>2) Test: 10-17 Reps</h4>
      <p><strong>8 Rounds</strong></p>
      <ul>
        <li>8 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest 40" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Banded Seated Barbell Strict Press</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Inverted Skull Crushers</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>All sets @Moderate Weight</p>
      <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

      <hr />

      <h4>3) Test: 5-9 Reps</h4>
      <p><strong>10 Rounds</strong></p>
      <ul>
        <li>11 Unbroken Chest-to-Wall Handstand Push Ups</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Banded Seated Barbell Strict Press</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Inverted Skull Crushers</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>All sets @Moderate Weight</p>
      <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

      <hr />

      <h4>4) Test: 1-5 Reps</h4>
      <p><strong>3 Sets</strong></p>
      <ul>
        <li>5 Pause Eccentric Only Handstand Push Ups (2" Pause At Bottom)</li>
        <li>Rest 30"</li>
        <li>AMRAP 1 Min Pike Strict Handstand Push Ups</li>
        <li>Rest 1:30 Min b/t Sets</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Banded Seated Barbell Strict Press</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>Then</p>
      <ul>
        <li>3 x 10 Inverted Skull Crushers</li>
        <li>Rest 30" b/t Rounds</li>
      </ul>
      <p>All sets @Moderate Weight</p>
      <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

      <hr />

      <h4>NOTAS</h4>
      <p>
        En este trabajo deben seleccionar lo que van a hacer dependiendo de cómo hayan realizado el Test que se hizo en la semana de descarga de Chest-to-Wall Handstand Push Ups.
      </p>
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
            <p>3 Rounds</p>
            <ul>
              <li>30 Band Pull Aparts</li>
              <li>10/10 Elbow On Knee Banded External Rotation</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
