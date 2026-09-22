import Link from "next/link"
import { cn } from "cn";
import { type ReactNode } from "react";
import { type link } from "../dashboard/Sidebar";
const AsideLink = ({id, icon, title, active, handleActiveLink }: link) => {
  return (
    <Link href="/" onClick={_=>{
        handleActiveLink(id);
    }
    }
    >
      <section className=" relative group">
        <section
          className={cn(
            "absolute size-full rounded-lg bg-accent -left-1 invisible group-hover:visible",
            active && "visible!",
          )}
        ></section>
        <span
          className={cn(
            "p-2  text-muted bg-primary-bg tracking-wide text-md  hover:bg-secondary-bg group-hover:text-card font-bold capitalize flex items-center gap-5 rounded-lg relative",
            active && "bg-secondary-bg! text-card!",
          )}>
          {icon} {title}
        </span>
      </section>
    </Link>
  );
};
export default AsideLink;