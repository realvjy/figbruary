'use client'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* SpotMono */


body.dark-mode, body[data-theme="dark"] {
  --img: invert(1);

  --img-shadow: 6px 6px 12px -6px rgb(0 0 0 / 50%), 24px 24px 30px -6px rgb(0 0 0 / 50%);
  --img-shadow-2: 2px 2px 4px -2px rgb(0 0 0 / 50%), 24px 24px 30px -6px rgb(0 0 0 / 50%);
  --hover-bg: linear-gradient(90deg, rgba(30, 28, 50, 0.8) 0%, rgba(43, 22, 29, 0.7) 100%);
  --shadow: rgba(255,255,255,.2);
  --grey-100: rgba(255,255,255,.1);
  --avatar-shadow: rgba(28,22,47,.3);
  --nav-bg: rgba(28,22,47,.3);
  --nav-menu-bg: rgba(18,18,22,.4);
  --light-gray: rgba(114, 120, 136, .6);
  --border-line: rgba(236, 237, 238, .15);
  --border: rgba(236, 237, 238, .03);
  --text-primary: var(--white-text);
  --text-secondary: rgba(255,255,255,0.3);
  --bg: var(--black);
  --bg-sec: var(--light-white);

  
  --bg-filter: contrast(130%);
  --selection-bg: #f81ce5;
}

body.light-mode, body[data-theme="light"] {
  --img-shadow: 6px 6px 12px -6px rgb(0, 0, 0, .1), 24px 24px 30px -6px rgb(0, 0, 0, .2);
  --img-shadow-2: 2px 2px 8px -1px rgb(0, 0, 0, .05), 12px 12px 16px -4px rgb(0, 0, 0, .05);
  --hover-bg: linear-gradient(90deg, rgba(255, 233, 244, 0.4) 0%, rgba(234, 243, 255, 0.7) 100%);
  --img: invert(0);
  --nav-bg: rgba(255,255,255,.3);
  --nav-menu-bg: rgba(255,255,255,.7);
  --shadow: rgba(48,52,77,.2);
  --grey-100: rgba(48,52,77,.1);
  --avatar-shadow: rgba(48,52,77,.1);
  --light-gray: rgba(74, 87, 111, .6);
  --bg-filter: contrast(1);
  --border-line: rgba(34, 36, 44, .15);
  --border-light: rgba(34, 36, 44, .03);
  --border: rgba(34, 36, 44, .03);
  --text-primary: var(--black-text);
  --text-secondary: rgba(0,0,0,0.5);
  --bg: var(--yellowhite);
  --bg-sec: var(--light-black);
  --selection-bg: #00FFFF;

} 
::selection {
    background: var(--selection-pink);
    color: var(--white);
}

* {
  --bg-light-yellow: #F2F2EE;
  --bg-light-blue: #EDF2FF;
  --bg-light-red: #F2EEEE;
  
  --light-yellow: #FFF6C5;
  --yellow: #F8C231;
  --orange: rgba(255, 105, 40, 0.8);
  --light-red: #FFC5CF;
  --red: #FF445E;
  --green: rgba(0, 187, 131, 0.8);
  --light-green: #BEFFEC;
  --pink: rgba(255, 90, 209, 0.9);
  --selection-sky: #00FFFF;
  --selection-pink: #f81ce5;
  --light-pink: #FFE9FA;
  --tag-black: rgba(0,0,0,.7);

  
  --blue: rgba(5, 96, 255, 0.8);
  --light-blue: #B7F2FF;
  
  --yellowhite: #F6F4EF;
  --white: #FFFFFF;
  --white-bg: #FFFFFF;
  --black-text: #22242C;
  --black-bg: #22242C;
  --white20: #ecedee;
  --white-text: #ffffff;
  
  
  --gray: #687076;
  --black: #000000;
  
  --d: 2500ms;
	--angle: 90deg;
	--gradX: 100%;
	--gradY: 50%;
	--c1: rgba(168, 239, 255, 1);
	--c2: rgba(168, 239, 255, 0.1);
  
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.05);
  
  --tag-black: rgba(0,0,0,.5);
  --tag-white: rgba(255,255,255, .8);
  --tag-pink: #F150CE;
  --transparent: rgba(255,255,255,0);
  --wallpaper-gradient: 20,170,0;
  --noisy-gradient: 220,70,100;
  
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  transition: all 50ms ease;
  --Manrope: font-family: 'Manrope', sans-serif;
}

html{
    scroll-behavior: smooth;
    transition: all 333ms ease 0s;
}

body {
  background: var(--yellowhite);
  color: ${({ theme }) => theme.text.primary};
  font-family: 'Manrope', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a{
  color: var(--text-primary);
  cursor: pointer;
}

.main{
    min-height: 100vh;
    
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
}


.gradient {
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;


}

.red-grad{
  background: linear-gradient(87.46deg, #4AB1F1 -1.79%, #00C2FF -1.78%, #FF33C6 32.88%, #FF800B 75.62%);
}
.green-grad{
    background: linear-gradient(87.46deg, #4AB1F1 -1.79%, #00C2FF -1.78%, #FFC633 32.88%, #0BFFF0 75.62%);
}

.gradient-bg {
    background-size: 100%;
    color: var(--white);
    background-repeat: repeat;
}

.last_word{
    white-space: no-wrap;  
    display: inline-flex;
    flex-wrap: wrap; 
}

.left{
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1);
    opacity: .4;
}

.right{
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: .4;
}

.title-dot{
  filter: var(--img);
  margin: 0 24px;
}

.shadow{
  box-shadow: var(--img-shadow);
  /* box-shadow: 6px 6px 12px -6px rgb(77, 0, 0, .1), 24px 24px 30px -6px rgb(77, 0, 0, .2); */
}

.shadow-2{
  box-shadow: var(--img-shadow-2);
  /* box-shadow: 6px 6px 12px -6px rgb(77, 0, 0, .1), 24px 24px 30px -6px rgb(77, 0, 0, .2); */
}

.rotate{
  transform: scale(1) rotate(180deg) ;
}

hr {
    background-color: var(--light-gray);
    opacity: .2;
    border: none;
    display: block;
    height: 1px;
    margin: 1.5rem 0;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      
    }
}
    
@keyframes navAnim1{
    0% {
        transform: translateY(0);
    }
    70% {
        transform: translateY(6px);
    }
    100% {
        transform: translateY(6px) rotate(45deg);
    }
  }
  
  
@keyframes navAnim2{
    0% {
      transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}
  
@keyframes navAnim3{
  0% {
      transform: translateY(0);
  }
  70% {
      transform: translateY(-6px);
  }
  100% {
      transform: translateY(-6px) rotate(135deg);
  }
}

@keyframes rnavAnim1{
    0% {
        transform: translateY(6px) rotate(45deg);
        
    }
    70% {
        transform: translateY(6px);
    }
    100% {
        transform: translateY(0);
    }
  }
  
  
@keyframes rnavAnim2{
    0% {
      transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}
  
@keyframes rnavAnim3{
  0% {
      transform: translateY(-6px) rotate(135deg);
      
  }
  70% {
      transform: translateY(-6px);
  }
  100% {
      transform: translateY(0) rotate(0deg);
  }
}

`;

export default GlobalStyle;
