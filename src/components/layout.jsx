"use client";
import { syne, inter } from "@/styles/globals/fonts";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Nav from "./navbar";
import styled from "styled-components";
import SvgWrapper from "./svg-wrapper";
export default function PageLayout({ children }) {
  const page = usePathname().split("/").slice(-1);
  const shapes = [
    "shape1",
    "shape2",
    "shape3",
    "shape4",
    "shape5",
    "shape6",
    "$shape7",
    "shape8",
    "$figma",
  ];
  return (
    <>
      <Main className={page + " " + syne.variable + " " + inter.variable}>
        <SvgWrapper svgs={shapes} page={"landing"} />

        <Nav />
        {children}
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.div`
  font-family: var(--inter-font);
`;
