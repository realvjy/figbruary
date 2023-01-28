import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import styled from "styled-components";
import { Container } from 'components/ReusableStyles'



export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}


