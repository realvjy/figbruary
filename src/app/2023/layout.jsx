import GlobalStyle from "@/styles/globals/GlobalStyle";
import seoData from "@/lib/next-seo.config";
import StyledThemeProvider from "@/components/2023/themeProvider";
import Layout from "@/components/2023/Layout";


export const metadata = {
  metadataBase: new URL(seoData.openGraph.url),
  title: {
    default: seoData.openGraph.title,
    template : "2023 | %s"
  },
  description: seoData.openGraph.description,
  keywords: seoData.openGraph.keywords,
  openGraph: {
    type: "website",
    description: seoData.openGraph.description,
    url: seoData.openGraph.url,
    title: seoData.openGraph.title,
    locale: "en_EN",
    siteName: "figbruary",
    images: [
      {
        width: 1200,
        height: 630,
        url: seoData.openGraph.images[0].url,
        alt: seoData.openGraph.title,
      },
    ],
  },
  twitter: {
    card: seoData.twitter.cardType,
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    creator: seoData.twitter.handle,
    creatorId: seoData.twitter.id,
    site: "vjy.me",
    images: [seoData.openGraph.images[0].url],
  },
  robots: {
    nosnippet: false,
    notranslate: true,
    noimageindex: false,
    noarchive: false,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};


export default function _2023_Layout({ children }) {
  return (
    <>
      <StyledThemeProvider >
        <GlobalStyle />
        <Layout>
          {children}
        </Layout>
      </StyledThemeProvider>
    </>
  );
}
