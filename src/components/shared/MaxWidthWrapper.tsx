import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("max-w-screen-2xl px-4 md:px-20 h-full w-full", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
