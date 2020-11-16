import { Heading, Container, Text, Flex, Link } from "theme-ui";
import { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";

const NotFoundPage: NextPage = ({}) => (
  <>
  <Head>
    <title>kosinw.com/404</title>
  </Head>
  <Flex
    sx={{ flexDirection: "column", height: "100vh", justifyContent: "center" }}
  >
    <Container sx={{ maxWidth: 550, px: 20, mx: "auto" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Heading as="h1">404.</Heading>
        <Text>
          <NextLink href="/" passHref>
            <Link>Return home?</Link>
          </NextLink>
        </Text>
      </Flex>
    </Container>
  </Flex>
  </>
);

export default NotFoundPage;
