import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import styled from "styled-components";
import { Container } from 'components/ReusableStyles'
import HomePage from 'components/HomePage'
import Seo from 'components/Seo'
import seoData from 'next-seo.config';



export default function Faq() {

  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  )
}


