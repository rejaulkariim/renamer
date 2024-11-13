"use client";

import { Icons } from "@/components/shared/Icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <Icons.back />
    </Button>
  );
};

export default BackButton;
