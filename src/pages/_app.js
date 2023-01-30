import { useState, useEffect, useCallback, useMemo } from "react"
import GlobalStyle from "../styles/GlobalStyle";
import Layout from 'components/Layout'
import Head from "next/head";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

export default function App({ Component, pageProps }) {
  const darkMode = useDarkMode(true, { storageKey: null, onChange: null })
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    setIsMounted(true);
  }, [])
  return <>
    <GoogleAnalytics />
    <ThemeProvider theme={lightTheme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <GlobalStyle />
      <Layout>
        <DefaultSeo
          canonical={SEO.openGraph.url}
          {...SEO}
          additionalMetaTags={[{
            name: 'keywords',
            content: SEO.openGraph.keywords,
          },
          {
            name: 'twitter:image',
            content: SEO.openGraph.images[0].url
          },
          {
            name: 'twitter:title',
            content: SEO.openGraph.title,
          },
          {
            name: 'twitter:description',
            content: SEO.openGraph.description,
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          }]}
        />
        {isMounted && <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>

  </>
}
