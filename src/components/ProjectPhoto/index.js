import React from 'react';

export default function ProjectPhoto(props) {
  return (
    <div className='col-sm-4'>
      <img href={props.projectImg} alt={props.projectText} />
    </div>
  );
}
