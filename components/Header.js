
import styled from "styled-components";
import { Container } from "./ReusableStyles";
export default function Header() {

  return (
    <HeaderContainer>
      <Container>
        <HeadWrap>
          <NavMenu>
            Header

          </NavMenu>
        </HeadWrap>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: relative;
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
    overflow: auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    
   }
`

const HeadWrap = styled.div`
  padding: 0 20px;
`

const NavMenu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  background-color: red;
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