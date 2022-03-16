import React from 'react';

const NavigationItem = ({
  navItem = {
    faIcon: "fa-hashtag",
    text: "Explore",
    active: true,
    link: "#",
  }
},
  active = 'explore') => (
  <a
    className={`list-group-item list-group-item-action${navItem.text === active ? ' active' : ''}`}
    href={navItem.link}>
    <i className={`fa-solid ${navItem.faIcon}`}></i>
    <span className="d-none d-xl-inline">{navItem.text}</span>
  </a>
);

export default NavigationItem;