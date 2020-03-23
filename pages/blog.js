import Navbar from "../components/navigation/navigation.component";
import HeaderSection from "../components/header/header.component";
import FooterSection from "../components/footer/footer.component";
import BlogOverview from "../components/blog_overview/blogOverview.component";
import { Layout } from "../components/style.jsx";

import fetch from "isomorphic-unfetch";

const Blog = props => (
  <Layout>
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

      @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

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
  const res = await fetch("http://127.0.0.1:8000/api/");
  const data = await res.json();

  return {
    posts: data
  };
};

export default Blog;
