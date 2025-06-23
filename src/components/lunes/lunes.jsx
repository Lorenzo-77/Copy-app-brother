import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [sections, setSections] = useState({});
  const [oneRM, setOneRM] = useState('');

  const toggleSection = (name) => {
    setSections(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const getRM = (percent) => {
    const rm = parseFloat(oneRM);
    return oneRM ? `${(rm * percent).toFixed(0)}kg` : `0kg`;
  };

  return (
    <div className="container">
      <h1>Lunes</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('warmup')}>
          <h3>WARM UP</h3>
          <span>{sections.warmup ? '▲' : '▼'}</span>
        </div>
        {sections.warmup && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>15"/15" Copenhagen Plank</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10 Russian KB Swings</li>
              <li>10 Yoga Push Ups</li>
              <li>10" Wall Facing Handstand Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* SNATCH TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchtech')}>
          <h3>SNATCH TECHNIQUE</h3>
          <span>{sections.snatchtech ? '▲' : '▼'}</span>
        </div>
        {sections.snatchtech && (
          <div className="section-content">
            <p>3 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Slow-Pull Power Snatch</li>
              <li>1 Hang Squat Snatch</li>
              <li>(Drop & Reset)</li>
              <li>1 Squat Snatch</li>
              <li>1 Snatch Balance</li>
            </ul>
            <p>Sets: {getRM(0.55)} - {getRM(0.60)} - {getRM(0.65)}</p>
            <label htmlFor="snatchRM">1RM Snatch (Full):</label>
            <input
              type="number"
              id="snatchRM"
              value={oneRM}
              onChange={(e) => setOneRM(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
        )}
      </div>

      {/* SNATCH COMPLEX */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('snatchcomplex')}>
          <h3>SNATCH COMPLEX</h3>
          <span>{sections.snatchcomplex ? '▲' : '▼'}</span>
        </div>
        {sections.snatchcomplex && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Squat Snatch</li>
              <li>1 Low Hang Squat Snatch</li>
              <li>1 Hang Squat Snatch</li>
            </ul>
            <p>Rest 60-90" entre sets</p>
            <p>Sets: {getRM(0.71)} - {getRM(0.74)} - {getRM(0.77)} - {getRM(0.80)}</p>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('conditioning')}>
          <h3>CONDITIONING</h3>
          <span>{sections.conditioning ? '▲' : '▼'}</span>
        </div>
        {sections.conditioning && (
          <div className="section-content">
            <p>5 Rounds For Time</p>
            <ul>
              <li>400 m Run</li>
              <li>15 Toes to Bar</li>
              <li>7 Snatches</li>
            </ul>
            <p><strong>Barbell:</strong> 60/42.5 kg</p>
            <p><strong>Score Objetivo:</strong> 18-24 Min</p>
            <p><strong>Objetivos:</strong></p>
            <ul>
              <li>Singles rápidos en los Snatches</li>
              <li>Regular la corrida para aumentar ritmo por ronda</li>
            </ul>
            <p><strong>Activación:</strong></p>
            <ul>
              <li>200 m Run</li>
              <li>6 Toes to Bar</li>
              <li>3 Snatches</li>
              <li>100 m Run</li>
            </ul>
          </div>
        )}
      </div>

      {/* STAMINA CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('stamina')}>
          <h3>STAMINA CONDITIONING</h3>
          <span>{sections.stamina ? '▲' : '▼'}</span>
        </div>
        {sections.stamina && (
          <div className="section-content">
            <p>2 Rounds For Time</p>
            <ul>
              <li>15/12 Cal Assault Bike</li>
              <li>3 Sandbag Bearhug Carry Segments</li>
              <li>15/12 Cal Assault Bike</li>
              <li>5 Rope Climbs</li>
            </ul>
            <p><strong>Objetivos:</strong></p>
            <ul>
              <li>Asalto Bike al 80-85% de esfuerzo</li>
              <li>Ejecutar sandbag y rope climb agitados</li>
            </ul>
            <p><strong>Reemplazos:</strong></p>
            <ul>
              <li>No Assault Bike: 10 Shuttle Runs</li>
              <li>No Sandbag: Kettlebell Front Rack Carry</li>
            </ul>
          </div>
        )}
      </div>

      {/* ACCESSORY */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection('accessory')}>
          <h3>ACCESSORY</h3>
          <span>{sections.accessory ? '▲' : '▼'}</span>
        </div>
        {sections.accessory && (
          <div className="section-content">
            <ul>
              <li>3 x 6/6 Double KB Front Rack Cossack Squats</li>
              <li>4 x 6 Hip Thrust @Heavy</li>
              <li>3 x 8 Back Rack Standing Calf Raises</li>
              <li>4 x 8-10 Glute Ham Raises</li>
            </ul>
            <p><strong>Descanso:</strong> 30" entre rondas, libre entre movimientos</p>
            <p><strong>Nota:</strong> Peso moderado/pesado. Ajustar carga si es necesario</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
