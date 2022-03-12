import React from 'react';
import NavigationItem from './NavigationItem';

import navItems from './navItems';

import './styles.css';
import '../styles.css';
console.log(navItems);
console.log(navItems.map(navItem => <NavigationItem navItem={navItem} active="explore" />))

const NavigationSidebar = ({ active = 'explore' }) => (
  <>
    <div className="list-group">
      <span className="list-group-item"><i className="fa-brands fa-twitter"></i></span>
      {navItems.map(navItem => <NavigationItem navItem={navItem} active={active} />)}
      <a className="list-group-item list-group-item-action" href="more.html">
        <span className="fa-stack wd-stack-width">
          <i className="fa-solid fa-circle fa-stack-1x"></i>
          <i className="fa-solid fa-ellipsis fa-stack-1x fa-xs fa-inverse"></i>
        </span>
        <span className="d-none d-xl-inline">More</span>
      </a>
    </div>
    <button className="btn btn-primary rounded-pill my-2 wd-tweet-button" type="button">Tweet</button>
  </>);
export default NavigationSidebar;