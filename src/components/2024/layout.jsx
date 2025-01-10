"use client";
import { syne, inter } from "@/styles/globals/fonts";
import { usePathname } from "next/navigation";
import Footer from "@/components/2024/footer";
import Header from "@/components/2024/navbar";

export default function PageLayout({ children }) {
  const page = usePathname().split("/").slice(-1);
  return (
    <>
      <main className={page + " " + syne.variable + " " + inter.variable}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
