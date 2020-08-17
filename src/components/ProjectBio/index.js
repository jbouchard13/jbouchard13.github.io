import React from 'react';

export default function ProjectBio(props) {
  return (
    <div className='col-sm-8 project-bio'>
      <h4>{props.projectTitle}</h4>
      <p className='project-text'>{props.projectBio}</p>
    </div>
  );
}
