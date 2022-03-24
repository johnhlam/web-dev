import { useSelector } from 'react-redux';
import PostSummaryItem from './PostSummaryItem';

const PostSummaryList = () => {
  const posts = useSelector(state => state.posts)  
  return (
  <div className="list-group justify-content-between">
    {posts.map(post => <PostSummaryItem key={post.id} post={post}/>)}
  </div>
)};

export default PostSummaryList;