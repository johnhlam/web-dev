import React from 'react';
import '../styles.css';

const WhoToFollowListItem = (
  who = {
    avatarIcon: '/images/nasa-logo.png',
    userName: 'NASA',
    handle: 'NASA'
  }) => (
  <div className="list-group-item">
    <div className="row align-items-center">
      <img className="col-3 rounded-circle" src={who.avatarIcon} />
      <div className="col-6 text-nowrap">
        <span className="fw-bold">{who.userName}</span>
        <span className="fa-stack wd-stack-width">
          <i className="fa-solid fa-circle fa-stack-1x"></i>
          <i className="fa-solid fa-check fa-stack-1x fa-xs fa-inverse"></i>
        </span>
        <div>{who.handle}</div>
      </div>
      <div className="col-3 px-0">
        <button className="btn btn-primary rounded-pill" type="button">Follow</button>
      </div>
    </div>
  </div>
);
export default WhoToFollowListItem;