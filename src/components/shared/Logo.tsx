import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./Icons";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold flex items-center gap-1.5 rounded-full group"
    >
      <Icons.logo className="h-5 w-5 text-foreground transform transition-transform duration-500 group-hover:rotate-180" />

      <span className="font-extrabold text-lg mt-0.5 leading-tight tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
};

export default Logo;
