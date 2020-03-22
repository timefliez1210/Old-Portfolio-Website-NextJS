import Navbar from "../components/navigation/navigation.component";
import HeaderSection from "../components/header/header.component";
import ServiceSection from "../components/services/services.component";
import CustomerSection from "../components/customers/customer.component";
import FeedbackSection from "../components/feedback/feedback.component";
import ContactSection from "../components/contact/contact.component";
import FooterSection from "../components/footer/footer.component";

import { Layout } from "./style.jsx";

const Home = () => (
  <div>
    <Navbar />

    <Layout>
      <HeaderSection />

      {/* <!-- services  --> */}

      <ServiceSection />

      {/* <!-- customer  --> */}

      <CustomerSection />

      {/* <!-- feedback  --> */}

      <FeedbackSection />

      {/* <!-- Contact --> */}

      <ContactSection />

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
  </div>
);

export default Home;

{
  /* <script>
      var _CONTENT = [
        "create websites",
        "create web and mobile applications",
        "love everything about code",
        "solve problems."
      ];

      var _PART = 0;


      var _PART_INDEX = 0;


      var _INTERVAL_VAL;


      var _ELEMENT = document.querySelector("#text");


      function Type() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if (text === _CONTENT[_PART]) {
          clearInterval(_INTERVAL_VAL);
          setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 50);
          }, 1000);
        }
      }

      // Implements deleting effect
      function Delete() {
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if (text === "") {
          clearInterval(_INTERVAL_VAL);

          // If last sentence then display the first one, else move to the next
          if (_PART == _CONTENT.length - 1) _PART = 0;
          else _PART++;
          _PART_INDEX = 0;

          // Start to display the next sentence after some time
          setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
          }, 200);
        }
      }

      // Start the typing effect on load
      _INTERVAL_VAL = setInterval(Type, 100);
    </script> */
}
