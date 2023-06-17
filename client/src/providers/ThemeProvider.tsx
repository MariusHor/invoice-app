import { createContext } from "react";
import { useLocalStorage } from "hooks";
import { KEY_THEME, THEME_PRIMARY } from "utils/constants";
import { ProviderProps } from "types";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useLocalStorage(KEY_THEME, THEME_PRIMARY);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
