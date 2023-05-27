import { ReactNode, useState } from "react";
import { ThemeContext } from "context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, toggleTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
