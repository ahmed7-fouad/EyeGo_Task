import { ReactNode } from "react"
import {cn} from "@/lib/utils";
const MainBtn=({icon,title , colorClass ,actionFunc}:{icon?:ReactNode,colorClass?:string,title:string,actionFunc?:()=>void})=>{
    return(
        <button type="button" className={cn("rounded-lg py-2 px-4 cursor-pointer flex items-center justify-center gap-3 capitalize border-card-border border-2 hover:text-primary hover:bg-accent hover:border-primary font-medium w-full lg:w-fit r",colorClass)}
        onClick={actionFunc}
        >{icon} {title}</button>
    )
}
export default MainBtn;