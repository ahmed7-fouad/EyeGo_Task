import { cn } from "cn";
import { ArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";

interface cardType{
    title:string,
    analyticsNum:number|string,
    gross:number|string,
    grossState:boolean,
}
const MainCard = ({ title, analyticsNum, gross, grossState }: cardType) => {
  return (
    <section className="rounded-xl border-card-border border-2 bg-card p-5 space-y-3">
      <p className="text-muted text-sm capitalize font-bold">{title}</p>
      <h3 className="text-primary text-4xl font-bold">{analyticsNum}</h3>
      <p
        className={cn(
          "rounded-3xl p-2 text-md  flex items-center gap-2 w-fit font-bold",
          grossState
            ? "text-success-text bg-success-bg"
            : "text-failled-text bg-failled-bg",
        )}
      >
        {grossState ? (
          <ArrowUp className="w-5" />
        ) : (
          <ArrowDown className="w-5"/>
        )}
        {gross}%
      </p>
    </section>
  );
};
export default MainCard;