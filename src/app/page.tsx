"use client";

import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import HomePage from "@/components/home/HomePage";
import { BannerData } from "@/constants/DataBanner";
import useCategoryApi from "@/hooks/useCategoryApi";

export default function Home() {
  useCategoryApi();
  const slides =
    BannerData.find((item) => item.keyType === "common")?.items ?? [];

  console.log(process.env.API_URL);

  return (
    <main className="flex flex-col items-center justify-between">
      <Banner slides={slides} />
      <Category />
      <HomePage />
    </main>
  );
}
