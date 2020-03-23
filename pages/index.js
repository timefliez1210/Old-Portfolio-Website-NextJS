import Navbar from "../components/navigation/navigation.component";
import HeaderSection from "../components/header/header.component";
import ServiceSection from "../components/services/services.component";
import CustomerSection from "../components/customers/customer.component";
import FeedbackSection from "../components/feedback/feedback.component";
import ContactSection from "../components/contact/contact.component";
import FooterSection from "../components/footer/footer.component";
import Head from "next/head";

import { Layout } from "../components/style.jsx";

const Home = () => (
  <Layout>
    <Head>
      <title>Freelance Web dev</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
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
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
    <Navbar />
    <HeaderSection />
    {/* <!-- services  --> */}
    <ServiceSection />
    {/* <!-- customer  --> */}
    <CustomerSection />
    {/* <!-- feedback  --> */}
    <FeedbackSection />
    {/* <!-- Contact --> */}
    <ContactSection />
    as
    {/* <!-- footer  --> */}
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

export default Home;
