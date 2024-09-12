import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useTheme } from "../context/theme.context";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import BottomButtons from "./components/BottomButtons";

const About = () => {
  const { currentTheme } = useTheme();

  return (
    <Layout>
      <div style={{ minHeight: "80vh" }} className="container d-flex flex-column gap-2 justify-content-center align-items-start pt-5">
        <span style={{ backgroundColor: "#e4e4e7", color: "#09090b" }} className="border rounded-2 px-2 py-1">
          About me
        </span>
        <h1 style={{ fontWeight: "800" }}>I'm Syed Hadi Raza</h1>
        <p style={{ color: "#a1a1aa" }}>
          Back in 2019, I decided to get into Web Development field, so started from learning HTML/CSS and Javascript, After it, Started
          learning Full Stack Development, and I’ve had the privilege of building software for Clients,Cycarts, and Hadi E-learning.
        </p>
        <p style={{ color: "#a1a1aa" }}>
          My main focus these days is building a SaaS Product at Hadi E-learning. I most enjoy building software in
          the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time,
          I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.{" "}
        </p>

        <p style={{ color: "#a1a1aa" }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
        </p>
        <p style={{ color: "#a1a1aa" }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
        </p>

        <BottomButtons backLink="" next="Projects" nextLink="projects" />
      </div>
    </Layout>
  );
};

export default About;
