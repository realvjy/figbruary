"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <NoticeText>This is not affiliated with Figma in any way</NoticeText>
          <CreditText>
            2023 - 25, Initiated by{" "}
            <span>
              <a href="https://vjy.me?fig">@realvjy</a>
            </span>
            , contributed by community
          </CreditText>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 40px 0;
  padding-top: 40px;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const NoticeText = styled.p`
  font-size: 13px;
  color: var(--light-font-color);
`;
const CreditText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-top: 10px;
  letter-spacing: -0.4px;
  span {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
