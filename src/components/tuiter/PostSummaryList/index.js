import PostSummaryItem from './PostSummaryItem';
import posts from './posts';

const PostSummaryList = () => (
  <div className="list-group justify-content-between">
    {posts.map(post => <PostSummaryItem post={post}/>)}
  </div>
);

export default PostSummaryList;