import React from 'react';
import './style.css';

export default function Pic(props) {
  return <img className='profile-photo' src={props.img} alt={props.alt} />;
}
