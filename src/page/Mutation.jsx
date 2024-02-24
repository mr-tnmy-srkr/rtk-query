import { useForm } from "react-hook-form";
import { useGetPostMutation } from "../redux/features/api/baseApi";

const Rtk = () => {
  const { register, handleSubmit } = useForm();
  const [setPost, { isError, isLoading, data: postData }] =
    useGetPostMutation();

  console.log(postData);
  const onSubmit = (data) => {
    setPost({ title: "This is a title", body: data.post, userId: 55 });
  };
  if (isLoading) return <p className="text-4xl text-white">Loading...</p>;
  if (!isLoading && isError)
    return <p className="text-4xl text-white">Something went wrong...</p>;
  return (
    <div>
      <h1 className="text-6xl pb-8">Mutation</h1>
      <div className="my-10">
        <form
          action=""
          className="flex gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            name=""
            id=""
            className="w-full text-zinc-800 p-3 rounded-md "
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 text-lg p-3 border-md border zinc-300"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
export default Rtk;
