import { Customers, Display, Prim, Cube, Triangle } from "./customer.styles";

const CustomerSection = () => (
  <Customers>
    <h2>Some of my work</h2>
    <div class="underline-orange"></div>
    <Display>
      <Prim />
      <div>
        <img
          class="display-img"
          src="img/shopRef.jpg"
          alt="ReactJS Reference"
        />
      </div>
      <div>
        <h3>Online Shop</h3>
        <div class="underline-small-orange"></div>
        <p>
          *** Important Note: This is a portfolio project. It's hosted on
          Herokus free service. The initial loading time could be increased
          because Heroku puts the apps in a sleep mode after inactivity.***
          <br />
          <br />
          Technology:
          <br />
          <br />
          Frontend: ReactJS with Redux, Styled Components, Reselect, Saga,
          Hooks, Router, Redux Persist, Redux Thunk and Axios.
          <br />
          <br />
          Database and Authentification: Firebase for authentication and serving
          the shop data.
          <br />
          <br />
          Backend: NodeJS for payment processing via Stripe.
          <br />
          <br />
          I made this project to showcase a modern shop solution on high-end
          enterprise level. This shop is highly customizable and easily
          converted into a mobile application as well. <br />
          Changing the backend to Django or Flask would empower this application
          even more and would lift it to a top nodge shop application.
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
        <a
          class="button"
          href="https://shop-app-portfolio.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
      </div>
    </Display>
    <Display>
      <Triangle />
      <div>
        <img
          class="display-img"
          src="img/crudExampelDjango.jpg"
          alt="Django Reference CRUD"
        />
      </div>
      <div>
        <h3>Coming soon: a simple CRUD example in pure Django</h3>
        <div class="underline-small-orange"></div>
        <p>
          Django is a powerful framework based on python.
          <br />
          <br />
          Sadly my 5 years of Django experience are totally in my former company
          which doesn't allow me to take it with me.
          <br />
          <br />
          At the moment I am developing a simple portfolio exampel to showcase
          some basics. <br />
          <br />
          If you are only interested in the usability of the backend and a proof
          of concept just get in touch with me and I will give you the Github
          repository where some projects are on. Those backends are working but
          are simply not properly styled or APIs without a frontend.a
          <br />
          <br />
          <br />
        </p>
        <a class="button" href="#contact-form">
          <b>Get in touch</b>
        </a>
        <br />
        <br />
        <br />
      </div>
    </Display>

    <Display>
      <Prim />
      <div>
        <img
          class="display-img"
          src="img/mirage.jpg"
          alt="HTML and CSS Reference"
        />
      </div>
      <div>
        <h3>Mirage Cosmetics</h3>
        <div class="underline-small-orange"></div>
        <p>
          My first Client. The studio is right around the building where I grew
          up.
          <br />
          <br />
          Technology:
          <br />
          <br />
          Frontend: Pure HTML(5), CSS(3) and just a little bit of JavaScript
          <br />
          <br />
          Backend: A backend for this simple website wasn't necessary. Even
          Though an online booking tool would have definitely been possible Mrs.
          Migunov decided against it.
          <br />
          <br />
          The objective of this website was clearly structured. The website
          should be rebuilt in the same style of her old website with the
          difference that the contents should be structured SEO friendly.
          Limited through a certain budget we came up with this solution.
          <br />
          The objective obviously succeeded. The Mirage Cosmeticstudio is found
          on google page #1 on every beloved keyword.
          <br />
          <br />
          <br />
        </p>
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
      </div>
    </Display>
    <Display>
      <div>
        <img
          class="display-img"
          src="img/farbenfreak.jpg"
          alt="JavaScript and Webflow Reference"
        />
      </div>
      <div>
        <h3>Farbenfreak</h3>
        <div class="underline-small-orange"></div>
        <p>
          Originally started as a painter but made his way to an informal
          interior architect. <br />
          <br />
          Technology: <br />
          <br />
          Frontend: HTML and CSS code was developed in the Webflow CMS. After
          exporting it the homepage turned into a huge JavaScript playground.
          <br />
          <br />
          Backend: Since it's just a representational website there was no
          backend required. <br />
          <br />
          The objective of the website was to create something special which
          reflects his creativity. Performance and SEO were the 2nd priority.
          <br />
          <br />
          The website was made to bring a "wow-effect" like his work. Tell me:
          <br />
          Did you have a "wow-effect" visiting that website?
          <br />
          <br />
          <br />
        </p>
        <a
          class="button"
          href="https://www.farbenfreak.com/"
          target="_blank"
          rel="noreferrer"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
        <Cube />
      </div>
    </Display>
    <Display>
      <Prim />
      <div>
        <img
          class="display-img"
          src="img/nataliaNezlawPage.jpg"
          alt="Simple online Businesscard"
        />
      </div>
      <div>
        <h3>Natalia Nezlaw - Gynecologist</h3>
        <div class="underline-small-orange"></div>
        <p>
          Natalia Nezlaw is a gynecologist in the south of germany. <br />
          <br />
          Technology: <br />
          <br />
          Frontend: HTML and SCSS.
          <br />
          <br />
          Backend: Since it's just a representational online business card there
          was no backend required. <br />
          <br />
          The objective of the website was to develop a GDPR compliant online
          business card so her clients can check the opening hours and services.
          <br />
          <br />
          The special thing about the website is, that Mrs. Nezlaw had issues
          with the GDPR law in germany so she wanted a simple and fresh design
          without any kind of scripts or cookies to formally represent her
          services.
          <br />
          <br />
          <br />
        </p>
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
      </div>
    </Display>
    <a class="button" href="#contact-form">
      <b>Get in touch</b>
    </a>
    <br />
    <br />
    <br />
  </Customers>
);

export default CustomerSection;
