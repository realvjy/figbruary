import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import styled from "styled-components";
import { Container } from 'components/ReusableStyles'



export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <HeadWrap>
            <NavMenu>
              <img src='figbruary-logo.svg' />
              <p>Challenges using Figma for the next 28 days</p>
              <a href="https://twitter.com/realvjy">Follow along</a>
            </NavMenu>
          </HeadWrap>
        </Container>
      </HeaderContainer>
      <Footer />
    </>
  )
}

const HeaderContainer = styled.div`
  position: relative;
  min-height: 1000vh;
  overflow: auto;
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    /* height: 420px; */
    z-index: -100;
    /* background: linear-gradient(180deg,transparent,hsla(0,0%,100%,1) 47.39%,#fff),linear-gradient(90deg,#f9ddf1 .07%,#e5e1ff 16.73%,#daedff 34.48%,#e2f4e3 49.98%,#ebf5d8 66.12%,#faf2da 81.95%,#fbe5d8 99.9%); */
    background-image: url('/gradient-bg.svg');
    background-repeat: no-repeat;
    background-position: top, bottom;
    background-size: 1400px auto;
    /* background: conic-gradient( from 1.5853rad at 50% 50%,var(--black) 0%,var(--black) 25%,var(--black) 50%,#45ffce 50%,#006fff 52%,#9a79fd 55%,#b17bfc 97%,#ff3333 98%,#ff9a11 100% );
    width: calc(100% + 100px);
    height: 200px;
    position: absolute;
    left: -50px;
    top: -60px;
    filter: blur(60px); */
    overflow: unset;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    
   }
`

const HeadWrap = styled.div`
  padding: 0 20px;
  height: 300px;
  margin-top: 400px;
`

const NavMenu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 125px;
  p{
    color: var(--white);
    font-size: 20px;
    
  }
  a{
    font-size: 18px;
    background-color: var(--black);
    color: var(--white);
    padding: 8px 22px;
    border-radius: 12px;
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
