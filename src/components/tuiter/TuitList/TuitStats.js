import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from '../../../actions/tuits-action';

import './styles.css';

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const {
    stats: {
      comments,
      retuits,
      likes,
      dislikes
    },
    stats,
    liked,
    disliked,
  } = tuit;

  return (<div className="row mt-2">
    <div className="col">
      <i className="fas fa-comment me-2"></i>
      {comments}
    </div>
    <div className="col">
      <i className="fas fa-retweet me-2"></i>
      {retuits}
    </div>
    <div className="col wd-clickable" onClick={() => {
      const newLikes = liked ? likes - 1 : likes + 1;
      updateTuit(dispatch, { ...tuit, stats: { ...stats, likes: newLikes }, liked: !liked });
    }}>
      <i className={`fas fa-heart me-2 ${liked ? "wd-color-red" : "wd-color-white"}`}></i>
      {likes}
    </div>
    <div className="col wd-clickable" onClick={() => {
      const newDislikes = disliked ? dislikes - 1 : dislikes + 1;
      updateTuit(dispatch, { ...tuit, stats: { ...stats, dislikes: newDislikes }, disliked: !disliked });
    }}>
       <i className={`fas fa-heart-crack me-2 ${disliked ? "wd-color-red" : "wd-color-white"}`}></i>
      {dislikes}
    </div>
    <div className="col">
      <i className="fas fa-external-link-alt me-2"></i>
    </div>
  </div>);
};

export default TuitStats;