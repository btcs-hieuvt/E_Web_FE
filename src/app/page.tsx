"use client";

import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import HomePage from "@/components/home/HomePage";
import useCategoryApi from "@/hooks/useCategoryApi";

export default function Home() {
  useCategoryApi();

  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <Category />
      <HomePage />
    </main>
  );
}
