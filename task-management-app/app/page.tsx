
"use client"

import SidebarComp from "./components/sidebar/Sidebar"
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";


export default function Home() {
  const [useDarkMode, setUseDarkMode] = useState<boolean>(false);

    return (
      <CustomProvider theme={(useDarkMode ? "dark" : "light")}>
        <div className="poppins flex w-full h-screen">
          <SidebarComp darkMode={useDarkMode} setDarkMode={setUseDarkMode}/>
        </div>
      </CustomProvider>
    );
}
