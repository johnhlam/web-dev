import React from 'react';
import { useSelector } from 'react-redux';
import WhoToFollowListItem from './WhoToFollowListItem';

const WhoToFollowList = () => {
  const who = useSelector(state => state.who)
  return (
    <ul className="list-group">
      {who.map(who => <WhoToFollowListItem key={who.handle} who={who} />)}
    </ul>
  );
};

export default WhoToFollowList;
