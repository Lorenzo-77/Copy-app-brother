import { useState } from 'react';
import '../../styles.css';

const Sabado = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isBenchPressOpen, setIsBenchPressOpen] = useState(false);
  const [isDeadliftOpen, setIsDeadliftOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [oneRmBenchPress, setOneRmBenchPress] = useState(0);
  const [oneRmDeadlift, setOneRmDeadlift] = useState(0);

  const toggleSection = (setState) => setState((prevState) => !prevState);

  const calculateWeight = (percentage, oneRm) => {
    return (oneRm * percentage / 100).toFixed(2);
  };

  return (
    <div className="container">
      <h1>SÁBADO</h1>

      {/* Sección WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>8 Sumo Inchworm + Push Ups</li>
              <li>10 Alternating Kossacks</li>
              <li>10/10 Spiderman + Reach</li>
              <li>8/8 One Arm Suitcase Deadlift</li>
              <li>8/8 One Arm RKB Swings</li>
              <li>10 Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección PUSHING DEVELOPMENT 2 */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsBenchPressOpen)}>
          <h3>PUSHING DEVELOPMENT 2</h3>
          <span>{isBenchPressOpen ? '▲' : '▼'}</span>
        </div>
        {isBenchPressOpen && (
          <div className="section-content">
            <label>
              Ingresar 1RM de Bench Press (kg):
              <input
                type="number"
                value={oneRmBenchPress}
                onChange={(e) => setOneRmBenchPress(Number(e.target.value))}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>Find a Heavy 1 Wide Grip Bench Press</p>
            <p>Then</p>
            <p>3 Sets</p>
            <ul>
              <li>5 Wide Grip Bench Press @ {calculateWeight(70, oneRmBenchPress)}kg</li>
            </ul>
            <p>Rest 60-90" b/t Sets</p>
            <p>Then</p>
            <p>3 x 10 Incline Dumbbell Bench Press</p>
            <p>Rest 30" b/t Sets</p>
            <p>*En el caso de no llegar, no modificar el tiempo de descanso, modificar el peso.</p>
            <p>All sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* Sección DEADLIFT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsDeadliftOpen)}>
          <h3>DEADLIFT</h3>
          <span>{isDeadliftOpen ? '▲' : '▼'}</span>
        </div>
        {isDeadliftOpen && (
          <div className="section-content">
            <label>
              Ingresar 1RM de Deadlift (kg):
              <input
                type="number"
                value={oneRmDeadlift}
                onChange={(e) => setOneRmDeadlift(Number(e.target.value))}
                placeholder="Ingresa tu 1RM en kg"
              />
            </label>
            <p>Work Up To 76% x 3 Reps</p>
            <p>Subimos progresivamente de a 3 repeticiones hasta el porcentaje dado.</p>
            <p>*Todas las repeticiones son Singles, No Touch And Go</p>
            <p>Then</p>
            <p>4 x 3 Deadlift @ {calculateWeight(63, oneRmDeadlift)}kg (1 Min Rest)*</p>
          </div>
        )}
      </div>

      {/* Sección CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>On A Running Clock</p>
            <p>On the 00:00 - For Time</p>
            <ul>
              <li>1-2-3-4-5-6-7-8-9-10 Kipping Handstand Push Ups</li>
              <li>Deadlift</li>
              <li>Bar Facing Burpees</li>
            </ul>
            <p>On the 15:00 - For Time</p>
            <ul>
              <li>4 Rounds For Time</li>
              <li>12 Chest to Bar Pull Ups</li>
              <li>3 Sandbag to Shoulder</li>
              <li>15 m Handstand Walk</li>
            </ul>
            <p>Barbell - 100/70 kg</p>
            <p>Sandbag - 70/45 kg</p>
            <p>Handstand Walk - 7,5 m Segments</p>

            <h4>NOTAS</h4>
            <p><strong>Score Objetivo</strong>: 8-12 Min (Cada Parte)</p>
            <p><strong>Estímulo & Objetivos</strong>: TEST - Realizar este workout como si fuera en competencia.</p>

            <h4>ASSAULT BIKE CONDITIONING (OPCIONAL)</h4>
            <p>4 Rounds For Time</p>
            <ul>
              <li>3 Min @Moderate/Hard Pace</li>
              <li>1 Min @Recovery Pace</li>
            </ul>
            <p>No Additional Rest b/t Rounds</p>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 Rounds</p>
            <ul>
              <li>10 Dumbbell Triceps Kickback</li>
              <li>12 Shoulder Front Raises</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
            <p>Then</p>
            <p>3 Rounds</p>
            <ul>
              <li>12 Barbell Bent Over Row</li>
              <li>12 Trap Three Raise</li>
            </ul>
            <p>Rest 1 Min b/t Rounds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sabado;
