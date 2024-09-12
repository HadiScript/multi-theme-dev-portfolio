import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme.context";

import "../../assets/title.css";

type thisProps = {
  subTitle: string;
  title?: string;
};

const Heading = ({ subTitle, title }: thisProps) => {
  const { currentTheme } = useTheme();
  return (
    <>
      <span style={{ backgroundColor: "#e4e4e7", color: "#09090b" }} className="border rounded-2 px-2 py-1">
        {subTitle}
      </span>
      <span style={{ fontWeight: "bolder", fontSize : "50px" }}>{title}</span>
    </>
    // <div className="d-flex justify-content-between align-items-center " style={{ width: "100%" }}>
    //   <div className="">
    //     <h1 style={{ backgroundColor: "#e4e4e7", color: "#09090b" }} className="little border rounded-2 px-2 py-1">
    //       {subTitle}
    //     </h1>
    //     <h1 className="big">{title}</h1>
    //   </div>

    //   <div className="d-none d-md-flex justify-content-start align-items-center gap-2">
    //     <Link style={{ color: currentTheme.color, textDecoration: "none" }} role="button" to={"/"}>
    //       Home
    //     </Link>
    //     <span>/</span>
    //     <span>Current</span>
    //   </div>
    // </div>
  );
};

export default Heading;
