import { Feedback, Main, Card } from "./feedback.styles";

const FeedbackSection = () => (
  <Feedback>
    <h2>Testimonials</h2>
    <div class="underline"></div>
    <Main>
      <Card>
        <img
          class="customer"
          src="img/elenaMigunov.jpg"
          alt="Elena Migunov - Mirage Cosmetics"
        />
        <p>Elena Migunov - Mirage Cosmetics</p>
        <div class="stars">
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
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
          class="button"
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
          class="client"
          src="img/Nextlevel-logowt.png"
          alt="nextlevel Medienagentur"
        />
        <p>Sascha Napiralla - CEO</p>
        <div class="stars">
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
        </div>
        <br />
        <br />
        <p>*** Feedback following the next couple of days ***</p>
        <br />
        <br />
        <br />
        <a
          class="button"
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
          class="customer"
          src="img/nataliaNezlaw.jpg"
          alt="Elena Migunov - Mirage Cosmetics"
        />
        <p>Natalia Nezlaw - Gynecologist</p>
        <div class="stars">
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
          <img class="star" src="img/star.png" alt="Star for service" />
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
          class="button"
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
