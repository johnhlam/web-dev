import React from 'react';
import './styles.css';
import '../styles.css';

const NavigationSidebar = ({ active = 'explore' }) => (
  <>
    <div className="list-group">
      <span className="list-group-item"><i className="fa-brands fa-twitter"></i></span>
      <a className="list-group-item list-group-item-action" href="home.html">
        <i className="fa-solid fa-house-chimney"></i>
        <span className="d-none d-xl-inline">Home</span>
      </a>
      <a className="list-group-item list-group-item-action active" href="#">
        <i className="fa-solid fa-hashtag"></i>
        <span className="d-none d-xl-inline">Explore</span>
      </a>
      <a className="list-group-item list-group-item-action" href="notifications.html">
        <i className="fa-solid fa-bell"></i>
        <span className="d-none d-xl-inline">Notifications</span>
      </a>
      <a className="list-group-item list-group-item-action" href="messages.html">
        <i className="fa-solid fa-envelope"></i>
        <span className="d-none d-xl-inline">Messages</span>
      </a>
      <a className="list-group-item list-group-item-action" href="bookmarks.html">
        <i className="fa-solid fa-bookmark"></i>
        <span className="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a className="list-group-item list-group-item-action" href="lists.html">
        <i className="fa-solid fa-list"></i>
        <span className="d-none d-xl-inline">Lists</span>
      </a>
      <a className="list-group-item list-group-item-action" href="profile.html">
        <i className="fa-solid fa-user"></i>
        <span className="d-none d-xl-inline">Profile</span>
      </a>
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