import { Contact, Main, Card } from "./contact.styles";

const ContactSection = () => (
  <Contact id="contact">
    <h2>Let's collaborate!</h2>
    <div className="underline"></div>
    <Main>
      <Card>
        <h3>Contact details</h3>
        <div className="underline-small"></div>
        <br />
        <br />
        <p>
          Name: Clemens Fabig
          <br />
          <br />
          email: crfabig@gmail.com <br />
          <br />
          whatsapp: +491520 308 0947
        </p>
        <br />
        <br />
        <br />
        <a className="button" href="mailto:crfabig@gmail.com">
          <b>Write a mail</b>
        </a>
        <br />
        <br />
        <br />
      </Card>
      <Card>
        <h3>Or write me just here</h3>
        <div className="underline-small"></div>
        <br />
        <br />
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label className="form-input-label">
              Name: <input className="form-input" type="text" name="name" />
            </label>
            <br />
            <br />
          </p>
          <p>
            <label className="form-input-label">
              Email:
              <input
                className="form-input"
                type="email"
                name="email"
                required
              />
            </label>
            <br />
            <br />
          </p>
          <p>
            <label className="form-input-label">
              Message:
              <br />
              <br />
              <textarea
                className="text-input"
                name="message"
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">
              <b>Send</b>
            </button>
          </p>
        </form>
      </Card>
    </Main>
    <h2>You can hire me on</h2>
    <div className="underline"></div>
    <br />
    <h3>
      Nevertheless please consider writing me first, either directly or on those
      platforms, so we can make sure that I can perfectly fit your needs and
      prenegotiate the gig I will make there for you.
      <br />
      <br />
      Payments and transactions will be made via Fiverr or Upwork.
    </h3>
    <br />
    <br />
    <Main>
      <div className="mobile-hide"></div>
      <a
        href="https://www.fiverr.com/clemens1210"
        target="_blank"
        rel="noreferrer"
        title="Link zu Fiverr"
      >
        <img className="hire" src="/fiverrlogo.png" alt="Link zu Fiverr" />
      </a>
      <div></div>
      <br />
      <br />
      <a
        href="https://www.upwork.com/"
        target="_blank"
        rel="noreferrer"
        title="Link zu Upwork"
      >
        <img className="hire" src="/upworklogo.png" alt="Link zu Upwork" />
      </a>
      <div className="mobile-hide"></div>
    </Main>
  </Contact>
);

export default ContactSection;
