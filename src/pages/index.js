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



export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://vjy.me/preview.jpg'
  };
  return (
    <>
      <Seo page={page} />
      <Header />
      <Nav />
      <HomePage />
      <Footer />
    </>
  )
}


