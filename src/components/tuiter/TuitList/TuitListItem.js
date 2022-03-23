import React from "react";
import './styles.css';
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
// TODO: Is this okay?
// TuitListItem component copied from https://github.com/jannunzi/web-dev/blob/master/src/components/a7/Build/TweetList/TweetListItem.js
const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuit = () => {
    dispatch({ type: 'delete-tuit', tuit });
  };

  // TODO: What should I do with the time/title/avatar-image fields of the tuit?
  return (
    <li className="list-group-item">
      <table>
        <tr>
          <td className="align-text-top">
            <img className="rounded-circle wd-avatar-image" src={tuit['logo-image']} />
          </td>
          <td className="ps-3" style={{ width: '100%' }}>
            <i onClick={deleteTuit} className="fa fa-remove fa-pull-right"></i>
            <span className="fw-bold">{tuit.postedBy.username}</span>
            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
            <span className="ms-1 text-secondary">@{tuit.handle}</span>
            <div>
              {tuit.tuit}
            </div>
            {
              tuit.attachments && tuit.attachments.image &&
              <img src={tuit.attachments.image}
                className="mt-2 wd-border-radius-20px"
                style={{ width: "100%" }} />
            }
            {
              tuit.attachments && tuit.attachments.video &&
              <iframe width="100%" height="350px"
                className="mt-2 wd-border-radius-20px"
                style={{ width: "100%" }}
                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            }
            <TuitStats tuit={tuit} />
          </td>
        </tr>
      </table>
    </li>
  );
};

export default TuitListItem;