import React from 'react';
import ProfileWrapper from '../ProfileWrapper';
import ProjectWrapper from '../ProjectWrapper';
import Jumbotron from '../Jumbotron';
import './style.css';

export default function Container() {
  return (
    <div className='main'>
      <Jumbotron />
      <ProfileWrapper />
    </div>
  );
}
