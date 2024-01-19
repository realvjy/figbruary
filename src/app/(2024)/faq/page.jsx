"use client";

import SvgWrapper from "@/components/svg-wrapper";
import styled from "styled-components";

export default function Page() {
  const shapes = ["shape1", "shape2", "shape3", "shape5", "shape6", "$shape7"];
  return (
    <>
      <Section>
        <div className="container">
          <Wrapper>
            <h1>FAQs</h1>
            <TextWrapper className="text-wrap">
              <p>
                <span className="fig">figbruary</span> is an finctional month
                created by combining Figma + February where you can experiment
                and design things daily to push the limits
              </p>
              <p>
                For every 24 hour day within this 696 hour timespan, we have
                prepared a prompt with instructions for you to design and create
              </p>
              <p>
                PS. - You don’t have to follow the prompt exactly. Or even at
                all.{" "}
              </p>
            </TextWrapper>
          </Wrapper>
        </div>
      </Section>

      <SvgWrapper svgs={shapes} page={"landing"} />
    </>
  );
}

const Section = styled.section``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    padding: 80px 0;
  }
  .text-wrap {
    animation: 1s fadeInUp;
  }
  @media screen and (max-width: 590px) {
    .text-wrap {
      margin-top: 20px;
      gap: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const TextWrapper = styled.div`
  margin-top: 75px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  p {
    .fig {
      font-size: 41;
      font-weight: 600;
    }
  }
`;
