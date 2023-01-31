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
            <p><strong>Figbruary</strong> is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.</p>
          </HomeBox>
          <HomeBox>
            <p>For every 24 hour day within this 672 hour timespan of the month, we have prepared a prompt with instructions for you to design and create.</p>
            <p className="small">PS. - You don’t have to follow the prompt exactly. Or even at all. </p>
          </HomeBox>
          <HomeBox>
            <p>Share your work and tag it with <strong>#figbruary</strong> and <strong>#figbruary2023</strong></p>
          </HomeBox>
          <HomeBox>
            <h3>Credit</h3>
            <p>Thanks to
              <a href='https://twitter.com/miggi'>Miggi</a>
              <a href='https://twitter.com/agusegui'>Agu Seguí</a>
              <a href='https://twitter.com/o_lonks'>Olonks</a>
            </p>
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
  margin: 40px 32px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    margin: 32px auto;
  }
  h3{
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  p{
    font-size: 18px;
    line-height: 150%;
    margin: 8px 0;
    letter-spacing: -.1px;
    &.small{
      font-size: 16px;
      color: var(--gray);
    }
  }
  a{
    display: inline-flex;
    font-weight: 600;
    text-decoration: underline;
    line-height: 140%;
    color: var(--black);
    margin-left: 8px;
    opacity: .7;
    &:hover{
      opacity: 1;
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
  a{
    color: var(--black);
  }
`