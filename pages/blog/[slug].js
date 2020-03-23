import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pslug } = router.query;

  return (
    <div>
      <h1> Hello From Post</h1>
      <p>Post: {pslug}</p>
    </div>
  );
};

export default Post;
