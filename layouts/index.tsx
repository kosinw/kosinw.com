/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Head from "next/head";
import Header from "components/Header";

const DefaultLayout: React.FC<{ frontMatter?: any }> = ({
  children,
  frontMatter = {},
}) => {
  const { title }: { title: string } = frontMatter;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{!!title ? `${title} - kosinw.com` : "kosinw.com"}</title>
      </Head>
      <Container sx={{ px: 40, maxWidth: 600, mx: "auto" }}>
        <Flex sx={{ flexDirection: "column" }}>
          <Header />
          <Box my={24}>{children}</Box>
        </Flex>
      </Container>
    </>
  );
};

export default DefaultLayout;
