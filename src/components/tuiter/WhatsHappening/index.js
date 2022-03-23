import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import './styles.css';

// TODO: Make elements match color theme
// TODO: Do I have to add the PFP, placeholder, and other icons?
const WhatsHappening = () => {
  const dispatch = useDispatch();
  let [whatsHappening, setWhatsHappening] = useState('');
  // TODO: Is it possible to make actions async?
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
    // TODO: Should I clear the text area here?
    setWhatsHappening('');
  };
  return (
    <div className="mx-0 my-2">
      <img className="fa-pull-left align-text-top rounded-circle wd-avatar-image" src="/images/react-logo.png" />
      <div className="overflow-hidden">
        <textarea className="w-100 wd-whats-happening" value={whatsHappening} placeholder="What's happening?" onChange={(event) =>
          setWhatsHappening(event.target.value)}>
        </textarea>
        <div>
          <i className="fa-solid fa-image me-3"></i> {/* TODO: Should I make this an anchor (like the settings button), or a clickable i tag, or neither? */}
          <i className="fa-solid fa-chart-line me-3"></i>
          <i className="fa-solid fa-face-smile me-3"></i>
          <i className="fa-solid fa-calendar me-3"></i>
          <button className="btn btn-primary rounded-pill fa-pull-right" onClick={tuitClickHandler}>
            Tuit
          </button>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;