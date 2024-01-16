"use client";
import styled from "styled-components";
import Layout from "./MainLayout";
import Link from "next/link";
import { getCurrentDatePrompt, promptData2024 } from "@/lib/data/PromptsData";
import { Tag, Tags } from "@/styles/globals/common";

export default function LandingPage() {

  const promptData = getCurrentDatePrompt();


    
  return (
    <Layout>
      {!promptData ? (
        <>
          <TagText className="tag-text">#figbruary2024 coming soon</TagText>
          <SubmitButton
            className="submit-btn"
            href={"https://forms.gle/bi7JFukUq4vAspPJ6"}
          >
            submit prompts
          </SubmitButton>
        </>
      ) : (
        <>
          <PromptInfoCard>
            <div className="date-wrapper">
              <h3>today's</h3>
              <div className="date-text-wrapper">
                <span className="date">{promptData.day}</span>
                <span className="month">feb</span>
              </div>
            </div>
            <div className="info-wrapper">
              <div className="header">
                <h2>
                  let's warm up
                </h2>
                <Tags>
                  {
                    promptData.tag.map((tag)=><Tag>{tag}</Tag>)
                  }
                </Tags>
                
              </div>
              <p className="description">
                {promptData.description}
              </p>
              <div className="credit">
                Credit : <span>{promptData.credit}</span>
              </div>
            </div>
          </PromptInfoCard>
          <DescriptionWrap className="desc-wrap">
            <p className="description">
                {
                  `
                  Figbruary is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.
                  
                  For every 24 hour day within this 696 hour timespan of the month, we have prepared a prompt with instructions for you to design and create.
                  `
                }
            </p>
            <p className="notes">
              PS. - You don’t have to follow the prompt exactly. Or even at all.
            </p>
            <p className="submit-steps">
            Share your work and tag it with <span>#figbruary</span> and <span>#figbruary2024</span>
            </p>
            <div className="credits">
              <h3>
                ❤️ Credits
              </h3>
              <div>
                <a>@realvjy</a>, <a>@miggi</a>
              </div>
            </div>
            <div className="submissions">
              <h3>
                🔗 All submissions
              </h3>
              <p>Find all the submissions curated by John Yjoyn.xyz</p>
            </div>

          </DescriptionWrap>
        </>
      )}
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

const PromptInfoCard = styled.div`
  max-width: 700px;
  padding: 24px;
  width: 100%;
  border-radius: 24px;
  border: 2px solid var(--prompt-card-border);

  background: var(--prompt-card-background);
  transition: box-shadow 400ms var(--prompt-shadow-transition);
  &:hover{
    box-shadow: var(--prompt-card-shadow);
  }
  margin: 40px 0;

  display: flex;
  gap: 24px;
  height: 100%;

  
  .date-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 8px;
    border: 1px solid #000;
    background: var(--prompt-card-date-bg);
    height: 160px;
    border-radius: 12px;
    margin: auto 0;
    h3 {
      border-radius: 12px;
      border: 1px solid #000;
      background: var(--tag-color);
      color: var(--tag-font-color);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 16.8px */
      padding: 4px 8px;
      text-align: center
    }
    .date-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 17px 14px;
      color: var(--font-color);
      text-align: center;
      font-size: 44px;
      font-weight: 800;
      letter-spacing: -0.88px;
      .date {
      }
      .month {
        font-size: 24px;
        font-weight: 800;
      }
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    .credit {
      margin-top: auto;
    }
    .header{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 10px;
    }
    h2 {
      color: #000;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.4px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 10px;
      flex-wrap: wrap;
      span {
        border-radius: 12px;
        border: 1px solid #171717;
        background: var(--prompt-tag-color);
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: -0.13px;
        padding: 4px 8px;
      }
    }
    p {
      margin: 10px 0;
      color: var(--light-font-color);
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
    }
    .credit {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.48px;
      .span {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 725px) {
    padding: 13px;
    margin: 25px 0;
    gap: 12px;
    .date-wrapper{
      height: 126px ;

      .date-text-wrapper{
        padding: 8px;
        font-size: 30px ;
        .month{
          font-size: 20px;
        }
      }
    }
    .info-wrapper{
      h2{
        font-size: 24px ;
        letter-spacing: -0.6px;
      };
      .description{
        font-size: 20px ;
        margin: 4px 0;
        padding-bottom: 14px;
      };
      .credit{
        font-size: 16px;
      };
    }
  };
`;
const DescriptionWrap = styled.div`
  max-width: 500px;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.2px;

  
  .description{
    display: flex;
    flex-direction: column;
    white-space: pre-line;
  }
  .notes{
    margin: 20px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.77);
  }
  .submit-steps{
    margin-top: 50px;
    span{
      font-weight: 700;
    }
  };
  .credits{
    margin-top: 70px;
  };
  .submissions{
    margin-top: 70px;
  }
  h3{
    font-size: 24px;
    font-weight: 600;
  }
  @media screen and (max-width: 725px) {
    max-width: 420px;
    font-size: 16px;
    .submit-steps{
      margin-top: 24px;
    }
    .credits, .submissions{
      text-align: center;
      margin-top: 34px;
      h3{
        font-size: 20px;
      }
    }
  }

`;

