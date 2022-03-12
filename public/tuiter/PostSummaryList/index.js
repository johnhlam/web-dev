import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

const PostSummaryList = () => `
  <div class="list-group justify-content-between">
    ${posts.map(PostSummaryItem).join('\n')}
  </div>
`;

export default PostSummaryList;