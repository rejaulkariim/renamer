import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/images/rejaul.png"
            alt="rejaul karim"
            height={100}
            width={100}
            priority
            className="rounded-full object-cover object-center border-2"
          />
          <p className="max-w-prose">
            Hi, I’m Rejaul Karim—a software developer and entrepreneur. I’m
            creating this platform to help you beautifully showcase your
            startups and all your creations in one place. Follow me to stay
            updated on this project!{" "}
          </p>
          <span className="h-10 w-10 rounded-full bg-primary shadow border flex items-center justify-center">
            <Link
              href="https://twitter.com/rejaulkarim"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="size-4 text-primary-foreground" />
            </Link>
          </span>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutPage;
