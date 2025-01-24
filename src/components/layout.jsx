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
        <GradientBox></GradientBox>
        <Nav />
        {children}

        <Footer />
        {/* <SvgWrapper svgs={shapes} page={"landing"} /> */}
        <svg id="texture">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      </Main>
    </>
  );
}

const Main = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: var(--inter-font);
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -100;
    background-image: url("/gradient-bg.svg");
    background-repeat: no-repeat;
    background-position: top, bottom;
    background-size: 1200px auto;
    top: -500px;
    filter: blur(12px);
    @media screen and (max-width: 700px) {
      background-size: 900px auto;
      margin-top: -70px;
      filter: blur(8px);
    }
  }
  #texture {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -99;
    width: 100%;
    height: calc(100vh + 200px);
    opacity: 0.2;
    pointer-events: none;
    transform: translateY(0px);
    filter: contrast(120%) brightness(120%);
  }
`;

const GradientBox = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 300px;
  z-index: -1;
  margin-left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .svg-grad {
    height: 200px;
    width: 100%;
    z-index: -100;
    background-image: url("/gradient-bg.svg");
    background-repeat: no-repeat;
    background-position: top, bottom;
    background-size: 1400px auto;
    filter: blur(12px);
    @media screen and (max-width: 720px) {
      background-size: 900px auto;
      margin-top: -70px;
      filter: blur(8px);
    }
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
