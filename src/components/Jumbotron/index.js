import React from 'react';
import './style.css';

export default function Jumbotron() {
  return (
    <div className='jumbotron jumbotron-fluid intro'>
      <div className='text-wrapper'>
        <h1 className='jumbo-text'>John Bouchard</h1>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  );
}
