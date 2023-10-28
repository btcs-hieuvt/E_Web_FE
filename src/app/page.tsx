"use client";

import HomePage from "@/components/home/HomePage";
import { useAuthentication } from "@/context/authContext";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  );
}
