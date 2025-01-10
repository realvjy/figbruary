"use client";
import styled from "styled-components";
import Layout from "./MainLayout";
import Link from "next/link";
import { promptData2024 } from "@/lib/data/PromptsData2024";

import { getCurrentDatePrompt, getTagClass, getCurrentDate } from "@/lib/utils";
import { Tag, Tags, PromptInfoCard } from "@/styles/globals/common";
import { useEffect, useState } from "react";

export default function LandingPage() {
  let promptData = getCurrentDatePrompt(promptData2024);
  const month = getCurrentDate().month;
  if (!promptData) {
    if (month === 2) {
      promptData = promptData2024[1];
    }
    if (month === 3) {
      promptData = promptData2024[29];
    }
  }
  console.log(promptData);

  return (
    <Layout>
      <DescriptionWrap>
        <a className="bt" href="#">
          Prompt Soon
        </a>
        <div className="arc">
          <a href="/2024/home">2024</a> /<a href="/2023/home">2023</a>
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
  display: flex;
  flex-direction: column;

  .bt {
    padding: 12px 20px;
    background: linear-gradient(180deg, #2566ff 0%, #0746d9 100%), #d9d9d9;
    color: #fff;
    box-shadow: 4px 68px 19px rgba(22, 39, 126, 0.01),
      2px 44px 18px rgba(22, 39, 126, 0.04),
      1px 25px 15px rgba(22, 39, 126, 0.14),
      1px 11px 11px rgba(22, 39, 126, 0.23), 0px 3px 6px rgba(22, 39, 126, 0.27);
    border-radius: 111px;
    margin-bottom: 32px;
  }

  .arc {
    font-size: 16px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 12px;
  }
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
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
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
    font-size: 20px;
    strong {
      font-weight: 600;
    }
    p {
      margin-bottom: 12px;
      line-height: 140%;
    }
    a {
      margin-left: 8px;
      letter-spacing: -0.5px;
      text-decoration: underline;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
    }
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
