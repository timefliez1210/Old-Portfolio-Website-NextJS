import { Customers, Display, Prim, Cube, Triangle } from "./customer.styles";
import Link from "next/link";

const CustomerSection = () => (
  <Customers id="projects">
    <h2>Some of my work</h2>
    <div className="underline-orange"></div>
    <Display>
      <Prim />
      <div>
        <img
          className="display-img"
          src="/shopRef.jpg"
          alt="ReactJS Reference"
        />
      </div>
      <div>
        <h3>Online Shop</h3>
        <div className="underline-small-orange"></div>
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
          className="button"
          href="https://my-final-version.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          title="React.js with node.js for online shop"
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
          className="display-img"
          src="/crudExampelDjango.jpg"
          alt="Django Reference CRUD"
        />
      </div>
      <div>
        <h3>A Django CRUD example: My website</h3>
        <div className="underline-small-orange"></div>
        <p>
          This website is a small example for a Django (backend) - Next.js
          (frontend) CRUD operation.
          <br />
          <br />
          Technology:
          <br />
          <br />
          Frontend: ReactJS with it's library for Server Side Rendering Next.js,
          Styled Components and Isomorphic Unfetch to call the API.
          <br />
          <br />
          Database: PostgreSQL
          <br />
          <br />
          Backend: A Python based RESTful API made with Django to create, read,
          update and delete the posts.
          <br />
          <br />
          It is still work in progress, especially in terms of performance but
          it I will definetly exchange the dev website with this one within the
          next couple of days.
          <br />
          <br />
          <br />
        </p>

        <a
          href="https://github.com/timefliez1210/portfolio"
          className="button"
          target="_blank"
          rel="noreferrer"
          title="Python Django backend development Reference"
        >
          <b>Visit GitHub</b>
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
          className="display-img"
          src="/mirage.jpg"
          alt="HTML, CSS and SEO Reference"
        />
      </div>
      <div>
        <h3>Mirage Cosmetics</h3>
        <div className="underline-small-orange"></div>
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
          className="button"
          href="https://www.kosmetikstudio-hildesheim.de/"
          target="_blank"
          rel="noreferrer"
          title="HTML, CSS and SEO Reference"
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
          className="display-img"
          src="/farbenfreak.jpg"
          alt="JavaScript and Webflow Reference"
        />
      </div>
      <div>
        <h3>Farbenfreak</h3>
        <div className="underline-small-orange"></div>
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
          className="button"
          href="https://www.farbenfreak.com/"
          target="_blank"
          rel="noreferrer"
          title="JavaScript and Webflow reference - Farbenfreak"
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
          className="display-img"
          src="/nataliaNezlawPage.jpg"
          alt="Webdesign for a simple HTML and CSS3 Homepage"
        />
      </div>
      <div>
        <h3>Natalia Nezlaw - Gynecologist</h3>
        <div className="underline-small-orange"></div>
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
          className="button"
          href="http://www.praxisnatalianezlaw.de/"
          target="_blank"
          rel="noreferrer"
          title="Reference for simple HTML and CSS content"
        >
          <b>Visit</b>
        </a>
        <br />
        <br />
        <br />
      </div>
    </Display>
    <Link href="#contact">
      <a className="button" title="Kontakt zum Webdeveloper">
        <b>Get in touch</b>
      </a>
    </Link>
    <br />
    <br />
    <br />
  </Customers>
);

export default CustomerSection;
