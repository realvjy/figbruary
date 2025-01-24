"use client";
import styled from "styled-components";
import Layout from "./MainLayout";
import Link from "next/link";
import { promptData2025 } from "@/lib/data/PromptsData2025";

import { getCurrentDatePrompt, getTagClass, getCurrentDate } from "@/lib/utils";
import { Tag, Tags, PromptInfoCard } from "@/styles/globals/common";
import { useEffect, useState } from "react";
import Header from "./header";
import PromptCard from "./prompt-folder";
import Community from "./community";

export default function LandingPage() {
  let promptData = getCurrentDatePrompt(promptData2025);
  const month = getCurrentDate().month;
  if (!promptData) {
    if (month < 2) {
      promptData = promptData2025[1];
    }
    if (month === 3) {
      promptData = promptData2025[29];
    }
  }

  return (
    <>
      <div className="container-25">
        <Header />
        <PCard className="p-card">
          <PromptCard data={promptData} />
        </PCard>
        <DescriptionWrap className="desc-wrap">
          <div className="question border">
            <h3>💡 What is this?</h3>
            <p className="description">
              {`Figbruary is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.
                  
                  For every 24 hour day within this 672 hour timespan of the month, we have prepared a prompt with instructions for you to design and create.
                  `}
            </p>
            <p className="notes">
              PS. - You don’t have to follow the prompt exactly. Or even at all.
            </p>
            <p className="submit-steps">
              Share your work and tag it with <span>#figbruary</span> or{" "}
              <span>#figbruary2025</span>
            </p>
          </div>

          <Community />
          <div className="submissions border">
            <h3>🔗 All submissions</h3>
            <p>
              Community members share not just on X/Twitter, but also on all
              social media platforms including LinkedIn, threads, Twitter,
              Instagram, and more. So, you can find it using the hashtag{" "}
              <strong>#figbruary</strong>.
            </p>
          </div>
        </DescriptionWrap>
      </div>
    </>
  );
}

const PCard = styled.div`
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;
  padding: 0 16px;
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
  max-width: 400px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;

  .border {
    padding: 32px 24px;
    border: 1px solid rgba(150, 150, 150, 0.15);
    border-radius: 32px;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.3);
  }
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
    font-size: 18px;
    font-weight: 00;
  }
  .notes {
    margin: 20px 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.77);
  }
  .submit-steps {
    span {
      font-weight: 700;
    }
  }
  .credits {
    a {
      letter-spacing: -0.5px;
      text-decoration: underline;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
      &:hover {
        opacity: 1;
      }
    }

    p {
      margin-bottom: 18px;
      font-size: 16px;
    }
    .profile {
      display: flex;
      gap: 8px;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      img {
        height: 58px;
        border-radius: 123px;
        border: 1px solid rgba(150, 150, 150, 0.15);
      }

      .com {
        width: 100px;
        font-size: 14px;
        line-height: 120%;
        margin-left: 4px;
        opacity: 0.2;
        font-weight: 600;
      }
    }
  }
  .submissions {
    font-size: 18px;
    strong {
      font-weight: 600;
    }
    p {
      margin-bottom: 12px;
      line-height: 140%;
      font-size: 16px;
    }
    a {
      margin-left: 8px;
      letter-spacing: -0.5px;
      text-decoration: underline;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
      font-size: 16px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 700;
    display: block;
    margin-bottom: 12px;
    font-family: var(--bricolage-font);
    letter-spacing: -1px;
    @media screen and (max-width: 993px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 725px) {
    max-width: 90%;
    font-size: 18px;
    .submit-steps {
      margin-top: 4px;
    }
    .credits,
    .submissions {
      text-align: left;
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
