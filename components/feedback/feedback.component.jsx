import { Feedback, Main, Card } from "./feedback.styles";
import { FaStar } from "react-icons/fa";

const FeedbackSection = () => (
  <Feedback id="feedback">
    <h2>Testimonials</h2>
    <div className="underline"></div>
    <Main>
      <Card>
        <img
          className="customer"
          src="/elenaMigunov.jpg"
          alt="Elena Migunov - Mirage Cosmetics"
        />
        <p>Elena Migunov - Mirage Cosmetics</p>
        <div className="stars">
          <br />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <br />
        <br />
        <p>
          Super professional, fast, competent and innovative developer. My
          customer base has visibly and noticeably improved after my website has
          been completely revised by him. I can only recommend it. Thank you for
          the kind cooperation 👍
        </p>
        <br />
        <br />
        <br />
        <a
          className="button"
          href="https://www.kosmetikstudio-hildesheim.de/"
          target="_blank"
          rel="noreferrer"
          title="Feedback zum Webdesign"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
      </Card>
      <Card>
        <img
          className="client"
          src="/Nextlevel-logowt.png"
          alt="nextlevel Medienagentur"
        />
        <p>Sascha Napiralla - CEO</p>
        <div className="stars">
          <br />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <br />
        <br />
        <p>
          [...] Clemens Fabig has been working for us as an independent
          freelancer since 2019 and has some Commissioned work carried out. The
          focus was on the development of databases using mysql, programming
          based on Java and JavaScript, and project work using Django.
          <br />
          Mr. Fabig identified himself strongly with the responsibility assumed
          and drove it on assigned tasks always very committed and with a lot of
          initiative. Even under permanent considerable workload and in view of
          new programming challenges Mr. Fabig always had an overview and set
          the right priorities. [...]
        </p>
        <br />
        <br />
        <br />
        <a
          className="button"
          href="http://www.nextlevel-medienagentur.de"
          target="_blank"
          rel="noreferrer"
          title="Feedback Webdevelopment und Webdesign"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
      </Card>
      <Card>
        <img
          className="customer"
          src="/nataliaNezlaw.jpg"
          alt="Elena Migunov - Mirage Cosmetics"
        />
        <p>Natalia Nezlaw - Gynecologist</p>
        <div className="stars">
          <br />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <br />
        <br />
        <p>
          Very easily! The website has become very nice! You're a sweetheart!
          Fast, unbureaucratic, flexible and competent. Very good quality. I am
          very, very happy and will definitely recommend you.
        </p>
        <br />
        <br />
        <br />
        <a
          className="button"
          href="http://www.praxisnatalianezlaw.de/"
          target="_blank"
          rel="noreferrer"
          title="Feeback HTML and CSS Webdesign"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
      </Card>
    </Main>
  </Feedback>
);

export default FeedbackSection;
