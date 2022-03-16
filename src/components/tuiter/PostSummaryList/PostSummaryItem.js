import React from 'react';
import '../styles.css';

const PostSummaryItem = ({
  post = {
    topic: 'Web Development',
    userName: 'ReactJS',
    time: '2h',
    image: './images/react-logo.png', // TODO: Right now, all image paths are relative to the public/tuiter directory. Why?
    title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
  }
}) => (
  <a className="list-group-item list-group-item-action" href="#">
    <div className="row align-items-center">
      <div className="col-10">
        <div className="wd-text-gray">{post.topic}</div>
        <div>
          <span className="fw-bold">{post.userName}</span>
          <span className="fa-stack wd-stack-width">
            <i className="fa-solid fa-circle fa-stack-1x"></i>
            <i className="fa-solid fa-check fa-stack-1x fa-xs fa-inverse"></i>
          </span>
          <span className="wd-text-gray"> - {post.time}</span>
        </div>
        <div className="fw-bold">
          {post.title}
        </div>
      </div>
      <div className="col-2">
        <img className="img-fluid rounded float-end" src={post.image} />
      </div>
    </div>
  </a>
);

export default PostSummaryItem;