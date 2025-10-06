import React from 'react';
import folderIcon from '../../image/folder.png';
import listIcon from '../../image/list.png';
import checkmarkIcon from '../../image/Checkmark.png';

const ProgressBar = ({ estado }) => {
  const getStepStatus = (stepNumber) => {
    switch (estado) {
      case 'Ingresado':
        return {
          step1: 'completed',
          step2: 'current',
          step3: 'pending',
          line1: 'pending',
          line2: 'pending'
        };
      case 'En Evaluación':
        return {
          step1: 'completed',
          step2: 'completed',
          step3: 'current',
          line1: 'completed',
          line2: 'pending'
        };
      case 'Finalizado':
        return {
          step1: 'completed',
          step2: 'completed',
          step3: 'completed',
          line1: 'completed',
          line2: 'completed'
        };
      default:
        return {
          step1: 'pending',
          step2: 'pending',
          step3: 'pending',
          line1: 'pending',
          line2: 'pending'
        };
    }
  };

  const status = getStepStatus();

  const getStepClass = (step) => {
    if (status[step] === 'completed') return 'completed';
    if (status[step] === 'current') return 'current';
    return '';
  };

  const getLineClass = (line) => {
    return status[line] === 'completed' ? 'completed' : '';
  };

  return (
    <div className="progress-container">
      <h3>Estado del Siniestro</h3>
      <div className="progress-bar">
        <div className={`progress-step ${getStepClass('step1')}`}>
          <div className="step-circle">
            <img src={folderIcon} alt="Ingresado" className="step-icon" />
          </div>
          <span>Ingresado</span>
        </div>
        <div className={`progress-line ${getLineClass('line1')}`}></div>
        <div className={`progress-step ${getStepClass('step2')}`}>
          <div className="step-circle">
            <img src={listIcon} alt="En Evaluación" className="step-icon" />
          </div>
          <span>En Evaluación</span>
        </div>
        <div className={`progress-line ${getLineClass('line2')}`}></div>
        <div className={`progress-step ${getStepClass('step3')}`}>
          <div className="step-circle">
            <img src={checkmarkIcon} alt="Finalizado" className="step-icon" />
          </div>
          <span>Finalizado</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;