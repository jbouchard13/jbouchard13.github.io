import React from 'react';
import './style.css';

export default function ProjectPhoto(props) {
  return <img className='project-photo' src={props.img} alt={props.alt} />;
}
