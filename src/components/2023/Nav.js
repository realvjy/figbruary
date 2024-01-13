'use client'
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./ReusableStyles";
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const pathUrl = path.split("/").slice(-1)[0];
  const page = (p) => {
    return p === pathUrl;
  };

  return (
    <>
      <Container>
        <NavWrap>
          <NavMenu>
            <ul>
              <li>
                <Link scroll={false} passHref href={'/'} >
                  home
                </Link>
              </li>
              <li>
                <Link scroll={false} passHref href={'home'} className={page('home') ? 'active' : ''}>
                  2023
                </Link>
              </li>
              <li>
                <Link scroll={false} passHref href={'prompts'} className={page('prompts') ? 'active' : ''} >
                  prompts
                </Link>
              </li>
            </ul>
          </NavMenu>
        </NavWrap>
      </Container>
    </>
  )
}

const NavWrap = styled.div`
  padding: 0 20px;
  margin-top: 40px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      margin-top: 20px;
  }
`

const NavMenu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  align-items: center;
  justify-content: center;
  h4{
    color: var(--white);
  }
  ul{
    display: flex;
    li{
      a{
        padding: 12px;
        color: var(--white);
        line-height: 30px;
        font-size: 20px;
        &.active{
          font-weight: 800;
          position: relative;
          &::before{
            content: "";
            position: absolute;
            z-index: -100;
            height: 6px;
            width: 6px;
            background: var(--white);
            border-radius: 3px;
            margin-top: 30px;
            margin-left: calc(50% - 15px);
           
          }
        }
      }
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 36px;
  }
  h2{
    font-size: 18px;
    margin-left: 12px;
    line-height: 21px;
    font-family: var(--MonumentExtended);
    font-weight: bold;
  }
`

const Menus = styled.div`
  a{
    margin-left: 24px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
  }
`