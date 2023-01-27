import styled from 'styled-components'
import ReactDOM from 'react-dom';

export default function Layout({ children }) {
  return (
    <Main >
      {children}
      <svg id="texture"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter><rect width="100%" height="100%" filter="url(#noise)"></rect></svg>
    </Main>
  )
}

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  
  #texture{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -99;
    width: 100%;
    height: calc(100vh + 200px);
    opacity: 0.25;
    pointer-events: none;
    transform: translateY(0px);
    filter: contrast(120%) brightness(120%);
  }
`;
