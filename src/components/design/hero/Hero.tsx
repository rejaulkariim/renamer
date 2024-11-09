import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-background">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center gap-10">
          <div className="w-1/2 space-y-4">
            <div className="flex flex-col space-y-4">
              <h1 className="tracking-tight font-bold !leading-tight text-foreground text-3xl md:text-6xl">
                Showcase and grow your saas startup
              </h1>
              <p className="text-base md:text-xl font-normal text-muted-foreground">
                Your personal indie page to showcase all your startups <br />{" "}
                and everyting you create.
              </p>
              {/* TODO: add wishlist form */}
            </div>

            <div>
              <Link
                href="/wishlist"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    className: "py-6 text-base font-medium",
                  })
                )}
              >
                Get early access
              </Link>
            </div>
          </div>
          {/* <div className="bg-rose-500 h-44 w-1/2">
            <Image
              src={"/images/hero.png"}
              alt="hero"
              width={1000}
              height={440}
            />
          </div> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
