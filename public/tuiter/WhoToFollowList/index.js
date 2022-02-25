import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';
const WhoToFollowList = () => `
  <ul class="list-group">
     ${who.map(WhoToFollowListItem).join('\n')}
  </ul>`;

export default WhoToFollowList;
