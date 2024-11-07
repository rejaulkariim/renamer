import Hero from "@/components/design/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase all your startups on a single page",
  description:
    "All your apps, revenue, and links in one place. The Linktree for entrepreneurs. Create your Indie Page for free!",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
