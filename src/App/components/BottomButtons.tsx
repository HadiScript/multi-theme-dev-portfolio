import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme.context";

type thisProps = {
  backLink: string;
  nextLink?: string;
  next?: string;
};

const BottomButtons = ({ backLink, nextLink, next }: thisProps) => {
  const { currentTheme } = useTheme();

  return (
    <div style={{ width: "100%" }} className="d-flex  justify-content-between align-items-center ">
      <Link
        style={{ color: currentTheme.color, textDecoration: "none" }}
        to={`/${backLink}`}
        className="d-flex justify-content-start align-items-center gap-2"
      >
        <FaLongArrowAltLeft size={30} />
        <b>Back to {backLink === "" ? "home" : backLink}</b>
      </Link>
      {nextLink && (
        <Link
          style={{ color: currentTheme.color, textDecoration: "none" }}
          to={`/${nextLink}`}
          className="d-flex justify-content-start align-items-center gap-2"
        >
          <b>{next}</b>
          <FaLongArrowAltRight size={30} />
        </Link>
      )}
    </div>
  );
};

export default BottomButtons;
