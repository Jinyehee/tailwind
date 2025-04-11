import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
   const [theme, setTheme] = useState("dark");

   useEffect(() => {
      if (theme === "pink") {
         document.documentElement.classList.add("pink");
      } else {
         document.documentElement.classList.remove("pink");
      }
   }, [theme]);

   const changeTheme = () => {
      setTheme((prev) => {
         return prev === "dark" ? "pink" : "dark";
      });
   };

   return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
}
