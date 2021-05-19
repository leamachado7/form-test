import React from 'react';
import './index.scss';
import hourglass from '../../assets/hourglass.svg';

export const Loading = () => (
  <div className='loading-wrapper'>
    <div className="loading">
      <p>Loading</p>
      <img className="rotation img-loading" src={hourglass} alt="loading" />
    </div>
  </div>

)

export default Loading;
