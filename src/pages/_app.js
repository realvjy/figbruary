import { useState, useEffect, useCallback, useMemo } from "react"
import GlobalStyle from "../styles/GlobalStyle";
import Layout from 'components/Layout'
import Head from "next/head";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

export default function App({ Component, pageProps }) {
  const darkMode = useDarkMode(true, { storageKey: null, onChange: null })
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    setIsMounted(true);
  }, [])
  return <>
    <ThemeProvider theme={lightTheme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <GlobalStyle />
      <Layout>
        {isMounted && <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>

  </>
}
