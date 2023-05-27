import { createContext } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
