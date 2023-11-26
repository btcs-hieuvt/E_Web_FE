"use client";

import HomePage from "@/components/home/HomePage";
import useCategoryApi from "@/hooks/useCategoryApi";

export default function Home() {
  useCategoryApi();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  );
}
