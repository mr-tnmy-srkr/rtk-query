import PostCard from "../components/PostCard";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useGetUsersQuery,
} from "../redux/features/api/baseApi";

const Feed = () => {
  // const { data: posts, error, isLoading, isError } = useGetPostsQuery();
  const { data: post, error, isLoading, isError } = useGetPostByIdQuery(1);
//   const { data: users, error, isLoading, isError } = useGetUsersQuery();
  if (isLoading) return <p className="text-3xl ">Loading...</p>;
  if (!isLoading && isError)
    return <p className="text-3xl ">Something Went wrong...</p>;
  return (
    <div>
      <h1 className="text-6xl pb-8">Post Data/User Data/Post Data by Id</h1>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))} */}

        {<PostCard post={post} />}
        
        {/* {users?.map((user, idx) => (
          <PostCard key={idx} user={user} />
        ))} */}
      </div>
    </div>
  );
};
export default Feed;
