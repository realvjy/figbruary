import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import styled from "styled-components";
import { Container, SectionTitle } from 'components/ReusableStyles'
import HomePage from 'components/HomePage'
import Seo from 'components/Seo'
import seoData from 'next-seo.config';



export default function Faq() {

  return (
    <>
      <Header />
      <Nav />
      <FaqSection>
        <Container>
          <FaqWrap>
            <SectionTitle>Faq</SectionTitle>
            <Question>
              <h3>What is Figbruary?</h3>
              <p>Figbruary is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.
              </p>
            </Question>
            <Question>
              <h3>Why Prompts?</h3>
              <p>Doing something consistently every day is really a great habit. It doesn&lsquo;t matter what you make and how you make it. If you just draw a circle or rectangle and come up with something every day, you are learning and improving. People wanted to create something but they stuck on what to create. Getting even a single word prompt gives them an idea and motivates them to create something.
              </p>
            </Question>
            <Question>
              <h3>Why 28 Days?</h3>
              <p>
                There is no specific reason; you can do it anytime and any day or month. Once you start doing something consistently, you will develop a habit of creating something daily, which leads to improving your craft.
              </p>
            </Question>
            <Question>
              <h3>Do I have to follow prompts strictly?</h3>
              <p>No
              </p>
            </Question>
            <Question>
              <h3>Do I have to post daily?</h3>
              <p>No
              </p>
            </Question>
            <Question>
              <h3>Other prompt based learning events</h3>
              <p>
                <a href='https://inktober.com/'>Inktober</a>
                <a href='https://genuary.art/'>Genuary</a>
                <a href='https://nodevember.io/'>Nodevember</a>
                <a href='https://sculptober.com/'>sculptober</a>
              </p>
            </Question>
          </FaqWrap>
        </Container>
      </FaqSection>
      <Footer />
    </>
  )
}

const FaqSection = styled.div`
  margin-top: 80px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
     margin-top: 60px;
  }
`

const FaqWrap = styled.div`
  padding: 0 40px;
  
`

const Question = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  color: var(--black);
  h3{
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
    color: var(--black);
  }
  a{
    color: var(--black);
    display: block;
    font-weight: 600;
    text-decoration: underline;
    line-height: 140%;
    opacity: .7;
    &:hover{
      opacity: 1;
    }
  }
`

