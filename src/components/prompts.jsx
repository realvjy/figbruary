"use client";
import { promptData2024 } from "@/lib/data/PromptsData2024";
import styled from "styled-components";
import { Tags, Tag, PromptInfoCard } from "@/styles/globals/common";

import {
  getCurrentDatePrompt,
  getMetaDataForPage,
  getTagClass,
  getTodayDay,
} from "@/lib/utils";

export default function PromptsPage() {
  const promptToday = getTodayDay();

  return (
    <Section>
      <div className="container">
        <Wrapper>
          <h1>prompts</h1>

          <PromptList>
            {promptData2024.map((promptData, i) => {
              if (promptData.hidden) {
                return;
              }
              return (
                <Prompt
                  key={i}
                  className={promptToday == promptData.day ? "today" : ""}
                >
                  <Info>
                    <h2 className="date">{promptData.day} feb.</h2>
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
    </Section>
  );
}

const Section = styled.section``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    text-align: center;
    padding: 80px 0;
  }
  @media screen and (max-width: 725px) {
    h1 {
      font-size: 30px;
      padding: 24px 0;
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
  transition: box-shadow 400ms var(--prompt-shadow-transition);
  &:hover {
    box-shadow: var(--prompt-box-shadow);
  }

  &.today {
    background: var(--background-yellow);
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
  h2 {
    color: var(--font-dark);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.4px;
    -webkit-text-stroke: 1px var(--font-dark);
    @media screen and (max-width: 725px) {
      font-size: 22px;
    }
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

const Info = styled.div``;
