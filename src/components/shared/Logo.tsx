import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./Icons";

const Logo = () => {
  return (
    <Link href="/" aria-label="Home" className="flex gap-2 items-center group">
      <span className="size-8 bg-primary-foreground rounded-xl flex items-center justify-center">
        <Icons.logo className="w-6 h-6 text-foreground transform transition-transform duration-500 group-hover:rotate-180" />
      </span>
      <span className="text-lg font-bold leading-tight tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
};

export default Logo;
