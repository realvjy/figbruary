"use client";
import styled from "styled-components";
import SvgWrapper from "./svg-wrapper";

export default function Layout({children}) {
  const shapes = [
    "shape1",
    "shape2",
    "shape3",
    "shape4",
    "shape5",
    "shape6",
    "shape7",
  ];
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <img className="logo" src="figbruary-logo.png" />
          <Description className="desc">
            Challenges using Figma for the next 29 days
          </Description>
          {children}
        </Wrapper>
      </div>
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
  padding-top: 100px;
  .fig-icon {
    .background {
      fill: var(--fig-background);
    }
    .stroke {
      fill: var(--fig-stroke);
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
      font-size: 25px;
      max-width: 300px;
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
  font-weight: 500;
  max-width: 565px;
`;
