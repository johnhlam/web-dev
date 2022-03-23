import React from 'react';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

import './styles.css';
import '../styles.css';
// TODO: How to convert navitems into Routes instead of anchor links?
// TODO: What's the best way to highlight the correct NavItem? Add it to the store? Is there a way to get the URL?
const NavigationSidebar = ({ active = 'explore' }) => {
  const navItems = useSelector(state => state.navItems);
  return (
    <>
      <div className="list-group">
        <span className="list-group-item"><i className="fa-brands fa-twitter"></i></span>
        {navItems.map(navItem => <NavigationItem key={navItem.text} navItem={navItem} active={active} />)}
        <Link className={`list-group-item list-group-item-action${'more'.localeCompare(active, undefined, { sensitivity: 'accent' }) === 0 ? ' active' : ''}`}
          to="more"> {/* TODO: How do Link tags work, and how are they different than Route tags?*/}
          <span className="fa-stack wd-stack-width">
            <i className="fa-solid fa-circle fa-stack-1x"></i>
            <i className="fa-solid fa-ellipsis fa-stack-1x fa-xs fa-inverse"></i>
          </span>
          <span className="d-none d-xl-inline">More</span>
        </Link>
      </div>
      <button className="btn btn-primary rounded-pill my-2 wd-tweet-button" type="button">Tweet</button>
    </>);
};
export default NavigationSidebar;