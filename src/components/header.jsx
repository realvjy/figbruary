"use client";
import styled from "styled-components";
import { useRive } from "@rive-app/react-canvas"; // Change this import

export default function Header() {
  const { RiveComponent, isLoaded } = useRive({
    src: "/folder-open.riv",
    stateMachines: "State Machine 1",
    autoplay: true, // Add this
  });

  return (
    <Section>
      <Wrapper>
        {/* <RiveComponent
          style={{
            width: "500px",
            height: "300px",
            display: "block", // Add this
            margin: "0 auto", // Add this
          }}
        /> */}
        <Logo>
          <img src="mark-2-2025.png" />
        </Logo>
        <HeadContent>
          <img src="/2025/figbruary.svg" />
          <h1>Challenges using Figma for the next 28 days</h1>
        </HeadContent>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  margin: 80px 0;
  /* min-height: 400px; // Add this */
`;

const Logo = styled.div`
  img {
    width: 128px;
    filter: drop-shadow(2px 44px 18px rgba(22, 39, 126, 0.04))
      drop-shadow(1px 25px 15px rgba(22, 39, 126, 0.14))
      drop-shadow(1px 11px 11px rgba(22, 39, 126, 0.23))
      drop-shadow(0px 3px 6px rgba(22, 39, 126, 0.27));
  }
`;
const Wrapper = styled.div`
  text-align: center;
  position: relative; // Add this
  width: 100%; // Add this
`;
const HeadContent = styled.div`
  margin-top: 20px;
  h1 {
  }
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
