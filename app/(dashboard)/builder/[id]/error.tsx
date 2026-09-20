"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex w-full h-full flex-col items-center justify-center space-y-3">
      <h2 className="text-destructive text-4xl">Something went wrong</h2>
      <Button variant={"secondary"}>
        <Link href={"/"}>Go back to home</Link>
      </Button>
    </div>
  );
}
