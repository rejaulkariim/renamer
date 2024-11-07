import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-background">
      <MaxWidthWrapper>
        <div className="mx-auto text-center flex flex-col items-center max-w-2xl space-y-6">
          <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-7xl">
            Showcase and grow your saas startup
          </h1>
          <p className="text-base md:text-xl font-normal text-muted-foreground">
            Your personal indie page to showcase all your startups <br /> and
            everyting you create.
          </p>
          {/* TODO: add wishlist form */}
          {/* <Link
            href="/wishlist"
            className={cn(
              buttonVariants({
                size: "lg",
                className: "py-6 text-base font-medium",
              })
            )}
          >
            Get early access
          </Link> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
