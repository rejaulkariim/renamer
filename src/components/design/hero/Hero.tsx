import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-background">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex flex-col space-y-4">
              <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl text-balance">
                Showcase & boost your startup visibility
              </h1>
              <p className="text-base md:text-lg font-normal text-foreground">
                Attract new users, and skyrocket your revenue <br /> with your
                personalized indie page.
              </p>
            </div>

            <div>
              <Link
                href="/wishlist"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    className: "button",
                  })
                )}
              >
                Get early access
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-4">
                <Image
                  height={100}
                  width={100}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                  src="/assets/users/user-2.png"
                  alt="user image"
                  draggable={false}
                />
                <Image
                  height={100}
                  width={100}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                  src="/assets/users/user-3.png"
                  alt="user image"
                  draggable={false}
                />
                <Image
                  height={100}
                  width={100}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                  src="/assets/users/user-4.jpg"
                  alt="user image"
                  draggable={false}
                />
                <Image
                  height={100}
                  width={100}
                  className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-background"
                  src="/assets/users/user-5.jpg"
                  alt="user image"
                  draggable={false}
                />
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                </div>

                <p className="text-sm font-medium text-foreground mt-1">
                  <span>100</span> makers join the waitlist
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={"/assets/images/hero.png"}
              alt="hero"
              width={1000}
              height={440}
              className="rounded-lg"
              priority
              draggable="false"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
