import React from "react";
import "./style.css";

export default function NavLi(props) {
  return (
    <li className="nav-bar-item">
      <a className="nav-bar-link" href={props.linkRoute} target="_blank">
        <i className={props.icon}></i>
        <span className="link-text">{props.linkName}</span>
      </a>
    </li>
  );
}
