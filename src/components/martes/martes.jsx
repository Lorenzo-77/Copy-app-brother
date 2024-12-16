import { useState } from 'react';
import '../../styles.css';

function Martes() {
  // Estados para secciones colapsables
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isFrontSquatOpen, setIsFrontSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isHandstandPushUpDevOpen, setIsHandstandPushUpDevOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);

  // Estado para 1RM y pesos calculados
  const [oneRepMax, setOneRepMax] = useState('');
  const [calculatedWeights, setCalculatedWeights] = useState({
    frontSquatSet81: '',
    frontSquatSet60: ''
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
        frontSquatSet81: (rm * 0.81).toFixed(2),
        frontSquatSet60: (rm * 0.60).toFixed(2)
      });
    } else {
      setCalculatedWeights({
        frontSquatSet81: '',
        frontSquatSet60: ''
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
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>6/6 One Arm Russian Swings</li>
              <li>6/6 One Arm Thrusters</li>
              <li>10" Supinated Bar Hang</li>
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
              Build to 2 Reps @{' '}
              {calculatedWeights.frontSquatSet81
                ? `${calculatedWeights.frontSquatSet81} kg`
                : '81%'}
            </p>
            <p>Then</p>
            <p>3 Sets</p>
            <p>
              5 1,25 Pause Front Squats @{' '}
              {calculatedWeights.frontSquatSet60
                ? `${calculatedWeights.frontSquatSet60} kg`
                : '60%'}{' '}
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
            <p><strong>OTM 12 Min</strong></p>
            <ul>
              <li>Min 1: 200/150 m Ski Erg</li>
              <li>Min 2: 8-12 Chest-to-Wall Handstand Push Ups</li>
              <li>Min 3: 10 Alternating One Arm Devil Press</li>
            </ul>
            <p>Dumbbell - 22,5/15 kg</p>
            <p>Then</p>
            <ul>
              <li>3 x 12 Banded Seated Barbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>All sets @Moderate Weight</p>
            <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

            <hr />

            <h4>2) Test: 10-17 Reps</h4>
            <p><strong>4 Sets, Every 3 Min</strong></p>
            <ul>
              <li>17 Unbroken Chest-to-Wall Handstand Push Ups</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 12 Banded Seated Barbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>All sets @Moderate Weight</p>
            <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>

            <hr />

            <h4>3) Test: 5-9 Reps</h4>
            <p><strong>OTM 6 Min</strong></p>
            <ul>
              <li>17 Unbroken Chest-to-Wall Handstand Push Ups</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 12 Banded Seated Barbell Strict Press</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>Then</p>
            <ul>
              <li>3 x 10 Rolling Dumbbell Triceps Extension</li>
              <li>Rest 30" b/t Rounds</li>
            </ul>
            <p>All sets @Moderate Weight</p>
            <p><em>**En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</em></p>
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
            <p><strong>For Time</strong></p>
            <ul>
              <li>100 Double Unders</li>
            </ul>
            <p>Directly Into</p>
            <p>3 Rounds</p>
            <ul>
              <li>20 Toes to Bar</li>
              <li>2 Double Kettlebell Front Rack Walking Lunge Segments</li>
            </ul>
            <p>Directly Into</p>
            <ul>
              <li>100 Double Unders</li>
            </ul>
            <p>Directly Into</p>
            <p>3 Rounds</p>
            <ul>
              <li>3 Sandbag Carry Segments</li>
              <li>3 Rope Climbs</li>
            </ul>
            <p>Directly Into</p>
            <ul>
              <li>100 Double Unders</li>
            </ul>

            <p><strong>Kettlebells:</strong> 2 x 24/16 kg</p>
            <p><strong>Lunges & Carry:</strong> 7,5 m Segments</p>
            <p><strong>Rope:</strong> 4,57 m</p>
            <p><strong>Sandbag:</strong> 70/45 kg</p>

            <h4>NOTAS</h4>
            <ul>
              <li><strong>SCORE OBJETIVO</strong>: 10-16 Min</li>
            </ul>

            <h4>REEMPLAZOS/REPLACEMENTS</h4>
            <ul>
              <li>No Sandbag: 4 Double Kettlebell Farmers Carry (2 x 24/16 kg)</li>
            </ul>
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
            <h4>3 Rounds</h4>
            <ul>
              <li>30 Bent Over Band Pull Aparts</li>
              <li>10/10 Elbow On Knee Dumbbell External Rotation</li>
              <li>Rest 1 Min b/t Rounds</li>
            </ul>
            <h4>Then</h4>
            <ul>
              <li>3 Rounds</li>
              <li>40 m Double Kettlebell Overhead Carry</li>
              <li>40 m Double Dumbbell Farmers Carry</li>
            </ul>
            <p><em>Rest 1 Min b/t Rounds</em></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Martes;
