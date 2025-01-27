"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useState } from "react";

export default function Nav() {
  const pathName = usePathname();
  const activePage = (page) => pathName == page;
  const [showArchive, setShowArchive] = useState(false);
  return (
    <Section>
      <div className="nav">
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
              Home
            </NavLink>
            <NavLink
              href="/prompts"
              className={activePage("/prompts") ? "active" : ""}
            >
              Prompts
            </NavLink>
            <NavLink href="/faq" className={activePage("/faq") ? "active" : ""}>
              FAQs
            </NavLink>
            <DropdownWrapper
              onMouseEnter={() => setShowArchive(true)}
              onMouseLeave={() => setShowArchive(false)}
            >
              <NavLink
                href="#"
                className={activePage("/archive") ? "active" : ""}
              >
                Archive
              </NavLink>
              {showArchive && (
                <DropdownContent>
                  <DropdownLink href="/2024/home">2024</DropdownLink>
                  <DropdownLink href="/2023/home">2023</DropdownLink>
                </DropdownContent>
              )}
            </DropdownWrapper>
          </NavLinkWrapper>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 32px 16px;
  position: relative;
  .nav {
    max-width: 440px;
    margin: 0 auto;
  }
  z-index: 999;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: rgba(255, 255, 255, 0.8); */
  background-color: var(--nav-bg);
  border-radius: 32px;
  padding: 20px 30px;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);
  width: 100%;
  box-shadow: var(--nav-shadow);
  background-blend-mode: luminosity;
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
  padding: 20px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    .link-wrapper {
      margin-top: 20px;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      @media screen and (max-width: 610px) {
        margin-top: 10px;
        padding: 0 4px;
        a {
          font-size: 14px;
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
  flex-wrap: wrap;
  justify-content: right;

  align-items: center;
  gap: 12px;
  transition: all 1s ease;
  .button-wrapper {
    position: relative;
    max-width: 150px;
    height: 40px;

    width: 100%;
  }
`;
const NavStyle = `
  font-size: 15px;
  color: var(--header-link-color);
  font-weight: 600;
  display: inline-flex;
  opacity: 0.8;
  transition: transform 500ms cubic-bezier(0.59, 0.03, 0, 1.69);
  &.active {
    font-weight: 00;
    -webkit-text-stroke: 0.6px var(--font-dark);
  }
  &:hover {
    opacity: 0.7;
  }
`;
const NavLink = styled(Link)`
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
    height: 22px;
    max-width: fit-content;
  }
`;

const LogNHash = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 22px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 30px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.5);
  min-width: 120px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  padding: 2px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -15px; // Creates an invisible bridge to the main link
    left: 0;
    width: 100%;
    height: 15px;
    background: transparent;
  }
`;
const DropdownLink = styled(Link)`
  ${NavStyle}
  padding: 8px 16px;
  display: block;
  white-space: nowrap;
  border-radius: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: none;
  }
`;
