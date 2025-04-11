import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ModeButton() {
   const { changeTheme } = useContext(ThemeContext);

   return (
      <div className="absolute top-4 right-6 z-50">
         <button
            onClick={changeTheme}
            className="px-4 py-2 bg-blue-950 text-white  rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 pink:bg-pink-300"
         >
            change mode
         </button>
      </div>
   );
}
