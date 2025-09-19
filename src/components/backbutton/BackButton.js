"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "lucide-react";
export default function BackButton() {
  const router = useRouter();

  return (
    <div className="lg:py-20 md:py-16 py-12">
      <Button
        className={"dark:text-primary text-blue-950 dark:bg-blue-900"}
        variant={"default"}
        onClick={() => router.push("/")}
      >
        <ArrowLeftIcon /> Back
      </Button>
    </div>
  );
}
