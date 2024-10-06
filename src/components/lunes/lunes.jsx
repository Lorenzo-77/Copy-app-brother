import { useState } from 'react';
import '../../styles.css';

function Lunes() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isGymnasticsConditioningOpen, setIsGymnasticsConditioningOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const toggleSection = (setState) => setState(prevState => !prevState);

  return (
    <div className="container">
      <h1>Lunes</h1>

      {/* Sección WARM UP */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsWarmUpOpen)}
          aria-expanded={isWarmUpOpen}
          aria-controls="warm-up-content"
        >
          <h3>WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content" id="warm-up-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Eccentric Ankle Dorsiflexion</li>
              <li>8/8 Single Leg KB Hip Thrust</li>
              <li>10 Bootstraps</li>
              <li>10 Squat Press Out</li>
              <li>8 Yoga Push Ups</li>
              <li>10" Bottom Ring Support Hold + 10" Top Of Ring Support Hold</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección GYMNASTICS CONDITIONING */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsGymnasticsConditioningOpen)}
          aria-expanded={isGymnasticsConditioningOpen}
          aria-controls="gymnastics-conditioning-content"
        >
          <h3>GYMNASTICS CONDITIONING</h3>
          <span>{isGymnasticsConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isGymnasticsConditioningOpen && (
          <div className="section-content" id="gymnastics-conditioning-content">
            <p>OTM 8 Min</p>
            <ul>
              <li>Min 1: 1-2 Legless Rope Climbs</li>
              <li>Min 2: 6-10 Chest-to-Wall Handstand Push Ups</li>
            </ul>
            <h4>NOTAS</h4>
            <p><strong>ESTIMULO & OBJETIVOS</strong></p>
            <p>
              • Combinamos movimientos gimnásticos en un formato de OTM, donde el objetivo será el
              completar la cantidad de repeticiones que elijan hacer en menos de 40 segundos para
              tener la recuperación que deseamos.
            </p>
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
            <p>For Time</p>
            <ul>
              <li>50/35 Cal Ski Erg</li>
              <li>75 Double Unders</li>
              <li>50/35 Cal Row</li>
              <li>75 Double Unders</li>
              <li>50/35 Cal Assault Bike</li>
              <li>75 Double Unders</li>
              <li>50/35 Cal Row</li>
              <li>75 Double Unders</li>
              <li>50/35 Cal Ski Erg</li>
            </ul>
            <h4>NOTAS</h4>
            <p><strong>SCORE OBJETIVO</strong>: 16-22 Min</p>
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
            <p>3 Sets</p>
            <ul>
              <li>8/8 Lateral Goblet Box Step Ups</li>
              <li>8/8 Kettlebell Single Leg Deadlift</li>
              <li>8/8 One Arm Shoulder Press</li>
              <li>8/8 One Arm Upright Row</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* Sección MIDLINE */}
      <div className="section-block">
        <div
          className="section-header"
          onClick={() => toggleSection(setIsMidlineOpen)}
          aria-expanded={isMidlineOpen}
          aria-controls="midline-content"
        >
          <h3>MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content" id="midline-content">
            <p>10 Min For Quality</p>
            <ul>
              <li>15" Hollow Body Flutter Kicks</li>
              <li>15" Side Star Plank (Each Side)</li>
              <li>15" Sorenson Hold</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lunes;
