import React from 'react';
import links from '../../data/links.json';
import NavLi from '../NavLi';
import './style.css';

export default function Nav() {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar-nav'>
        <li className='nav-logo'>
          <a href='/' className='nav-bar-link'>
            <span className='link-text logo-text'>Links</span>
            <i className='fas fa-angle-double-right logo-icon'></i>
          </a>
        </li>
        {links.map((link) => (
          <NavLi
            linkRoute={link.linkRoute}
            icon={link.icon}
            linkName={link.linkName}
          />
        ))}
        <li className='nav-bar-item'>
          <a className='nav-bar-link' href='/contacts'>
            <i className='far fa-envelope-open icon'></i>
            <span className='link-text'>Contacts</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
