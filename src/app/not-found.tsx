import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-2">
      <h2 className="font-bold text-3xl leading-tight tracking-tight">
        Not Found
      </h2>
      <p>Could not find requested resource</p>
      <Link href="/" className={cn(buttonVariants())}>
        Return Home
      </Link>
    </section>
  );
}
