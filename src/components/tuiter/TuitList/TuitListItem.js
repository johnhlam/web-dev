import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from '../../../actions/tuits-action';
import TuitStats from "./TuitStats";

import './styles.css';
const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <img className="fa-pull-left align-text-top rounded-circle wd-avatar-image" src={tuit['logo-image']} />
      <div className="overflow-hidden ps-3">
        <i onClick={() => deleteTuit(dispatch, tuit)} className="fa fa-remove fa-pull-right wd-clickable"></i>
        <span className="fw-bold">{tuit.postedBy.username}</span>
        {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
        <span className="ms-1 text-secondary">@{tuit.handle}</span>
        <div>
          {tuit.tuit}
        </div>
        {
          tuit.attachments && tuit.attachments.image &&
          <img src={tuit.attachments.image}
            className="mt-2 wd-border-radius-20px w-100" />
        }
        {
          tuit.attachments && tuit.attachments.video &&
          <iframe height="350px"
            className="mt-2 w-100 wd-tuit-video"
            src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        }
        <TuitStats tuit={tuit} />
      </div>
    </li>
  );
};

export default TuitListItem;