'use client'
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 620px;
  padding: 0px;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding:  0 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Button = styled.button`
`

export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    outline: none;
    line-height: 20px;
    p{
      line-height: 24px;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: var(--lspace-20);
      text-transform: uppercase;
      font-style: normal;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      background: var(--lfg-sky-200);
      border: 2px solid var(--lfg-sky-200);
      @media screen and (max-width: 700px) {
        font-size: 18px;
        letter-spacing: var(--lspace-18);
      }
    }
    div{
      line-height: 0;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border: 2px solid var(--lfg-sky-200);
      background: var(--lfg-sky-300);
    }
`

export const Tag = styled.div`
    font-weight: 700;
    line-height: 14px;
    font-size: 10px;
    padding: 1px 6px;
    border-radius: 9px;
    display: inline-flex;
    text-transform: uppercase;
    color: var(--white);
    @media screen and (max-width: 700px) {
      font-size: 9px;
      padding: 0px 4px;
    }
   
    &.onimage{
      position: absolute;
      top: 8px;
      left: 8px;
      @media screen and (max-width: 700px) {
        top: 6px;
        left: 6px;
      }
    }
    &.red{
        background: var(--red);
    }
    &.green{
        background: var(--green);
    }
    &.blue{
        background: var(--blue);
    }
    &.yellow{
        background: var(--yellow);
    }
    &.pink{
        background: var(--pink);
    }
    &.orange{
        background: var(--orange);
    }
    &.black{
        background: var(--tag-black);
        opacity: .8;
    }
    &.grad-cool{
      background-color: #6bbba6;
      background-image: linear-gradient(90deg,#566cec,#d749af 50%,#ff7c51);
    }
`

export const StyledLink = styled.a`
    line-height: normal;
    cursor: pointer;
    color:  red; //todo
`

export const IssueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    cursor: pointer;
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px;
    }
`

export const ButtonLink = styled.a`
    font-size: 24px;
    display: inline-flex;
    line-height: normal;
    padding: 16px 32px;
    border-style: none;
    outline: none;
    cursor: pointer;
    border-radius: 36px;
    background: rgb(228, 232, 236);
    background: linear-gradient(262.31deg, #06F1F8 1.86%, #2F8FFF 27.73%, #FF3382 68.97%, #FFBD6F 99.88%);
    transition: all .3s;
    position: relative;
`

export const SectionTitle = styled.h2`
    padding: 0 16px;
    font-size: 24px;
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--black);
    text-align: center;
    &.center{
      text-align: center;
    }
    @media screen and (max-width: 700px) {
      font-size: 20px;
    }
`
export const SpacedTitle = styled.h2`
    padding: 0 16px;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--light-gray);
    opacity: .4;
    &.center{
      text-align: center;
    }
    @media screen and (max-width:  700px) {
      font-size: 12px;
    }
`

export const HoverBox = styled.div`
    &::before{
      content: "";
      border-radius: 24px;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.8);
      @media screen and (max-width: 700px) {
        border-radius: 20px;
      }
    }
    &:hover{
    transition: all 333ms ease 0s;
    border-color: transparent;
      &::before{
        opacity: 1;
        background: var(--hover-bg);
        transition: all 333ms ease 0s;
        transform: scale(1);
      }
    }
`

export const PageHeader = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 700px) {
     margin-top: 16px;
  }
  .logo{
    display: block;
    height: 64px;
    width: 64px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0px 21px 44px -14px #FF0202;
  }
  h2{
    display: inline-block;
    font-size: 32px;
    margin-bottom: 12px;
    letter-spacing: var(--lspace-32);
    font-weight: 700;
    @media screen and (max-width: 700px) {
      margin-bottom: 4px;
      font-size: 30px;
      letter-spacing: var(--lspace-30);
    }
  }
  p{
    font-size: 18px;
    line-height: 140%;
    letter-spacing: var(--lspace-18);
    @media screen and (max-width: 700px) {
      margin-top: 16px;
      font-size: 16px;
      letter-spacing: var(--lspace-16);
    }
  }
