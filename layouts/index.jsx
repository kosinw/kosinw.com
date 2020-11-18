/** @jsx jsx */
import Layout from "components/Layout";
import ArticleSeo from "components/ArticleSeo";
import { Link, Box, Heading, jsx } from "theme-ui";
import { format, parse } from "date-fns";
import NextLink from "next/link";

const ArticlePage = ({ frontMatter, children }) => {
  const date = format(
    parse(frontMatter.date, "MM-dd-yyyy", new Date()),
    "MMM do"
  );

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
          <Heading
            sx={{
              fontSize: "16px",
              fontWeight: "normal",
              textTransform: "uppercase",
              lineHeight: "1.25em",
            }}
          >
            <NextLink href={frontMatter.slug} passHref>
              <Link
                sx={{
                  ml: -20,
                  borderBottom: "none",
                  "&:hover": {
                    borderBottom: "none",
                    color: "faded",
                  },
                }}
              >
                <span sx={{ display: "inline-block", width: 20, height: 12 }}>
                  #
                </span>
                {date} - {frontMatter.title}
              </Link>
            </NextLink>
          </Heading>
          <Box mt={20}>{children}</Box>
        </Box>
      </Layout>
    </>
  );
};

export default ArticlePage;
