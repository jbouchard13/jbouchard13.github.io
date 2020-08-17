import React from 'react';
import ProfileWrapper from '../ProfileWrapper';
import ProjectsSection from '../ProjectsSection';
import Jumbotron from '../Jumbotron';
import './style.css';

export default function Container() {
  return (
    <div className='main'>
      <Jumbotron />
      <ProfileWrapper />
      <ProjectsSection />
    </div>
  );
}
