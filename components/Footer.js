import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FigmaIcon } from "./icons";
import { Container } from "./ReusableStyles";
export default function Footer() {

  return (
    <>
      <Container>
        <NavWrap>
          <Credit>
            <p>Not officially related to Figma</p>
            <p>Initiated by <a href="https://twitter.com/realvjy">@realvjy</a>, contributed by community</p>
          </Credit>
        </NavWrap>
      </Container>
    </>
  )
}

const NavWrap = styled.div`
  padding: 0 20px;
  margin-top: 40px;
`

const NavMenu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  height: 125px;
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

const Credit = styled.div`
text-align: center;
  p{
    color: var(--tag-black);
    margin: 8px 0;
    font-weight: 500;
  }
  a{
      font-weight: 700;
      color: var(--black);
    }

`