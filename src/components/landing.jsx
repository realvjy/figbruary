"use client";
import styled from "styled-components";
import Layout from "./MainLayout";
import Link from "next/link";
import { promptData2024 } from "@/lib/data/PromptsData2024";
import {
  getCurrentDatePrompt,
  getMetaDataForPage,
  getTagClass,
  getTodayDay,
} from "@/lib/utils";
import { Tag, Tags, PromptInfoCard } from "@/styles/globals/common";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [promptData, setPromptData] = useState(null);

  const firstDay = promptData2024[1];

  useEffect(() => {
    const today = getCurrentDatePrompt(promptData2024);
    console.log(today);
    if (today == undefined) {
      setPromptData(firstDay);
    }
  }, [promptData]);

  console.log(promptData);
  return (
    <Layout>
      {/* change this to null */}
      {null && (
        <>
          <PromptInfoCard>
            <div className="date-wrapper">
              <h3 className="shimmer">
                {promptData.day == getTodayDay() ? "Today" : "First"}
              </h3>
              <div className="date-text-wrapper">
                <span className="date">{promptData.day}</span>
                <span className="month">feb</span>
              </div>
            </div>
            <div className="info-wrapper">
              <MetaInfo>
                <div className="header">
                  <h2>{promptData.name}</h2>
                </div>
                <p className="description">{promptData.description}</p>
              </MetaInfo>
              <TagCredit>
                <div className="credit">
                  Credit :{" "}
                  <span>
                    <a href={promptData.creditLink}>@{promptData.credit}</a>
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
            </div>
          </PromptInfoCard>
        </>
      )}
      <DescriptionWrap className="desc-wrap">
        <p className="description">
          {`Figbruary is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.
                  
                  For every 24 hour day within this 696 hour timespan of the month, we have prepared a prompt with instructions for you to design and create.
                  `}
        </p>
        <p className="notes">
          PS. - You don’t have to follow the prompt exactly. Or even at all.
        </p>
        <p className="submit-steps">
          Share your work and tag it with <span>#figbruary</span> and{" "}
          <span>#figbruary2024</span>
        </p>
        <div className="credits">
          <h3>❤️ Credits</h3>
          <div>
            Thanks to <a href="https://x.com/realvjy">@realvjy</a>,
            <a href="https://x.com/miggi">@rogie</a>,
            <a href="https://x.com/miggi">@miggi</a>, & community members
          </div>
        </div>
        <div className="submissions">
          <h3>🔗 All submissions</h3>
          <p>all the submissions will available soon</p>
        </div>
      </DescriptionWrap>
    </Layout>
  );
}

const TagText = styled.h4`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  margin-top: 35px;
  letter-spacing: -0.5px;
`;
const SubmitButton = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
  background: var(--submit-btn-background);
  color: var(--submit-btn-color);
  padding: 22px 49px;
  border-radius: 100px;
  white-space: nowrap;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1);
    transform: rotate(3deg);
  }
`;

const DescriptionWrap = styled.div`
  max-width: 500px;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin-top: 20px;

  .description {
    display: flex;
    flex-direction: column;
    white-space: pre-line;
    line-height: 140%;
  }
  .notes {
    margin: 20px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.77);
  }
  .submit-steps {
    margin-top: 50px;
    span {
      font-weight: 700;
    }
  }
  .credits {
    margin-top: 70px;
    a {
      margin-left: 8px;
      letter-spacing: -0.5px;
      text-decoration: underline;
      font-weight: 600;
      &:first-child {
        margin-left: 0px;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  .submissions {
    margin-top: 70px;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 725px) {
    max-width: 90%;
    font-size: 18px;
    .submit-steps {
      margin-top: 14px;
    }
    .credits,
    .submissions {
      text-align: left;
      margin-top: 34px;
      h3 {
        font-size: 16px;
      }
    }
  }
`;

const TagCredit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  gap: 0;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
