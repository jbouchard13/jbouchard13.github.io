import React from 'react';
import ProjectPhoto from '../ProjectPhoto';
import ProjectBio from '../ProjectBio';
import './style.css';

export default function ProjectWrapper(props) {
  return (
    <div className='row project-wrapper'>
      <div className='col-lg-3'>
        <ProjectPhoto img={props.img} alt={props.alt} />
      </div>
      <div className='col-lg-9'>
        <ProjectBio
          name={props.name}
          description={props.description}
          role={props.role}
          tech={props.tech}
          deployed={props.deployed}
          github={props.github}
        />
      </div>
    </div>
  );
}
