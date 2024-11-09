import WishlistForm from "@/components/forms/WishlistForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const WishlistPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-background">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="font-bold text-2xl md:text-5xl">Get early access</h1>
          <p>Join our waitlist and get early access to our product.</p>
          <WishlistForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WishlistPage;
