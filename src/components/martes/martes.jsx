import { useState } from 'react';
import '../../styles.css';

function About() {
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isSnatchTechniqueOpen, setIsSnatchTechniqueOpen] = useState(false);
  const [isSnatchOpen, setIsSnatchOpen] = useState(false);
  const [isConditioningOpen, setIsConditioningOpen] = useState(false);
  const [isAccessoryOpen, setIsAccessoryOpen] = useState(false);
  const [oneRepMax, setOneRepMax] = useState(''); 
  const [calculatedWeights, setCalculatedWeights] = useState({
    set52: '',
    set56: '',
    set60: '',
    set64: '',
    set65: '',
    set69: '',
    set73: '',
    set77: '',
    set81: ''
  });

  const toggleSection = (setState) => setState(prevState => !prevState);

  const handle1RMChange = (e) => {
    const value = e.target.value;
    setOneRepMax(value);

    if (value) {
      const rm = parseFloat(value);
      const calculatedWeights = {
        set52: (rm * 0.52).toFixed(2),
        set56: (rm * 0.56).toFixed(2),
        set60: (rm * 0.60).toFixed(2),
        set64: (rm * 0.64).toFixed(2),
        set65: (rm * 0.65).toFixed(2),
        set69: (rm * 0.69).toFixed(2),
        set73: (rm * 0.73).toFixed(2),
        set77: (rm * 0.77).toFixed(2),
        set81: (rm * 0.81).toFixed(2)
      };
      setCalculatedWeights(calculatedWeights);
    }
  };

  return (
    <div className="container">
      <h1>MARTES</h1>

      {/* WARM UP */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsWarmUpOpen)}>
          <h3>SESSION 1: WARM UP</h3>
          <span>{isWarmUpOpen ? '▲' : '▼'}</span>
        </div>
        {isWarmUpOpen && (
          <div className="section-content">
            <p>2 Rounds For Quality</p>
            <ul>
              <li>10/10 Regressed Copenhagen Raise</li>
              <li>8/8 Kettlebell Single Leg Hip Thrust</li>
              <li>6/6 Goblet Lateral Box Step Ups</li>
              <li>8 Yoga Push Ups</li>
              <li>10 Russian KB Swings</li>
              <li>5 Cuban Press Complex (w/Empty Barbell)</li>
            </ul>
          </div>
        )}
      </div>

      {/* SNATCH TECHNIQUE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchTechniqueOpen)}>
          <h3>SNATCH TECHNIQUE</h3>
          <span>{isSnatchTechniqueOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchTechniqueOpen && (
          <div className="section-content">
            <p>4 Sets</p>
            <ul>
              <li>1 Snatch Lift Off</li>
              <li>1 Pausing Squat Snatch (2" Pause At Knee Level)</li>
              <li>1 High Hang Squat Snatch</li>
            </ul>
            <p>Sets: {calculatedWeights.set52} kg - {calculatedWeights.set56} kg - {calculatedWeights.set60} kg - {calculatedWeights.set64} kg</p>
            <p>Introduce tu 1RM para Snatch:</p>
            <input 
              type="number" 
              value={oneRepMax} 
              onChange={handle1RMChange} 
              placeholder="1RM en kg" 
            />
          </div>
        )}
      </div>

      {/* SNATCH */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsSnatchOpen)}>
          <h3>SNATCH</h3>
          <span>{isSnatchOpen ? '▲' : '▼'}</span>
        </div>
        {isSnatchOpen && (
          <div className="section-content">
            <p>OTM 9 Min</p>
            <ul>
              <li>Min 1: 1 Squat Snatch @ {calculatedWeights.set65} kg (65%)</li>
              <li>Min 2: 1 Squat Snatch @ {calculatedWeights.set69} kg (69%)</li>
              <li>Min 3: 1 Squat Snatch @ {calculatedWeights.set73} kg (73%)</li>
              <li>Min 4: 1 Squat Snatch @ {calculatedWeights.set69} kg (69%)</li>
              <li>Min 5: 1 Squat Snatch @ {calculatedWeights.set73} kg (73%)</li>
              <li>Min 6: 1 Squat Snatch @ {calculatedWeights.set77} kg (77%)</li>
              <li>Min 7: 1 Squat Snatch @ {calculatedWeights.set73} kg (73%)</li>
              <li>Min 8: 1 Squat Snatch @ {calculatedWeights.set77} kg (77%)</li>
              <li>Min 9: 1 Squat Snatch @ {calculatedWeights.set81} kg (81%)</li>
            </ul>
          </div>
        )}
      </div>

      {/* CONDITIONING */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsConditioningOpen)}>
          <h3>CONDITIONING</h3>
          <span>{isConditioningOpen ? '▲' : '▼'}</span>
        </div>
        {isConditioningOpen && (
          <div className="section-content">
            <p>10 Rounds For Time</p>
            <ul>
              <li>4 Deadlift</li>
              <li>3 Hang Power Snatches</li>
              <li>2 Overhead Squats</li>
            </ul>
            <p>Barbell - 60/42.5 kg</p>
            <p><strong>NOTAS</strong></p>
            <p><strong>SCORE OBJETIVO</strong>: 5-9 Min</p>
          </div>
        )}
      </div>

      {/* ACCESSORY & MIDLINE */}
      <div className="section-block">
        <div className="section-header" onClick={() => toggleSection(setIsAccessoryOpen)}>
          <h3>ACCESSORY & MIDLINE</h3>
          <span>{isAccessoryOpen ? '▲' : '▼'}</span>
        </div>
        {isAccessoryOpen && (
          <div className="section-content">
            <p>3 Sets For Quality</p>
            <ul>
              <li>10 Flat Bench Dumbbell Fly</li>
              <li>10/10 One Arm Bent Over Row</li>
              <li>10 Supine Leg Raises</li>
              <li>10 Sumo Stance Good Morning</li>
            </ul>
            <p>Rest 30-60" b/t Sets</p>
            <p>All Sets @Moderate Weight</p>
          </div>
        )}
      </div>

      {/* SESSION 2: PRO RUNNER */}
      <div className="section-block">
        <div className="section-header">
          <h3>SESSION 2: PRO RUNNER</h3>
        </div>
        <div className="section-content">
          <p>25 Min Run @Easy Pace</p>
          <p>Rest 5 Min</p>
          <p>OTM 8 Min</p>
          <ul>
            <li>50 m Accelerations**</li>
            <li>Rest/Walk Rest of the minute</li>
          </ul>
          <p><strong>**Aceleraciones sin comienzos explosivos ni frenadas subitas.</strong></p>
          <p><strong>**Accelerations without explosive starts or hard stops.</strong></p>
        </div>
      </div>
    </div>
  );
}

export default About;
