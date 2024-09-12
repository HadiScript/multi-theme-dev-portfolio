import { BiAbacus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme.context";
import Heading from "./components/Heading";
import { skills } from "../constants/skills";

const Tags = ({ skill }: { skill: string }) => {
  const { currentTheme } = useTheme();
  return (
    <span className="py-1 px-2 rounded-3" style={{ border : `1px solid #e4e4e7 `, color: currentTheme.color }}>
      {skill}
    </span>
  );
};

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <div style={{ minHeight: "80vh" }} className="container d-flex flex-column gap-2 justify-content-center align-items-start pt-5">
      <Heading subTitle="Say hello from," title="Syed Hadi Raza" />
      {/* <h1 style={{ fontWeight: "800" }}>I'm Syed Hadi Raza</h1> */}
      <p style={{ color: "#a1a1aa" }}>This is Hadi Raza, a Full Stack Developer who loves Javascript</p>
      <div className="d-flex flex-wrap align-items-center gap-2">
        {skills?.map((x) => (
          <Tags skill={x} />
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-start align-items-center gap-5 mt-5">
        <Link
          style={{ color: currentTheme.color, textDecoration: "none" }}
          to="/about"
          role="button"
          className="d-flex justify-content-start align-items-center gap-2"
        >
          <BiAbacus size={50} />
          <div className="d-flex flex-column justify-content-start align-items-start">
            <b>About me</b>
            <small>My History</small>
          </div>
        </Link>

        <Link
          style={{ color: currentTheme.color, textDecoration: "none" }}
          to="/projects"
          role="button"
          className="d-flex justify-content-start align-items-center gap-2"
        >
          <BiAbacus size={50} />
          <div className="d-flex flex-column justify-content-start align-items-start">
            <b>Projects</b>
            <small>What i've done so far</small>
          </div>
        </Link>

        <Link
          style={{ color: currentTheme.color, textDecoration: "none" }}
          to="/experience"
          role="button"
          className="d-flex justify-content-start align-items-center gap-2"
        >
          <BiAbacus size={50} />
          <div className="d-flex flex-column justify-content-start align-items-start">
            <b>Expereince</b>
            <small>3 years plus</small>
          </div>
        </Link>

        <div role="button" className="d-flex justify-content-start align-items-center gap-2">
          <BiAbacus size={50} />
          <div className="d-flex flex-column justify-content-start align-items-start">
            <b>Resume</b>
            <small>Download my resume</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
