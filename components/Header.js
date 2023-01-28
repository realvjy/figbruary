
import styled from "styled-components";
import { Container } from "./ReusableStyles";
export default function Header() {

  return (
    <HeaderContainer>
      <Container>
        <HeadWrap>
          <HeadLogo>
            <img src='figbruary-logo.svg' className="logo" />
            <p>Challenges using Figma for the next 28 days</p>
            <a href="https://twitter.com/realvjy">Follow along</a>
          </HeadLogo>
        </HeadWrap>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: relative;
  overflow: auto;
  min-height: 400px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    
   }
`



const HeadWrap = styled.div`
  padding: 0 20px;
`

const HeadLogo = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
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
  .logo{
    height: 32px;
    margin-bottom: 20px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      height: 20px;
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