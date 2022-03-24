import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

import './styles.css';
import '../styles.css';

const NavigationSidebar = () => {
  // Get the currently active tab from the pathname
  const location = useLocation().pathname.split("/");
  const newLocation = location.filter(element => element !== '');
  // If the last item in the path is tuiter, we are on the home page
  const active = newLocation[newLocation.length - 1] === 'tuiter' ? 'home' : newLocation[newLocation.length - 1];

  const navItems = useSelector(state => state.navItems);
  return (
    <>
      <div className="list-group">
        <span className="list-group-item"><i className="fa-brands fa-twitter"></i></span>
        {navItems.map(navItem => <NavigationItem key={navItem.text} navItem={navItem} active={active} />)}
        <Link className={`list-group-item list-group-item-action${'more'.localeCompare(active, undefined, { sensitivity: 'accent' }) === 0 ? ' active' : ''}`}
          to="more">
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