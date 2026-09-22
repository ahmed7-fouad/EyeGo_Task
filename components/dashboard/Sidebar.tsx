"use client"
import { Grid2x2Check } from "lucide-react";
import { CircleUser } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import { Folders } from "lucide-react";
import { TicketsPlane } from "lucide-react";
import { Settings } from 'lucide-react';
import AsideLink from "./AsideLink";
import {type ReactNode} from "react";
import Logo from "../shared/Logo";
import {useState} from "react";
import { X } from "lucide-react";
import { cn } from "cn";

export interface link{
    id?:number|string,
    icon?:ReactNode,
    title?:string,
    active?:boolean,
    handleActiveLink?:(id:number)=>void,
}
const linksData: link[] = [
    {
        id: 1,
        icon: <Grid2x2Check />,
        title: "overview",
    },
    {
        id: 2,
        icon: <ChartNoAxesColumn />,
        title: "analytics",
        
    },
    {
        id: 3,
        icon: <CircleUser />,
        title: "customers",
        
    },
    {
        id: 4,
        icon: <Folders />,
        title: "orders",
       
    },
    {
        id: 5,
        icon: <TicketsPlane />,
        title: "reports",
        
    },
    {
        id: 6,
        icon: <Settings />,
        title: "settings",
  },
];
const SideBar = ({activeState,handleActiveSidebar}:{activeState:boolean,handleActiveSidebar:(s:boolean)=>void}) => {
  const [activeLinkId,setActiveLinkId]=useState(1);
  function handleActiveLinkId(id:number){
    setActiveLinkId(id);
  }
  return (
    <aside
      className={cn(
        "w-[21rem] h-screen bg-primary-bg p-7 fixed xl:relative xl:translate-x-0! transition-transform duration-200 z-1000",
        activeState ? "translate-x-0" : "translate-x-[-21rem] ",
      )}
    >
      <section className="flex items-center gap-5">
        <X
          className="text-card cursor-pointer visible xl:hidden"
          onClick={() => handleActiveSidebar(false)}
        />
        <Logo />
      </section>
      <section className="mt-10 flex flex-col gap-5">
        {linksData.map((link) => {
          return (
            <AsideLink
              key={link.id}
              id={link.id}
              title={link.title}
              icon={link.icon}
              active={activeLinkId == link.id}
              handleActiveLink={handleActiveLinkId}
            />
          );
        })}
      </section>
    </aside>
  );
};
export default SideBar;
