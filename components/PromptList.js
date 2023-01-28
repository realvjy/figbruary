import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./ReusableStyles";
import promptData from "data/PromptsData";

const checkIsToday = (d) => {
  let today = new Date();
  today.setHours(0, 0, 0, 0); //reset time before comparing
  return today.valueOf() === d.valueOf();
}

const PromptList = (props) => {
  let prompts = promptData;

  return (
    <PromptSection>
      <Container>
        <PromptWrapper>
          {
            prompts.map((p, i) => {
              let promptDate = new Date(p.date);
              return (
                <PromptBox key={p.day + i} className="green">
                  <h2>
                    {p.date.split(',').shift()}.
                    {/* To get date only using split */}

                    {
                      checkIsToday(promptDate) ? <TodayTag>`That&apos;s today`</TodayTag> : ''
                    }
                  </h2>
                  <Title>
                    <h3>
                      {p.name}
                    </h3>
                    {
                      p.tag.map((m) => {
                        return (
                          <TypeTag className={i.tag_color} key={m}>{m}</TypeTag>
                        )
                      })
                    }

                  </Title>
                  <p>
                    {p.description}
                  </p>
                  <PCredit>
                    <p>Credit: <a href=""> {p.credit}</a></p>
                  </PCredit>
                </PromptBox>
              )
            })
          }

        </PromptWrapper>
      </Container>
    </PromptSection>
  )
}

export default PromptList;

const PromptSection = styled.div`
  padding: 16px 0;
  margin-top: 40px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      margin-top: 16px;
  }
`
const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PromptBox = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: inset 0px 0px 30px -2px rgba(255, 203, 203, 0.25);
  border-radius: 16px;
  margin: 0 auto;
  max-width: 550px;
  h2{
    font-size: 24px;
    display: flex;
    align-items: center;
  }
`

const TodayTag = styled.div`
  font-size: 12px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 12px;
  display: flex;
`

const TypeTag = styled.div`
  font-size: 12px;
 
`

const PCredit = styled.div`
  p{
    
    font-size: 16px;
    line-height: 20px;
  }
  a{
    font-weight: 700;
  }
`