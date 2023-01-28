import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FigmaIcon } from "./icons";
import { Container } from "./ReusableStyles";
export default function HomePage() {

  return (
    <>
      <Container>
        <HomeWrap>
          <HomeBox>
            <p><strong>Figbruary</strong> is an finctional month created by combining Figma + February where you can experiment and design things daily to push the limits</p>
          </HomeBox>
          <HomeBox>
            <p>For every 24 hour day within this 672 hour timespan, we have prepared a prompt with instructions for you to design and create.</p>
            <p className="small">PS. - You don’t have to follow the prompt exactly. Or even at all. </p>
          </HomeBox>
          <HomeBox>
            <p>Share your work and tag it with <strong>#figruary</strong> and <strong>#figruary2023</strong></p>
          </HomeBox>
        </HomeWrap>
      </Container>
    </>
  )
}

const HomeWrap = styled.div`
  padding: 0 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    margin: auto;
  }
`

const HomeBox = styled.div`
  padding: 0 20px;
  margin: 32px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    margin: 32px auto;
  }
  p{
    font-size: 18px;
    line-height: 150%;
    margin: 8px 0;
    &.small{
      font-size: 16px;
      color: var(--gray);
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

const Credit = styled.div`
  p{
    color: var(--black);
    opacity: .4;
  }
`