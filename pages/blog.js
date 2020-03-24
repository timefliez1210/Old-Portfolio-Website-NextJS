import Navbar from "../components/navigation/navigation.component";
import HeaderSection from "../components/header/header.component";
import FooterSection from "../components/footer/footer.component";
import BlogOverview from "../components/blog_overview/blogOverview.component";

import { Layout } from "../components/style.jsx";

import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Blog = props => (
  <Layout>
    <Head>
      <title>Freelance Web dev</title>
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
    <Navbar />

    <HeaderSection />

    <BlogOverview {...props} />

    <FooterSection />
    <style jsx global>{`
      body::-webkit-scrollbar {
        width: 1em;
      }

      body::-webkit-scrollbar-track {
        background: #001628;
      }

      body::-webkit-scrollbar-thumb {
        background: rgb(255, 138, 0);
        background: linear-gradient(
          166deg,
          rgba(229, 46, 113, 1) 40%,
          rgba(255, 138, 0, 1) 100%
        );
        outline: #001628;
        width: 1em;
        margin: 0 auto;
        border-radius: 20px;
      }

      * {
        font-family: Raleway;
        padding: 0;
        margin: 0;
      }

      body,
      html {
        width: 100vw;
        overflow-x: hidden;
        display: inline-block;
      }

      @media (max-width: 800px) {
        .mobile-hide {
          display: none;
        }
        .main {
          margin: 0;
          width: 100vw;
          text-align: center;
        }
        * {
          margin: 0;
          padding: 0;
        }
      }
    `}</style>
  </Layout>
);

Blog.getInitialProps = async function() {
  const res = await fetch("https://my-awesom-blog-api.herokuapp.com/api/");
  const data = await res.json();

  console.log(data);

  return {
    posts: data
  };
};

export default Blog;
