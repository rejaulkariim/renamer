import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../Icons";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = async () => {
  return (
    <header className="h-16 border-b sticky top-0 z-50 w-full border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper className="flex items-center">
        <nav className="flex justify-between items-center w-full">
          <Logo />

          <div className="flex gap-3 items-center">
            <span className="bg-accent px-4 py-1.5 text-xs rounded-full cursor-pointer">
              Beta
            </span>
            {/* <RequestFeatures /> */}

            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
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
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
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

            {/* <ModeToggle /> */}

            <div>
              {/* {session?.user ? (
                <UserAvaters />
              ) : (
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-sm"
                  )}
                >
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
