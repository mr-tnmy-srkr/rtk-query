import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { data: posts, error, isLoading, isError } = useGetPostsQuery();
  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {posts?.map((post, idx) => (
          <PostCard key={idx} post={post}/>
        ))}
      </div>
    </div>
  );
};
export default Feed;
