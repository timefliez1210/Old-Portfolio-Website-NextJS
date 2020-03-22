import { Services, Card, Main } from "./services.styles";
import Link from "next/link";

const ServiceSection = () => (
  <Services>
    <div class="whaticanbuilld">
      <Card>
        <h2>What can I build?</h2>
        <div class="underline-small"></div>
        <br />
        <br />
        <p>
          Simple, fast, good-looking and SEO friendly websites <br />
          <br />
          Simple web applications like a blog
          <br />
          <br />
          High standard, performant and scalable single standing web
          applications <br />
          <br />
          RESTful APIs and the frontends for web and cross platform mobilea
          applications <br />
          <br />
        </p>
        <h3>I am currently available for work</h3>
        <div class="underline-small"></div>
        <br />
        <br />
        <h4>Let's collaborate</h4>
        <br />
        <br />
        <br />
        <Link href="#contact">
          <a class="button">
            <b>Get in touch</b>
          </a>
        </Link>
        <br />
        <br />
        <br />
      </Card>
    </div>
    <div class="orangeline"></div>
    <h2>My services</h2>
    <div class="underline"></div> <br />
    <br /> <br />
    <br />
    <Main>
      <Card>
        <h3>Frontend</h3>
        <div class="underline-small"></div>
        <br />
        <br />
        <p>
          HTML(5)
          <br />
          <br />
          CSS(3) <br />
          <br />
          Sass <br />
          <br />
          JavaScript <br />
          <br />
          ReactJS <br />
          <br />
          React Native
          <br />
          <br />
          SEO
        </p>
      </Card>
      <Card>
        <h3>Backend</h3>
        <div class="underline-small"></div>
        <br />
        <br />
        <p>
          Python <br />
          <br />
          Django <br />
          <br />
          Flask <br />
          <br />
          RESTful web services / APIs <br />
          <br />
          MySQL / PostgreSQL <br />
          <br />
          Firebase <br />
          <br />
          MongoDB
        </p>
      </Card>
      <Card>
        <h3>My Tools</h3>
        <div class="underline-small"></div>
        <br />
        <br />
        <p>
          Visual Studio Code <br />
          <br />
          Git <br />
          <br />
          Github <br />
          <br />
          NPM and Yarn <br />
          <br />
          PIP <br />
          <br />
          SSH <br />
          <br />
          Gulp <br />
          <br />
          Webflow
        </p>
      </Card>
    </Main>
  </Services>
);

export default ServiceSection;
