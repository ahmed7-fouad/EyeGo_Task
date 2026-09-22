"use client";
import SideBar from "@/components/dashboard/Sidebar";
import OverviewPage from "@/components/dashboard/OverviewPage";
import {useState} from "react"
const Dashboard=({children})=>{
    const [activeSidebar,setActiveSidebar]=useState(false);
    function handleActiveSidebar(state){
        setActiveSidebar(state);
    }
    
    return (
      <section className="flex items-start">
        <SideBar activeState={activeSidebar} handleActiveSidebar={handleActiveSidebar}/>
        <OverviewPage handleActiveSidebar={handleActiveSidebar} />
      </section>
    );
}
export default Dashboard;