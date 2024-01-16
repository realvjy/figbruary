"use client";
import { promptData2024 } from "@/lib/data/PromptsData";
import styled from "styled-components";
import { Tags, Tag } from "@/styles/globals/common";
export default function PromptsPage() {

  return (
    <Section>
      <div className="container">
        <Wrapper>
          <h1>prompts</h1>
          <PromptList>
            {promptData2024.map((promptData, i)=>{
              if (promptData.hidden){
                return
              }
              return (<Prompt key={i}>
                <h2 className="date">{promptData.day}.feb</h2>
                <div className="header">
                  <h3>
                    {promptData.name}
                  </h3>
                  <Tags>
                    {promptData.tag.map((tag)=><Tag>
                      {tag}
                    </Tag>)}
                  </Tags>
                </div>
               
                <p className="description">
                  {promptData.description}
                </p>
                <div className="credit-text">
                  credit: <span><a className="underline" href={promptData.creditLink}>@{promptData.credit}</a></span>
                </div>
              </Prompt>)
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
    padding: 100px 0;
  }
  @media screen and (max-width: 725px) {
    h1{
      font-size: 30px;
      padding: 24px 0;
    }
  }
`;
const PromptList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(var(--min-prompt-box-width), 1fr));
`;

const Prompt = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
  border: 1px solid var(--prompt-box-border);
  background: var(--prompt-box-background);
  padding: 17px 26px;
  min-height: 200px;
  transition: box-shadow 400ms var(--prompt-shadow-transition);
  &:hover{
    box-shadow: var(--prompt-box-shadow);
  }

  .header{
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }
  h2 {
    color: var(--font-dark);
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -0.48px;
  }
  h3 {
    color: var(--font-color);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.22px;
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  .description {
    color: var(--light-font-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */
    letter-spacing: -0.18px;
    padding: 5px 0;
  }
  .credit-text {
    color: var(--font-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.28px;
    margin-top: auto;
    span {
      font-weight: 500;
    }
  }
`;

