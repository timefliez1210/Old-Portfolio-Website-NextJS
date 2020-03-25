import ServiceSection from "../components/services/services.component";
import CustomerSection from "../components/customers/customer.component";
import FeedbackSection from "../components/feedback/feedback.component";
import ContactSection from "../components/contact/contact.component";

import Head from "next/head";

// import { Layout } from "../components/style.jsx";

const Home = () => (
  <div>
    <Head>
      <title>
        Freelancing Web App and Mobile App Developer - Clemens Fabig
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <meta
        name="description"
        content="Webdesign, Cross Platform Mobile Aplications, Single Standing Web Applications and RESTful API services. More than 20 satisfied customers for static homepages, web applications and cross platform mobile applications."
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
    </Head>
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
  </div>
);

export default Home;
