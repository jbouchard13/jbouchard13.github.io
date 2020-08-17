import React from 'react';
import './style.css';

export default function Bio(props) {
  return (
    <div className='bio-wrapper'>
      <p className='bio-text'>{props.bio1}</p>
      <p className='bio-text'>{props.bio2}</p>
    </div>
  );
}
