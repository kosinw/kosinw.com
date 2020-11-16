import Layout from "components/Layout";
import ArticleSeo from "components/ArticleSeo";
import { Link, Box, Heading } from "theme-ui";
import NextLink from "next/link";

const ArticlePage = ({ frontMatter, children }) => {
  return (
    <>
      <ArticleSeo {...frontMatter} />
      <Layout>
        <Box mt={20} mb={40}>
          <NextLink href="/archive" passHref>
            <Link sx={{ fontSize: "14px" }}>&#8592; Back to archive</Link>
          </NextLink>
        </Box>
        <Box>
          <Heading sx={{ fontSize: "2rem" }}>{frontMatter.title}</Heading>
          <Box mt={40}>{children}</Box>
        </Box>
      </Layout>
    </>
  );
};

export default ArticlePage;
