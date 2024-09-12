import React from "react";
import Layout from "./Layout";
import Heading from "./components/Heading";
import BottomButtons from "./components/BottomButtons";

const Exp = () => {
  return (
    <Layout>
      <div style={{ minHeight: "80vh" }} className="container d-flex flex-column gap-2 justify-content-center align-items-start pt-5">
        <Heading subTitle="My Experience" title="Experience" />

        <div className="row mb-3" style={{ width: "100%" }}>
          <div className="col-12 col-md-2 ">
            <b>Frontend</b>
          </div>
          <div className="col-12 col-md-10">
            <span> ReactJs </span>
            <span> NextJS </span>
          </div>
        </div>

        <BottomButtons backLink="projects" />
      </div>
    </Layout>
  );
};

export default Exp;
