import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({
  navItem = {
    faIcon: "fa-hashtag",
    text: "Explore",
    active: true,
    link: "#",
  }, 
  active = 'explore'
}) => (
  <Link
    className={`list-group-item list-group-item-action${navItem.text.localeCompare(active, undefined, { sensitivity: 'accent' }) === 0 ? ' active' : ''}`}
    to={navItem.link}>
    <i className={`fa-solid ${navItem.faIcon}`}></i>
    <span className="d-none d-xl-inline">{navItem.text}</span>
  </Link>
);

export default NavigationItem;