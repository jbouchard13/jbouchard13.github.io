import React from 'react';
import ProjectPhoto from '../ProjectPhoto';
import ProjectBio from '../ProjectBio';

export default function ProjectWrapper(props) {
  return (
    <div className='row'>
      <h3 className='project-title'>{props.projectTitle}</h3>
      <ProjectPhoto />
      <ProjectBio />
    </div>
  );
}
