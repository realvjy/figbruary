"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <NoticeText>This is not affiliated with Figma in any way</NoticeText>
          <CreditText>
            2023 - 24, Initiated by{" "}
            <span>
              <a href="https://x.com/@realvjy">@realvjy</a>
            </span>
            , contributed by community
          </CreditText>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 60px 0;
  margin-top: 120px;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const NoticeText = styled.p`
  font-size: 16px;
  color: var(--light-font-color);
`;
const CreditText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-top: 10px;
  letter-spacing: -0.2px;
  span {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
