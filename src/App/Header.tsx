import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useTheme } from "../context/theme.context";

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const { handleChange, currentTheme } = useTheme();

  return (
    <div style={{ minHeight: "10vh" }} className="container d-flex justify-content-between algin-items-center py-3">
      <h4>Hadi Raza</h4>
      <span className="d-none d-md-block" onClick={() => setOpen(!open)}>
        You can set the theme :)
      </span>
      <span className="d-block d-md-none" onClick={() => setOpen(!open)}>
        Themes :)
      </span>

      <Offcanvas
        style={{ backgroundColor: currentTheme.background, color: "#d4d4d8", borderLeft: "1px solid white", width: "300px" }}
        placement="end"
        show={open}
        onHide={() => setOpen(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You can set the themes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div onClick={() => handleChange("cyan")}>Cyan</div>
          <div onClick={() => handleChange("grey")}>Grey</div>
          <div onClick={() => handleChange("blue")}>blue</div>
          <div onClick={() => handleChange("teal")}>teal</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
