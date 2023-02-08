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
            <p>Share your work and tag it with <a href="https://twitter.com/hashtag/figbruary" target={'_blank'} className="hashtag">#figbruary</a> and <strong>#figbruary2023</strong></p>
          </HomeBox>
          <HomeBox>
            <h3>❤️ Credit</h3>
            <p><span>Thanks to</span>
              <a href='https://twitter.com/miggi'>Miggi</a>
              <a href='https://twitter.com/rogie'>Rogie</a>
              <a href='https://twitter.com/agusegui'>Agu Seguí</a>
              <a href='https://twitter.com/o_lonks'>Olonks</a>
            </p>
          </HomeBox>
          <HomeBox>
            <h3>🔗 All submissions</h3>
            <p>
              Find all the submissions curated by <strong>John Y</strong>
              <span className="links"><a href="https://app.joyn.xyz/contest/figbruary--787d41d9c35c?">joyn.xyz</a></span>
            </p>
          </HomeBox>
          <HomeBox>
            <h3>🏅 Submit & featured</h3>
            <p>
              If you finished <strong>#figbruary</strong> challenge, please fill out the form. We will select the top 100<super>*</super> to be published.
              <span className="disable">Link open soon...</span>
            </p>
          </HomeBox>
        </HomeWrap>
      </Container>
    </>
  )
}

const HomeWrap = styled.div`
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    margin: auto;
  }
`

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 32px 32px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    margin: 32px auto;
  }
  h3{
    font-size: 20px;
    margin-top: 12px;
  }
  p{
    font-size: 18px;
    line-height: 150%;
    margin: 8px 0;
    opacity: .9;
    letter-spacing: -.1px;
    &.small{
      font-size: 16px;
      color: var(--gray);
    }
  }
  .links{
      margin-left: 8px;
      font-weight: 600;
  }
  .disable{
      margin-left: 8px;
      opacity: .4;
      font-weight: 600;
  }
  span{
    margin-right: 12px;
  }
  a{
    display: inline-flex;
    font-weight: 600;
    text-decoration: underline;
    line-height: 140%;
    color: var(--black);
    margin-right: 12px;
    opacity: .7;
    &.hashtag{
      font-weight: 700;
      opacity:.8;
    }
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