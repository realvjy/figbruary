"use client";
import Landing from "@/components/landing";
import PromptCard from "@/components/prompt-folder";
import styled from "styled-components";
import { promptData2023 } from "@/lib/data/PromptsData";
import { promptData2025 } from "@/lib/data/PromptsData2025";
import { getTagClass, getCurrentDate } from "@/lib/utils";

export default function Prompts() {
  // let prompts = promptData2025;
  const day = getCurrentDate().day;
  const month = getCurrentDate().month;

  // Filter out hidden prompts
  let prompts = promptData2025.filter((f) => !f.hidden);

  // Get first prompt of February
  const firstFebPrompt = promptData2025.find(
    (prompt) => prompt.day === 1 && !prompt.hidden
  );

  // Get today's prompt (only in February)
  const todayPrompt = promptData2025.find(
    (prompt) => prompt.day === day && !prompt.hidden && month === 2
  );

  // Get last prompt of February
  const lastFebPrompt = promptData2025.find(
    (prompt) => prompt.day === 28 && !prompt.hidden
  );

  // Determine which special card to show based on month
  let specialCard = null;
  if (month < 2) {
    specialCard = firstFebPrompt;
  } else if (month === 2) {
    specialCard = todayPrompt;
  } else if (month > 2) {
    specialCard = lastFebPrompt;
  }
  return (
    <Section>
      <div className="wrap">
        <h2>Prompts</h2>
        <h4>#figbruary2025</h4>
      </div>
      <div className="p-wrap">
        {todayPrompt && (
          <>
            <PromptCard data={todayPrompt} />
          </>
        )}
        {prompts.map((promptData, i) => {
          if (promptData.hidden) {
            return;
          }
          return (
            <div key={i}>
              <PromptCard data={promptData} />
            </div>
          );
        })}
        <div className="more">More Prompts Coming...</div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  h1 {
  }
  .wrap {
    margin: 0 auto;
    width: 840px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    h2 {
      font-size: 50px;
      font-family: var(--bricolage-font);
      font-weight: 900;
      line-height: 54px;
      letter-spacing: -1.5px;
    }

    h4 {
      font-size: 24px;
      font-weight: 500;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 20px;
    }
  }
  .p-wrap {
    margin: 0 auto;
    width: 880px;
    display: grid;
    gap: 20px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      width: 100%;
    }

    .more {
      text-align: center;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
`;
