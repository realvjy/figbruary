"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <NoticeText>This is not affiliated with Figma in any way</NoticeText>
          <CreditText>
            Initiated 2023/24 by{" "}
            <span>
              <a href="https//x.com/@realvjy">@realvjy</a>
            </span>
            , contributed by community
          </CreditText>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: auto;
  margin: 60px 0;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const NoticeText = styled.p`
  font-size: 14px;
  color: var(--light-font-color);
`;
const CreditText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  span {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
