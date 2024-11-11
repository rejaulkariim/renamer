import Hero from "@/components/design/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase & boost your startup visibility",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
