import { Icons } from "@/components/shared/Icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            })
          )}
        >
          <Icons.gitHub className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            })
          )}
        >
          <Icons.twitter className="h-3 w-3 fill-current" />

          <span className="sr-only">Twitter</span>
        </div>
      </Link>
    </div>
  );
};

export default SocialLinks;
