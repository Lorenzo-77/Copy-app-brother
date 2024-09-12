import { useState } from 'react';
import '../../styles.css';

const Footer = () => {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isGymTestOpen, setIsGymTestOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [isMidlineOpen, setIsMidlineOpen] = useState(false);

  const toggleSection = (setState) => setState((prevState) => !prevState);

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
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>10/10 Single Leg Good Morning</li>
              <li>10/10 Squat + Thoracic Extension Rotation</li>
              <li>6/6 One Arm Russian KB Swings</li>
              <li>6/6 One Arm Thrusters</li>
              <li>6/6 One Arm Overhead Squats</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección BOX BACK SQUAT */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsGymTestOpen)}>
          <h3>BOX BACK SQUAT</h3>
          <span>{isGymTestOpen ? '▲' : '▼'}</span>
        </div>
        {isGymTestOpen && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>6 Box Back Squat</li>
            </ul>
            <p>*Subiendo hasta un peso moderado (No es un Máximo)</p>
            <p>Rest 1-2 Min b/t</p>
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
            <p>With a Running Clock</p>
            <p>On the 00:00 - For Time</p>
            <ul>
              <li>3-6-9-12-15 Thrusters</li>
              <li>Chest to Bar Pull Ups</li>
            </ul>

            <p>On the 10:00 - For Time</p>
            <ul>
              <li>18-15-12-9-6-3 Double Under Crossovers</li>
              <li>Toes to Bar</li>
            </ul>
            <p>Barbell - 43/30 kg</p>

            <h4>NOTAS</h4>
            <p><strong>Score Objetivo</strong>: 2-5 Min & 5-8 Min</p>
            <p><strong>Estímulo & Objetivos</strong>: TEST - Realizar este workout como si fuera en competencia.</p>

            <h4>REEMPLAZOS</h4>
            <ul>
              <li>No Double Under Crossovers: 72-60-48-36-24-12 Crossovers</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección ROW CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>ROW CONDITIONING</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <ul>
              <li>2000 m Row @02:30/500</li>
              <li>Rest 1 Min</li>
              <li>3 x 500 m Row @02:30/500</li>
              <li>Rest 1 Min b/t</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sección ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsMidlineOpen)}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{isMidlineOpen ? '▲' : '▼'}</span>
        </div>
        {isMidlineOpen && (
          <div className="section-content">
            <p>3 Rounds For Quality</p>
            <ul>
              <li>5/5 Split Squat Rock Back (3" Hold At Stretch Point)</li>
              <li>10 Alternating Dead Bug (1-2" Hold Each Rep)</li>
              <li>5 Ring Fallouts</li>
              <li>10 Alternating Groiners</li>
              <li>10 Cat Camel + Rock Back</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
