import React from 'react';
import profile from '../../data/profile.json';
import Pic from '../Pic';
import Bio from '../Bio';
import './style.css';

export default function ProfileWrapper() {
  return (
    <div className='row profile-wrapper'>
      <div className='col-sm-8'>
        <Bio bio1={profile.bio1} bio2={profile.bio2} />
      </div>
      <div className='col-sm-4 photo-wrapper'>
        <Pic img={profile.img} alt={profile.alt} />
      </div>
    </div>
  );
}
