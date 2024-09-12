import { FiExternalLink } from "react-icons/fi";
import { projects } from "../constants/projects";
import Layout from "./Layout";
import BottomButtons from "./components/BottomButtons";
import Heading from "./components/Heading";

const Projects = () => {
  return (
    <Layout>
      <div style={{ minHeight: "80vh" }} className="container d-flex flex-column gap-2 justify-content-center align-items-start pt-5">
        <Heading subTitle="What i've done so far" title="Projects" />

        <div className="mb-3 mt-5" style={{ width: "100%" }}>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th className="d-none d-md-block" scope="col">Technologies</th>
                  <th scope="col">Link</th>
                  <th className="d-none d-md-block" scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((x, index) => (
                  <tr className="table-row" key={index}>
                    <th scope="row">{index}</th>
                    <td>{x.title}</td>
                    <td className="d-none d-md-block">
                      {x.technologies?.map((i, index) => (
                        <span key={index}>{i}</span>
                      ))}
                    </td>
                    <td><FiExternalLink /></td>
                    <td className="d-none d-md-block">{x.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <BottomButtons next="Experience" nextLink="experience" backLink="about" />
      </div>
    </Layout>
  );
};

export default Projects;
