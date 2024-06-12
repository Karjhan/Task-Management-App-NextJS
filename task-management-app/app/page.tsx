
"use client"

import SidebarComp from "./components/sidebar/Sidebar"
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useGlobalContextProvider } from "./contextAPI";


export default function Home() {
  const { isDark } = useGlobalContextProvider();

  return (
    <CustomProvider theme={(isDark ? "dark" : "light")}>
      <div className="poppins flex w-full h-screen">
        <SidebarComp/>
      </div>
    </CustomProvider>
  );
}
