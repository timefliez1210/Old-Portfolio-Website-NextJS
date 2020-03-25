// import App from 'next/app'
import { Layout } from "../components/style.jsx";
import Navbar from "../components/navigation/navigation.component";
import HeaderSection from "../components/header/header.component";
import FooterSection from "../components/footer/footer.component";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <HeaderSection />
      <Component {...pageProps} />
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
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
