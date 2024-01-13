"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Header() {
  const pathName = usePathname();
  const activePage = (page) => pathName == page;

  return (
    <Section>
      <div className="container">
        <Wrapper>
          <LogoWrapper className="logo-wrapper" href={"/"} scroll={false}>
            <img src="/logo.svg" />
          </LogoWrapper>
          <NavLinkWrapper className="link-wrapper">
            <NavLink href="/" className={activePage("/") ? "active" : ""}>
              home
            </NavLink>

            <V1NavigateLink href="/2023/home">2023</V1NavigateLink>
            <NavLink href="/faq" className={activePage("/faq") ? "active" : ""}>
              faq
            </NavLink>
            <FigButton
              href={"/figbruary"}
              className={`fig-btn ${activePage("/figbruary") ? "active" : ""}`}
            >
              # figbruary
            </FigButton>
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
  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .link-wrapper {
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      @media screen and (max-width: 500px) {
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
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
const NavStyle = `
  font-size: 21px;
  color: var(--header-link-color);
  font-weight: 600;
  display: inline-flex;

  transition: transform 500ms cubic-bezier(0.59, 0.03, 0, 1.69);
  &.active {
    font-weight: 800;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
const NavLink = styled(Link)`
  ${NavStyle}
`;
const V1NavigateLink = styled.a`
  ${NavStyle}
`;
const FigButton = styled(NavLink)`
  padding: 13px 33px;
  border: 1px solid black;
  color: var(--header-button-text-color);
  background: var(--header-button-color);
  border-radius: 100px;
  text-align: center;
  white-space: nowrap;
  &:hover {
    transform: scale(1);
    transform: rotate(5deg);
  }
`;

const LogoWrapper = styled(Link)`
  img {
    max-height: 64px;
    height: 100%;
  }
`;
