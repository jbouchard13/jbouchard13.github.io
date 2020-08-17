import React from 'react';
import './style.css';

export default function ProjectBio(props) {
  return (
    <div className='project-bio'>
      <h4 className='project-title bold'>{props.name}</h4>
      <p className='project-text'>
        <span className='bold'>About:</span> {props.description}
      </p>
      <p>
        <span className='bold'>Tech used:</span> {props.tech}
      </p>
      <p>
        <span className='bold'>Role:</span> {props.role}
      </p>
      <p>
        <span className='bold'>See it in action:</span>{' '}
        <a href={props.deployed} target='_blank'>
          Link
        </a>
      </p>
      <p>
        <span className='bold'>See the code:</span>{' '}
        <a href={props.github} target='_blank'>
          Github Repo
        </a>
      </p>
    </div>
  );
}
