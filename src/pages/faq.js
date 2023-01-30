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
`

const FaqWrap = styled.div`
  padding: 0 40px;
  
`

const Question = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  h3{
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  a{
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

