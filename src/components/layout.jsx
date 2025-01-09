"use client";
import { syne, inter } from "@/styles/globals/fonts";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./navbar";

export default function PageLayout({ children }) {
  const page = usePathname().split("/").slice(-1);
  return (
    <>
      <main className={page + " " + syne.variable + " " + inter.variable}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </main>
    </>
  );
}
