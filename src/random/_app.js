import { useState, useEffect, useCallback, useMemo } from "react"
import GlobalStyle from "../styles/globals/GlobalStyle";
import Layout from '@/components/2023/Layout'
import Head from "next/head";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from 'next-seo';
import SEO from '@/lib/next-seo.config';


ex
export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
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
