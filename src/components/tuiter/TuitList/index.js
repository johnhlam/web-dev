import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findAllTuits } from '../../../actions/tuits-action';
import TuitListItem from "./TuitListItem";
import './styles.css';

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), []);

  return (
    <ul className="list-group">
      {
        tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit} />)
      }
    </ul>
  );
};

export default TuitList;