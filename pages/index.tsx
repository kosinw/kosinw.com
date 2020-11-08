import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Styled, Link } from "theme-ui";
import DefaultLayout from "components/Layout";
import ArchiveList from "components/ArchiveList";
import NextLink from "next/link";
import { getAllPosts } from "lib/archive";
import { PostMetadata } from "types/PostMetadata";

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage: NextPage<IndexPageProps> = ({ posts }) => {
  return (
    <DefaultLayout>
      <Styled.p>
        My website was built using{" "}
        <NextLink href="https://nextjs.org/" passHref>
          <Link>Next.js</Link>
        </NextLink>
        {", "}
        <NextLink href="https://theme-ui.com/home/" passHref>
          <Link>Theme UI</Link>
        </NextLink>
        {", "}
        and{" "}
        <NextLink href="https://mdxjs.com/" passHref>
          <Link>MDX</Link>
        </NextLink>
        {". "}
        You can find the{" "}
        <NextLink href="https://github.com/kosinw/kosinw.com" passHref>
          <Link>source code for my website on GitHub</Link>
        </NextLink>
        {"."}
      </Styled.p>
      <ArchiveList posts={posts} />
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: PostMetadata[];
}> = async () => {
  const posts = getAllPosts(["title", "date", "slug", "keywords", "summary"]);

  return {
    props: { posts },
  };
};

export default IndexPage;
