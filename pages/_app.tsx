import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import SEO from "next-seo.config";
import theme from "theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>      
      <DefaultSeo {...SEO} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          name="google-site-verification"
          content="vEwHv2KY3YjoP97DobMGG7gTSmHnVlSI7FTVLqOaKaE"
        />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
