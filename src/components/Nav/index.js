import React from 'react';
import { Link } from 'react-router-dom';
import links from '../../data/links.json';
import NavLi from '../NavLi';
import './style.css';

export default function Nav() {
  return (
    <nav className='nav-bar'>
      <ul className='nav-bar-nav'>
        <li className='nav-logo'>
          <Link to='/' className='nav-bar-link'>
            <span className='link-text logo-text'>Links</span>
            <i className='fas fa-angle-double-right logo-icon'></i>
          </Link>
        </li>
        {links.map((link) => (
          <NavLi
            linkRoute={link.linkRoute}
            icon={link.icon}
            linkName={link.linkName}
          />
        ))}
        <li className='nav-bar-item'>
          <Link className='nav-bar-link' to='/contacts'>
            <i className='far fa-envelope-open icon'></i>
            <span className='link-text'>Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
