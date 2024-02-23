const PostCard = ({ post, user }) => {
  return (
    <>
      <div className="border">
        <h1 className="text-3xl">{post?.title}</h1>
        <p className="">{post?.body}</p>
      </div>
      <div className="border">
        <h1 className="text-3xl">{user?.name}</h1>
        <p className="">{user?.email}</p>
      </div>
    </>
  );
};
export default PostCard;
