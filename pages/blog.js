import BlogOverview from "../components/blog_overview/blogOverview.component";

import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Blog = props => (
  <div>
    <Head>
      <title>My Blog and Tutorial. Follow along and become a web dev</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <meta
        name="description"
        content="What is HTML? How to style a website in a modern way? SCSS? You have never heard of it? That's perfectly fine! Follow along and learn everything you need to know."
      />

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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-160662945-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag(){" "}
        {dataLayer.push(arguments)}
        gtag("js", new Date()); gtag("config", "UA-160662945-1");
      </script>
    </Head>

    <BlogOverview {...props} />
  </div>
);

Blog.getInitialProps = async function() {
  const res = await fetch("https://my-awesom-blog-api-crf.herokuapp.com/api/");
  const data = await res.json();

  console.log(data);

  return {
    posts: data
  };
};

export default Blog;
