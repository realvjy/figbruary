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
            <TextWrapper>
              <Question>
                <h3>What is Figbruary?</h3>
                <p>
                  Figbruary is a fictional month created by combining Figma +
                  February where you can experiment and design things daily to
                  push the limits.
                </p>
              </Question>
              <Question>
                <h3>Do I have to follow prompts strictly?</h3>
                <p>No</p>
              </Question>
              <Question>
                <h3>Do I have to post daily?</h3>
                <p>No</p>
              </Question>
              <Question>
                <h3>If I don't understand prompt?</h3>
                <p>
                  It's simple to understand, but if it becomes complex, you can
                  reach out to Twitter or the community."
                </p>
              </Question>
              <Question>
                <h3>Do I have to use Figma?</h3>
                <p>
                  No. Some prompts may be specifically for Figma, but most of
                  them can be used with any graphic apps. You can also use
                  either Sketch, Penpot, or maybe Illustrator. Give it a try;
                  it's fun experimenting.
                </p>
              </Question>
              <Question>
                <h3>Is this a competition?</h3>
                <p>
                  No, it's not a competition. It's just for experimenting,
                  learning, and pushing beyond the boundaries.
                </p>
              </Question>
              <Question>
                <h3>Other prompt based learning events</h3>
                <p>
                  <a href="https://inktober.com/">Inktober</a>
                  <a href="https://genuary.art/">Genuary</a>
                  <a href="https://nodevember.io/">Nodevember</a>
                  <a href="https://sculptober.com/">sculptober</a>
                </p>
              </Question>
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
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    padding: 80px 0;
    text-align: center;
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    -webkit-text-stroke: 0.6px var(--font-dark);
  }

  a {
    display: block;
    text-decoration: underline;
    line-height: 140%;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
  }
`;
