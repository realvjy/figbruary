"use client";
import { promptData2024 } from "@/lib/data/PromptsData2024";
import styled from "styled-components";
import { Tags, Tag, PromptInfoCard } from "@/styles/globals/common";

import {
  getTagClass,
  getCurrentDate,
} from "@/lib/utils";
import { promptData2023 } from "@/lib/data/PromptsData";
import SvgWrapper from "./svg-wrapper";

export default function PromptsPage() {
  const promptToday = getCurrentDate().day; 
  let prompts = promptData2024.filter((f) => f.hidden === false);

  return (
    <Section>
      <div className="container">
        <Wrapper>
          <PromptHeader>
            <h1>prompts</h1>
            <h2 className="hash-tag">#Figbruary2024</h2>
          </PromptHeader>
          <PromptList>
            {prompts.map((promptData, i) => {
              if (promptData.hidden) {
                return;
              }
              return (
                <Prompt
                  key={i}
                  className={promptToday === promptData.day ? "today" : ""}
                >
                  <Info>
                    <h2 className="date">
                      {promptData.day} feb.{" "}
                      {promptToday === promptData.day ? (
                        <span className="shimmer">today</span>
                      ) : (
                        ""
                      )}
                    </h2>
                    <div className="header">
                      <h3>{promptData.name}</h3>
                    </div>
                    <p className="description">{promptData.description}</p>
                  </Info>
                  <TagCredit>
                    <div className="credit-text">
                      credit:{"  "}
                      <span>
                        <a className="underline" href={promptData.creditLink}>
                          @{promptData.credit}
                        </a>
                      </span>
                    </div>
                    <Tags>
                      {promptData.tag.map((tag) => (
                        <Tag className={getTagClass(tag)} key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </Tags>
                  </TagCredit>
                </Prompt>
              );
            })}
          </PromptList>
        </Wrapper>
      </div>
      <SvgWrapper svgs={["shape1","shape2","shape3","shape4","shape5","shape6","$shape7"]} page={"landing"} />
    </Section>
  );
}

const Section = styled.section``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PromptHeader = styled.div`
  padding: 80px 20px 40px 20px;
  @media screen and (max-width: 725px) {
    padding: 40px 10px 20px 10px;
  }
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    text-align: center;
    @media screen and (max-width: 725px) {
      font-size: 30px;
      padding: 0;
    }
  }

  .hash-tag {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 16px 0;
    line-height: 140%;
    text-align: center;
    @media screen and (max-width: 721px) {
      font-size: 20px;
    }
  }
`;

const PromptList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-prompt-box-width), 1fr)
  );
`;

const Prompt = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 24px;
  border: 1.5px solid var(--prompt-box-border);
  background: var(--prompt-box-background);
  padding: 18px 20px;
  min-height: 220px;
  
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: var(--prompt-shadow-transition);


  &:hover {
    transform: translateY(var(--prompt-card-translate));
    box-shadow: var(--prompt-card-shadow);
  }

  &.today {
    background: var(--bright-yellow);
  }
  @media screen and (max-width: 725px) {
    min-height: 200px;
  }
  .header {
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }

  h3 {
    color: var(--font-color);
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.22px;
    display: flex;
    align-items: center;
    padding: 5px 0;
    -webkit-text-stroke: 0.2px var(--font-dark);
    @media screen and (max-width: 725px) {
      font-size: 22px;
    }
  }
  .description {
    color: var(--light-font-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */
    letter-spacing: -0.28px;
    padding: 5px 0;
    @media screen and (max-width: 725px) {
      font-size: 18px;
    }
  }
`;

const TagCredit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .credit-text {
    color: var(--font-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.28px;
    margin-top: auto;
    span {
      font-weight: 500;
    }
    @media screen and (max-width: 725px) {
      font-size: 14px;
    }
  }
`;

const Info = styled.div`
  h2.date {
    color: var(--font-dark);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.4px;
    -webkit-text-stroke: 1px var(--font-dark);
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
      border-radius: 0px;
      color: #fff;
      background: var(--tag-green);
      font-weight: 600;
      font-size: 16px !important;
      padding: 2px 12px;
      text-transform: uppercase;
      border-left: 6px solid var(--tag-dark-green);
      letter-spacing: 2px;
      -webkit-text-stroke: 0px !important;
    }
    @media screen and (max-width: 725px) {
      font-size: 22px;
    }
  }
`;
