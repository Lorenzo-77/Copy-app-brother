import { useState } from 'react';
import '../../styles.css';

const Viernes = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isBackSquatOpen, setIsBackSquatOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [isStaminaOpen, setIsStaminaOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isProRunnerOpen, setIsProRunnerOpen] = useState(false);

  const [oneRmBackSquat, setOneRmBackSquat] = useState('');
  const [calculatedBackSquat, setCalculatedBackSquat] = useState({});

  const handleBackSquatChange = (e) => {
    const value = e.target.value;
    setOneRmBackSquat(value);
    if (value) {
      const rm = parseFloat(value);
      setCalculatedBackSquat({
        set84: (rm * 0.84).toFixed(0),
        set70: (rm * 0.70).toFixed(0)
      });
    } else {
      setCalculatedBackSquat({});
    }
  };

  const toggleSection = (setSection) => setSection(prev => !prev);

  return (
    <div className="container">
      <h1>VIERNES</h1>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Copenhagen Raise</li>
              <li>10/10 Single Leg Kettlebell Hip Thrust</li>
              <li>10 Yoga Push Ups</li>
              <li>10 Russian KB Swings</li>
              <li>10 Goblet Squats</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchOpen)}>
          <h3>SNATCH</h3>
          <span>{isSnatchOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchOpen && (
          <div className="section-content">
            <p>OTM 4 Min</p>
            <p>5 Touch And Go Squat Snatches</p>
            <p>*El atleta decide los pesos.</p>
            <p>**El peso se mantiene todos los minutos</p>
            <p><strong>NOTA:</strong> Elegir un peso desafiante pero que no llegue al fallo.</p>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsBackSquatOpen)}>
          <h3>BACK SQUAT</h3>
          <span>{isBackSquatOpen ? '▲' : '▼'}</span>
        </div>
        {isBackSquatOpen && (
          <div className="section-content">
            <label>
              Ingresar 1RM (kg):
              <input
                type="number"
                value={oneRmBackSquat}
                onChange={handleBackSquatChange}
                placeholder="1RM Back Squat"
              />
            </label>
            <p>Build to 2 Reps @ {calculatedBackSquat.set84 || 0} kg</p>
            <p>Then</p>
            <ul>
              <li>6 Back Squats @ {calculatedBackSquat.set70 || 0} kg</li>
              <li>6 Back Squats @ {calculatedBackSquat.set70 || 0} kg</li>
              <li>6 Back Squats @ {calculatedBackSquat.set70 || 0} kg</li>
            </ul>
            <p>Rest 60-90" entre sets</p>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>2-2-2-3 Min Intervals</p>
            <ul>
              <li>7/5 Ring Muscle Ups</li>
              <li>10 Overhead Squats</li>
              <li>Max Burpee Box Jump Overs</li>
            </ul>
            <p>Rest 1 Min entre cada uno</p>
            <p>Barbell - 61/43 kg | Box - 60/50 cm</p>
            <p><strong>SCORE OBJETIVO:</strong> 9+ Reps por intervalo, 18+ en el último</p>
            <p><strong>OBJETIVO:</strong> Minimizar transiciones. Todo Unbroken a ritmo moderado-alto</p>
            <h3>ACTIVACIÓN</h3>
              <p>1 Round:</p>
            <ul>
              <li>4 Ring Muscle Ups</li>
              <li>5 Overhead Squats</li>
              <li>4 Burpee Box Jump Overs</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsStaminaOpen)}>
          <h3>STAMINA CONDITIONING</h3>
          <span>{isStaminaOpen ? '▲' : '▼'}</span>
        </div>
        {isStaminaOpen && (
          <div className="section-content">
            <p>OTM 12 Min</p>
            <ul>
              <li>Min 1: 20-25 GHD Sit Ups</li>
              <li>Min 2: 15-20 Chest to Bar Pull Ups</li>
              <li>Min 3: 1-3 Pirouettes</li>
              <li>Min 4: REST</li>
            </ul>
            <p>Dumbbells - 2 x 22,5/15 kg | Box - 50 cm | Pirouettes: 7,5 m sin salir del carril (1 m ancho)</p>
            <p><strong>OBJETIVO:</strong> Acumular fatiga en tren superior manteniendo reps estables por vuelta.</p>
            <p><strong>REEMPLAZOS:</strong></p>
            <ul>
              <li><a href="https://youtu.be/eWDk5jxAwCE" target="_blank" rel="noreferrer">Opción 1 GHD</a></li>
              <li><a href="https://youtu.be/O3huiwVg4UE" target="_blank" rel="noreferrer">Opción 2 GHD</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 Rounds:</p>
            <ul>
              <li>10 Pause Front Squats</li>
              <li>12 Weighted GHD Hip Extensions (2" hold)</li>
              <li>12/12 Hip Lift Weight Plate Psoas March</li>
              <li>15 Rower Hamstring Curl</li>
            </ul>
            <p>30" Rest entre rondas. Descanso libre entre movimientos.</p>
            <p><strong>NOTA:</strong> Mantener tiempos fijos, ajustar carga si es necesario.</p>
          </div>
        )}
      </div>

      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsProRunnerOpen)}>
          <h3>SESSION 2: PRO RUNNER</h3>
          <span>{isProRunnerOpen ? '▲' : '▼'}</span>
        </div>
        {isProRunnerOpen && (
          <div className="section-content">
            <h4>Warm Up</h4>
            <ul>
              <li>400 m Run @Easy To Moderate Pace</li>
              <li>Rest 1 Min</li>
              <li>100 m @Moderate Pace</li>
              <li>100 m @Fast Pace</li>
              <li>100 m @Recovery Jog</li>
            </ul>
            <h4>Workout</h4>
            <ul>
              <li>300 m @Hard Pace, 200 m Recovery Jog</li>
              <li>200 m @Hard Pace, 200 m Recovery Jog</li>
              <li>300 m @Harder Pace, 200 m Recovery Jog</li>
              <li>200 m @Harder Pace, 200 m Recovery Jog</li>
              <li>300 m @Very Hard Pace, 200 m Recovery Jog</li>
              <li>200 m @Very Hard Pace, 200 m Recovery Jog</li>
            </ul>
            <h4>Cooldown</h4>
            <p>5 Min Recovery Pace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viernes;
