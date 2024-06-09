import Image from "next/image";
import styles from "./page.module.css";
import SidebarComp from "./components/dashboard/Sidebar"
import "rsuite/dist/rsuite.min.css";

export default function Home() {
    return (
      <div className="poppins flex w-full h-screen">
        <SidebarComp/>
      </div>
    );
}
