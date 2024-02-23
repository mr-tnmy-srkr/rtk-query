const PostCard = ({ post }) => {
  return (
    <div className="border">
      <h1 className="text-3xl">{post.title}</h1>
      <p className="">{post.body}</p>
    </div>
  );
};
export default PostCard;
