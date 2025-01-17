"use client";
import Landing from "@/components/landing";
import PromptCard from "@/components/prompt-folder";
import styled from "styled-components";
import { promptData2023 } from "@/lib/data/PromptsData";
export default function Prompts() {
  let prompts = promptData2023;

  return (
    <Section>
      <div className="wrap">
        <h2>Prompts</h2>
        <h4>#figbruary</h4>
      </div>
      <div className="p-wrap">
        {prompts.map((promptData, i) => {
          if (promptData.hidden) {
            return;
          }
          return (
            <>
              <PromptCard data={promptData} />
            </>
          );
        })}
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
      font-size: 44px;
      font-family: var(--bricolage-font);
      font-weight: 700;
    }
  }
  .p-wrap {
    margin: 0 auto;
    width: 840px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
