import { Spinner } from "@/components/ui/spinner";
import {cn} from "@/lib/utils" ;
interface spinnerTypes{
    size?:"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"|"4xl"|"5xl"|"6xl"|"7xl"|"8xl"|"9xl";
    colorClass?:string;
}
const spinnerSizes={
    "sm":"size-[0.3rem]",
    "md":"size-[0.5rem]",
    "lg":"size-[0.8rem]",
    "xl":"size-[1rem]",
    "2xl":"size-[1.5rem]",
    "3xl":"size-[1.7rem]",
    "4xl":"size-[2rem]",
    "5xl":"size-[2.5rem]",
    "6xl":"size-[3rem]",
    "7xl":"size-[3.5rem]",
    "8xl":"size-[4rem]",
    "9xl":"size-[5rem]",
}
const Loader=({size="md",colorClass}:spinnerTypes)=>{
    return <Spinner className={cn(spinnerSizes[size],colorClass)} />
}
export default Loader;