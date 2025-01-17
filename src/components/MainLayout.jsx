"use client";
import styled from "styled-components";
import SvgWrapper from "@/components/svgs/svg-wrapper";
import Nav from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
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
    <Section>
      <SvgWrapper svgs={shapes} page={"landing"} />
    </Section>
  );
}

const Section = styled.section``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 800ms fadeInUp;
  margin-top: -120px;
  @media screen and (max-width: 721px) {
    margin-top: -30px;
  }
  .fig-icon {
    .background {
      fill: var(--fig-background);
    }
    .stroke {
      fill: var(--fig-stroke);
    }
  }

  .hash-tag {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 16px 0;
    line-height: 140%;
    @media screen and (max-width: 721px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 721px) {
    .desc {
      margin-top: 20px;
      font-size: 30px;
      max-width: 430px;
    }
    .tag-text {
      font-size: 22px;
      font-weight: 400;
      margin-top: 10px;
    }
    .submit-btn {
      font-size: 16px;
      font-weight: 600;
      margin-top: 20px;
      padding: 16px 30px;
    }
    .logo {
      max-width: 500px;
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    .desc {
      font-size: 26px;
      max-width: 320px;
      letter-spacing: -0.2px;
      margin-top: 10px;
    }
    .tag-text {
      font-size: 18px;
    }
    .submit-btn {
      scale: 0.8;
    }
  }
`;
const Description = styled.h3`
  margin-top: 30px;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  letter-spacing: -1.5px;
  font-weight: 400;
  max-width: 565px;
  @media screen and (max-width: 725px) {
    font-size: 24px;
  }
`;
