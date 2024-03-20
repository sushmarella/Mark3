import Image from "next/image";
import "./globals.css";
//this imports the sidebar page to use, routing through the components folder
import Sidebar from "../components/sidebar";
import SearchBar from "@/components/searchbar";
import Main from "@/components/main";
import RightBar from "@/components/rightbar";


export default function Home() {
  return (
    <div className="flex bg-main min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col"> {/* Flex container for main content and right bar */}
        <SearchBar />
        {/* Flex row for main content and right bar */}
        <div className="flex flex-1">
          <Main /> {/* Main content grows to fill space */}
          <div className="w-[80px] flex-shrink-0"> {/* Fixed width for RightBar */}
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  ); }