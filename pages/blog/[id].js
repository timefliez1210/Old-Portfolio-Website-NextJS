import BlogDetail from "../../components/blog_detail/blogDetail.component";

import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Post = props => {
  return (
    <div>
      <Head>
        <title>{props.post.title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="description" content="Description" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="splash-screen" sizes="512x512" href="/splashscreen.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#001628" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <BlogDetail {...props} />
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-awesom-blog-api-crf.herokuapp.com/api/${id}`
  );
  const post = await res.json();

  console.log(`Fetched show: ${post.name}`);

  return { post };
};

export default Post;

{
  /* <div>
<img src={props.post.picture} />
<h1>{props.post.title}</h1>
<p>{props.post.preview}</p>
<p>{props.post.content}</p>
</div> */
}
