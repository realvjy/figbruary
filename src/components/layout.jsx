"use client";
import { syne, inter, bricolage } from "@/styles/globals/fonts";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Nav from "./navbar";
import styled from "styled-components";
import SvgWrapper from "@/components/svgs/svg-wrapper";

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
      <Main
        className={
          page +
          " " +
          syne.variable +
          " " +
          bricolage.variable +
          " " +
          inter.variable
        }
      >
        <GradientBox>
          <div className="top-grad"></div>
        </GradientBox>
        <Nav />
        {children}

        <Footer />
        {/* <SvgWrapper svgs={shapes} page={"landing"} /> */}
      </Main>
    </>
  );
}

const Main = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: var(--inter-font);
  z-index: 1;
`;

const GradientBox = styled.div`
  position: absolute;
  content: "";
  width: 700px;
  height: 300px;
  overflow: hidden;
  z-index: -1;
  margin-left: 50%;
  transform: translateX(-50%);
  filter: blur(70px);
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .top-grad {
    width: calc(100% + 100px);
    height: 200px;
    background: conic-gradient(
      from 1.5708rad at 50% 50%,
      var(--background-gray) 0%,
      var(--background-gray) 25%,
      var(--background-gray) 50%,
      #45ffce 50%,
      #006fff 52%,
      #8e68fe 55%,
      #ae75fe 90%,
      #ff2929 97%,
      #ff9a11 98%,
      #ffd711 100%
    );
    width: calc(100% + 100px);
    height: 400px;
    position: absolute;
    left: -50px;
    top: -160px;
    filter: blur(40px);
    overflow: hidden;
  }
`;
