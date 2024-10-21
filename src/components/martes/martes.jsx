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
    frontSquatSet86: '',
    frontSquatSet68: ''
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
        frontSquatSet86: (rm * 0.86).toFixed(2),
        frontSquatSet68: (rm * 0.68).toFixed(2)
      };
      setCalculatedWeights(calculated);
    } else {
      setCalculatedWeights({
        frontSquatSet86: '',
        frontSquatSet68: ''
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
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>8 Inchworm + Push Ups</li>
              <li>10/10 Thoracic Extension Rotation</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>8 Squat Press Out</li>
              <li>10/10 Squat + Thoracic Extension Rotation</li>
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
            <p>Build to 2 Reps @ {calculatedWeights.frontSquatSet86 ? `${calculatedWeights.frontSquatSet86} kg` : '86%'}</p>
            <p>Then</p>
            <p>OTM 5 Min</p>
            <p>4 Front Squats @ {calculatedWeights.frontSquatSet68 ? `${calculatedWeights.frontSquatSet68} kg` : '68%'}</p>
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

            <h4>1) Test Sub 3 Min</h4>
            <p>2 Sets, Each For Time</p>
            <ul>
              <li>15 m Double Dumbbell Front Rack Walking Lunges</li>
              <li>10 Chest-to-Wall Handstand Push Ups</li>
              <li>3/2 Legless Rope Climbs</li>
              <li>10 Chest-to-Wall Handstand Push Ups</li>
              <li>15 m Double Dumbbell Front Rack Walking Lunges</li>
            </ul>
            <p>REST 5 Min b/t Sets</p>
            <p>Dumbbells - 2 x 22,5/15 kg</p>
            <p>Lunges - 7,5 m Unbroken Segments</p>
            <p>Rope - 4,57 m</p>
            <p>Then</p>
            <ul>
              <li>3 x 20 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <h4>2) Test entre 3 y 5 Min</h4>
            <p>2 Sets</p>
            <p>3 Rounds</p>
            <ul>
              <li>15 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <ul>
              <li>3 x 20 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <h4>3) Test entre 5 y 8 Min</h4>
            <p>2 Sets</p>
            <p>3 Rounds</p>
            <ul>
              <li>13 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Rest 2 Min b/t Sets</p>
            <p>Then</p>
            <ul>
              <li>3 x 20 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <h4>4) Test arriba de 8 Min</h4>
            <p>3 Sets</p>
            <ul>
              <li>17 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 1 Min b/t</li>
            </ul>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>29 Unbroken Pike Strict Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 20 Seated Dumbbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p><strong>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</strong></p>
            <p><em>All sets @Moderate Weight</em></p>

            <h4>NOTAS</h4>
            <p>• En este trabajo deben seleccionar lo que van a hacer dependiendo de como hayan realizado el Test que se hizo en la semana de descarga de Strict Handstand Push Ups.</p>
            <p>• A su vez, utilizarán el número del Test de máxima cantidad de Chest-to-Wall Handstand Push Ups Unbroken tomado un tiempo atrás.</p>

            <h4>IMPORTANTE</h4>
            <p>• En el caso de no haber hecho estos Tests, realizarán lo siguiente:</p>
            <ul>
              <li>1 Set: Max Unbroken Chest-to-Wall Handstand Push Ups</li>
            </ul>
            <p>• Luego de esto descansar 5-10 Minutos y utilizaremos las siguientes equivalencias para realizar una de las opciones dadas (Y seguir utilizando esta equivalencia por las siguientes semanas):</p>
            <ul>
              <li>1) 20+ Unbroken Chest-to-Wall HSPU = Test Sub 3 Min</li>
              <li>2) 15-19 Unbroken Chest-to-Wall HSPU = Test entre 3 y 5 Min</li>
              <li>3) 10-14 Unbroken Chest-to-Wall HSPU = Test entre 5 y 8 Min</li>
              <li>4) 9 o menos Unbroken Chest-to-Wall HSPU = Test encima de 8 Min</li>
            </ul>

            <h4>REEMPLAZOS/REPLACEMENTS</h4>
            <p>• No Rope: 1 Legless Rope Climb = 4 Unbroken Supinated Grip Strict Pull Ups</p>
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
            <p>4 Rounds For Time</p>
            <ul>
              <li>1000 m Bike Erg</li>
              <li>80 Double Unders</li>
              <li>20 GHD Sit Ups</li>
              <li>8 Sandbag to Shoulder</li>
            </ul>
            <p>Sandbag - 70/45 kg</p>

            <h4>NOTAS</h4>
            <p>SCORE OBJETIVO</p>
            <ul>
              <li>19-24 Min</li>
              <li>No Bike Erg: 400 m Run</li>
              <li>No Sandbag: 10 Devil Press (2 x 22,5/15 kg)</li>
              <li>GHD: 1) <a href="https://youtu.be/eWDk5jxAwCE">video 1</a> ; 2) <a href="https://youtu.be/O3huiwVg4UE">video 2</a></li>
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
            <h4>3 Rounds</h4>
            <ul>
              <li>10/10 One Arm Upright Row</li>
              <li>10/10 Elbow On Knee Dumbbell External Rotation</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>

            <h4>Then</h4>
            <h4>3 Rounds</h4>
            <ul>
              <li>40 m One Arm Overhead Carry (Each Arm)</li>
              <li>40 m One Arm Farmer's Carry (Each Arm)</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
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
            <h4>Warm-Up</h4>
            <ul>
              <li>2 Min @ Easy Pace</li>
              <li>2 Min @ Moderate Pace</li>
              <li>1 Min @ Hard Pace</li>
            </ul>

            <h4>Workout</h4>
            <ul>
              <li>1000 m in 06:16</li>
              <li>Rest 2 Min</li>
              <li>800 m in 04:30</li>
              <li>Rest 2 Min</li>
              <li>400 m in 01:48</li>
              <li>Rest 2 Min</li>
              <li>200 m in 00:48</li>
              <li>Rest 2 Min</li>
              <li>400 m in 01:48</li>
              <li>Rest 2 Min</li>
              <li>800 m in 04:30</li>
              <li>Rest 2 Min</li>
              <li>1000 m in 06:16</li>
            </ul>

            <h4>Cool-Down</h4>
            <p>5 Min @ Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
