import { ReactNode, createContext, useContext, useState } from "react";
import { themes } from "./theme";

type ProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  handleChange: (color: string) => void;
  currentTheme: any; // You may want to specify the type of currentTheme more accurately
};

export const ThemeContext = createContext<ThemeContextType>({
  handleChange: () => {},
  currentTheme: {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: ProviderProps) => {
  const [whichTheme, setWhichTheme] = useState(localStorage.getItem("mine-theme") || "grey");

  const handleChange = (color: string) => {
    console.log(color, "here is handlechange");
    localStorage.setItem("mine-theme", color);
    setWhichTheme(color);
  };

  return (
    <ThemeContext.Provider
      value={{
        handleChange,
        currentTheme: themes[whichTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
