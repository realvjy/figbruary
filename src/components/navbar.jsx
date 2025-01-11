"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Nav() {
  const pathName = usePathname();
  const activePage = (page) => pathName == page;

  return (
    <Section>
      <div className="container-25">
        <Wrapper>
          <LogNHash>
            <FigButton
              href={"/"}
              className={`fig-btn ${activePage("/figbruary") ? "active" : ""}`}
            >
              <img src="/2025/figbruary.svg" />
            </FigButton>
          </LogNHash>
          <NavLinkWrapper className="link-wrapper">
            <NavLink href="/" className={activePage("/") ? "active" : ""}>
              home
            </NavLink>
            <NavLink
              href="/prompts"
              className={activePage("/prompts") ? "active" : ""}
            >
              prompts
            </NavLink>
            <NavLink href="/faq" className={activePage("/faq") ? "active" : ""}>
              FAQs
            </NavLink>
            <V1NavigateLink href="/2023/home">2023</V1NavigateLink>
          </NavLinkWrapper>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 32px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 28px;
  padding: 12px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    .button-wrapper {
      width: 0;
      a {
        transform: translateX(calc(var(--max-width) * -1));
        margin-left: 35px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .link-wrapper {
      margin-top: 20px;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      @media screen and (max-width: 610px) {
        a {
          font-size: 16px;
        }
      }
      .fig-btn {
        padding: 13px 20px;
      }
    }
  }
`;

const NavLinkWrapper = styled.div`
  transition: transform 500ms ease;
  display: flex;
  justify-content: right;

  align-items: center;
  gap: 16px;
  transition: all 1s ease;
  .button-wrapper {
    position: relative;
    max-width: 150px;
    height: 40px;

    width: 100%;
  }
`;
const NavStyle = `
  font-size: 16px;
  color: var(--header-link-color);
  font-weight: 600;
  display: inline-flex;

  transition: transform 500ms cubic-bezier(0.59, 0.03, 0, 1.69);
  &.active {
    font-weight: 500;
    -webkit-text-stroke: 0.6px var(--font-dark);
  }
  &:hover {
    transform: scale(1.07);
  }
`;
const NavLink = styled(Link)`
  ${NavStyle}
`;
const V1NavigateLink = styled.a`
  ${NavStyle}
`;
const FigButton = styled.a`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--header-button-text-color);
  border-radius: 100px;
  text-align: center;
  white-space: nowrap;
  img {
    height: 24px;
    max-width: fit-content;
  }
`;

const LogoWrapper = styled(Link)`
  z-index: 1;
  .logo {
    width: 120px;
    @media screen and (max-width: 910px) {
      width: 60px;
    }
  }
`;

const LogNHash = styled.div`
  display: flex;
  align-items: center;
`;
