const tagClasses={
    "paid":"text-success-text bg-success-bg",
    "pending":"text-pending-text bg-pending-bg",
    "failed":"text-failled-text bg-failled-bg",
}
import {cn} from "@/lib/utils";
const Tag=({state}:{state:string})=>{
    return(
     <section className={cn("rounded-full w-fit font-bold py-2 px-3 mx-auto",tagClasses[state])}>
        {state}
     </section>
    )
}
export default Tag;