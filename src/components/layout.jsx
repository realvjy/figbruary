"use client";
import { syne } from "@/styles/globals/fonts";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./navbar";


export default function PageLayout({ children }) {
  const page = usePathname().split("/").slice(-1);
  return (
    <>
      <main className={page + " " + syne.variable}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}

