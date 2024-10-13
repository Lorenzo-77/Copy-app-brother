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
    set82: '',
    set65: ''
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
        set82: (rm * 0.82).toFixed(2),
        set65: (rm * 0.65).toFixed(2)
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        set82: '',
        set65: ''
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
              <li>10/10 Banded Side Steps</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>10 Bootstraps</li>
              <li>10 Squat Press Out</li>
              <li>8 Yoga Push Ups</li>
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
            <p>Build to 2 Reps @ {calculatedWeights.set82 ? `${calculatedWeights.set82} kg` : '82%'}</p>
            <p>Then</p>
            <p>OTM 5 Min</p>
            <p>4 Front Squats @ {calculatedWeights.set65 ? `${calculatedWeights.set65} kg` : '65%'}</p>
            <p><em>*Enfoque en velocidad de ejecución (Hacia abajo y hacia arriba)</em></p>
            <p><em>*Focus is on Speed of execution (Speed down and Up)</em></p>
            
            {/* Input para 1RM dentro de FRONT SQUAT */}
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

      {/* Sección CONDITIONING con ACTIVACIÓN */}
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
              <li>25 GHD Sit Ups</li>
              <li>75 Double Unders</li>
              <li>25 Wall Balls</li>
              <li>10/7 Ring Muscle Ups</li>
            </ul>
            <p>Rest 4 Min b/t Sets</p>
            <p>Medball - 9/6 kg</p>
            
            {/* ACTIVACIÓN/ACTIVATION dentro de CONDITIONING */}
            <h4>ACTIVACIÓN/ACTIVATION</h4>
            <p>1 Round</p>
            <ul>
              <li>5 GHD Sit Ups</li>
              <li>20 Double Unders</li>
              <li>5 Wall Balls</li>
              <li>3/2 Ring Muscle Ups</li>
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
            <p><em>// Choose the option according to your Chest-to-Wall Handstand Push Ups Test.</em></p>

            {/* Opciones según resultados del TEST */}
            <h4>1) Test Sub 3 Min</h4>
            <p>AMRAP 8 Min</p>
            <ul>
              <li>Chest-to-Wall Handstand Push Ups*</li>
              <li>Right Arm Dumbbell Snatches</li>
              <li>Box Jump Overs (Step Down)</li>
              <li>Left Arm Dumbbell Snatches</li>
            </ul>
            <p>Dumbbell - 32,5/22,5 kg</p>
            <p>Box - 76/60 cm</p>
            <p>Then</p>
            <ul>
              <li>3 x 15 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Inverted Skull Crushers</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <hr />

            <h4>2) Test entre 3 y 5 Min</h4>
            <p>3 Sets</p>
            <ul>
              <li>12 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest As Little As Possible</li>
              <li>9 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest As Little As Possible</li>
              <li>7 Unbroken Chest-to-Wall Handstand Push Ups</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <ul>
              <li>3 x 15 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Inverted Skull Crushers</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <hr />

            <h4>3) Test entre 5 y 8 Min</h4>
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
            <ul>
              <li>3 x 15 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Inverted Skull Crushers</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <hr />

            <h4>4) Test arriba de 8 Min</h4>
            <p>2 Sets</p>
            <p>3 Rounds</p>
            <ul>
              <li>27 Unbroken Pike Strict Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <ul>
              <li>3 x 15 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Inverted Skull Crushers</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            {/* Notas adicionales */}
            <h4>NOTAS</h4>
            <ul>
              <li>En este trabajo deben seleccionar lo que van a hacer dependiendo de como hayan realizado el Test que se hizo en la semana de descarga de Strict Handstand Push Ups.</li>
              <li>A su vez, utilizarán el número del Test de máxima cantidad de Chest-to-Wall Handstand Push Ups Unbroken tomado un tiempo atrás.</li>
            </ul>

            <h4>IMPORTANTE</h4>
            <ul>
              <li>If you did not do both Tests, do the following:
                <ol>
                  <li>1 Set: Max Unbroken Chest-to-Wall Handstand Push Ups</li>
                  <li>Then rest 5-10 minutes and we Will use these equivalencies to do one of the given options (You will keep using these for the next few weeks):
                    <ol type="5">
                      <li>20+ Unbroken Chest-to-Wall HSPU = Test Sub 3 Min</li>
                      <li>15-19 Unbroken Chest-to-Wall HSPU = Test entre 3 y 5 Min</li>
                      <li>10-14 Unbroken Chest-to-Wall HSPU = Test entre 5 y 8 Min</li>
                      <li>9 o less Unbroken Chest-to-Wall HSPU = Test above de 8 Min</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ul>

            <h4>REEMPLAZOS/REPLACEMENTS</h4>
            <p>No 32,5/22,5 kg Dumbbell: 2xReps con 22,5/15 kg</p>
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
            <p>3 Rounds</p>
            <ul>
              <li>10/10 Three Point Dumbbell Row</li>
              <li>10/10 Elbow On Knee Banded External Rotation</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>

            {/* Segunda Parte de ACCESSORY */}
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>30 m One Arm Overhead Carry (Each Arm)</li>
              <li>30 m One Arm Farmers Carry (Each Arm)</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección SESSION 2: PRO RUNNER */}
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
            {/* Warm-Up */}
            <h4>Warm-Up</h4>
            <ul>
              <li>5 Min @Very Easy to Moderate Pace (Aumentar ritmo cada minuto // Slowly increase pace each minute)</li>
            </ul>

            {/* Workout */}
            <h4>Workout</h4>
            <ul>
              <li>4 Rounds</li>
              <li>8 Min @06:12/km</li>
              <li>2 Min @Recovery Pace</li>
              <li>6 Min @05:57/km</li>
              <li>2 Min @Recovery Pace</li>
              <li>8 Min @06:12/km</li>
            </ul>

            {/* Cool-Down */}
            <h4>Cool-Down</h4>
            <ul>
              <li>5 Min @Recovery Pace</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