`

export const Seprator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  svg{
    opacity: .2;
  }
  span{
    width: max-content;
  }
  h3{
    margin: 0 32px;
    font-size: 18px;
    @media screen and (max-width: 700px) {
      margin: 0 12px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 700px) {
      transform: scale(.8);
  }
`
export const Screens = styled.div`
  position: relative;
  display: inline-grid;
  grid-gap: 16px;
  gap: 24px;
  padding-top: 12px;
  padding-bottom: 40px;
  &.grid-3{
    grid-template-columns: repeat(3,1fr);
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1,1fr);
    }
  }
  &.grid-2{
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1,1fr);
    }
  }
  line-height: 0;
  @media screen and (max-width: 700px) {
      padding: 16px;
  }
  
  span{
    border-radius: 16px;
    display: flex;
  }
  img{
    width: 100%;
    border-radius: 16px;
  }
  
  .mock{
    border-radius: 16px;
    /* border: 12px solid #FCFCFC; */
    border: .5px solid var(--border);
    display: flex;
  }
`
export const SupportLink = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  ul{
    display: flex;
    @media screen and (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 24px;
    }
    li{
      margin: 6px;
      @media screen and (max-width: 700px) {
        
      }
      a{
        padding: 6px 12px;
        border-radius: 18px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        font-size: -0.176px;
        position: relative;
        @media screen and (max-width: 700px) {
          font-size: 15px;
          letter-spacing: var(--lspace-15);
          padding: 4px 10px;
        }
        &:hover{
          opacity: .8;
        }
        svg {
          transform: scale(.7);
          @media screen and (max-width: 700px) {
            transform: scale(.6);
          }
        }
        &.grass{
          background: linear-gradient(270deg, #FFF7E3 0%, #DAFFBC 96.72%);
          color: rgba(172, 198, 16, 0.82);
        }  
        &.green{
          background: linear-gradient(270deg, #FFF7E3 0%, #DAFFBC 96.72%);
          color: rgba(29, 162, 114, 0.79);
        }  
        &.teal{
          background: linear-gradient(270deg, #B8F8FF 0%, #AFD4FF 99.55%);;
          color: rgba(0, 113, 194, 0.8);
        }  
        &.blue{
          background:linear-gradient(270deg, #C3C2FF 0%, #9DBEFF 100%);
          color: rgba(28, 48, 157, 0.7);
        }
        &.purple{
          background: linear-gradient(270deg, #F0D6FF 0%, #D3CDFF 100%);
          color: rgba(92, 27, 174, 0.8);
        }
        &.orange{
          background: linear-gradient(270deg, #FBCEFF 0%, #FFD1D1 100%);
          color: rgba(208, 0, 166, 0.8);
        }
        &.yellow{
          background: linear-gradient(270deg, #FDE1BC 0%, #FFAEAE 100%);
          color: rgba(204, 61, 0, 0.8);
        }  
      }
    }
  }
`

export const Tag25 = styled.div`
  position: relative;
  display: inline-grid;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  padding: 2px 6px;
  border-radius: 9px;
  margin-right: 6px;
  @media screen and (max-width: 700px) {
      font-size: 10px;
  }
  &.blue{
    background:linear-gradient(270deg, #E5E4FF 0%, #DCE8FF 100%);
    color: rgba(7,4,138, .7);
  }
  &.red{
    background: linear-gradient(90deg,#ffc4c4 0%,#FFE0CA 100%);
    color: rgba(211,0,0, .7);
  }
  &.pink{
    background:  linear-gradient(90deg, #FFD5E3 0%, #FFF0F8 100%);
    color: rgba(216, 44, 106, 0.8);
  }
  &.purple{
    background: linear-gradient(180deg, #F5F1FF 0%, #EBE9FF 100%);
    color: rgba(92, 27, 174, 0.8);
  }
  
  &.teal{
    background: linear-gradient(270deg, #CCFAFF 0%, #AFD4FF 99.55%);
    color: rgba(0, 113, 194, 0.8);
  }
  &.orange{
    background:linear-gradient(270deg, #FFCEDF 0%, #F7D1FF 100%);
    color: rgba(140, 0, 126, 0.8);
  }
  &.yellow{
    background: linear-gradient(90deg,#ffd566 0%,#fff8e6 100%);
    color: rgb(223 93 9 / 80%);
    /* background: linear-gradient(90deg, #FFD7D7 0%, #FFF4E6 100%);
    color: rgba(204, 61, 0, .8); */
  } 
  
  &.black{
    background: linear-gradient(90deg,rgba(100,100,100,.2) 0%, rgba(200,200,200,.1) 100%);
    color: var(--text-secondary);
    /* background: linear-gradient(90deg, #FFD7D7 0%, #FFF4E6 100%);
    color: rgba(204, 61, 0, .8); */
  } 
  &.green{
    background: linear-gradient(90deg,#d8f9bb 0%,#fdf8cc 100%);
    color: rgba(60, 132, 0, 0.8);
  }   
`