'use client'
import styled from 'styled-components'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Main >
      <Header/>
      <Nav />
        {children}
      <Footer/>
      <svg id="texture"><filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="4" stitchTiles="stitch"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter><rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </Main>
  )
  
}

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    z-index: -100;
    background-image: url('/gradient-bg.svg');
    background-repeat: no-repeat;
    background-position: top, bottom;
    background-size: 1400px auto;
    margin-top: -180px;
    filter: blur(12px);
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      background-size: 900px auto;
      margin-top: -70px;
      filter: blur(8px);
    }
  }
  #texture{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -99;
    width: 100%;
    height: calc(100vh + 200px);
    opacity: 0.1;
    pointer-events: none;
    transform: translateY(0px);
    filter: contrast(200%) brightness(200%);
  }
`;
