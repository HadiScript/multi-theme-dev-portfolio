export type Theme = {
  background: string;
  color: string;
  light: string;
};


export const themes: Record<string, Theme> = {
  cyan: {
    background: "#083344",
    color: "#FFFFFF",
    light: "#38bdf8"
  },
  grey: {
    background: "#030712",
    color: "#FFFFFF",
    light: "#9ca3af"
  },
  blue: {
    background: "#172554",
    color: "#FFFFFF",
    light: "#60a5fa"
  },
  teal: {
    background: "#042f2e",
    color: "#FFFFFF",
    light: "#2dd4bf"
  }
}