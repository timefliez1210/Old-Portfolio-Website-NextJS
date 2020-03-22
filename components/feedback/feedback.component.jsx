import { Feedback, Main, Card } from "./feedback.styles";
import { FiStar } from "react-icons/fi";

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
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
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
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </div>
        <br />
        <br />
        <p>*** Feedback following the next couple of days ***</p>
        <br />
        <br />
        <br />
        <a
          className="button"
          href="http://www.nextlevel-medienagentur.de"
          target="_blank"
          rel="noreferrer"
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
          <FiStar /> <FiStar /> <FiStar /> <FiStar />
          <FiStar />
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
