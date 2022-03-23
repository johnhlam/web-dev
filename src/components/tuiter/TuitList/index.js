import React from "react";
import TuitListItem from "./TuitListItem";
import { useSelector } from 'react-redux';
import './styles.css';

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
          <TuitListItem key={tuit._id} tuit={tuit} />)
      }
    </ul>
  );
};

export default TuitList;