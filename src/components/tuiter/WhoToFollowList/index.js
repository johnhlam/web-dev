import React from 'react';

import WhoToFollowListItem from './WhoToFollowListItem';
import who from './who';

const WhoToFollowList = () => (
  <ul className="list-group">
     {who.map(who => <WhoToFollowListItem who={who} />)}
  </ul>
  );

export default WhoToFollowList;
