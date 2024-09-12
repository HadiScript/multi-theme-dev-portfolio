import { ReactNode } from "react";
import { useTheme } from "../context/theme.context";
import Header from "./Header";

import '../assets/mine.css'

const Layout = ({ children }: { children: ReactNode }) => {
  const { currentTheme } = useTheme();

  return (
    <section style={{ backgroundColor: currentTheme.background, color: "#d4d4d8" }} className="custom-cursor">
      <Header />

      {children}

      <div style={{ minHeight: "10vh" }} className="d-flex justify-content-center pt-5 pb-3">
        Copyrights hadiraza.com
      </div>
    </section>
  );
};

export default Layout;
