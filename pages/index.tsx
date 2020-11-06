import { NextPage } from "next";
import { Styled, Link } from "theme-ui";
import DefaultLayout from "layouts";
import ArchiveList from "components/ArchiveList";
import NextLink from "next/link";

const IndexPage: NextPage = ({}) => {
  return (
    <DefaultLayout>
      <Styled.p>
        This is my personal website that archives all the cool things I've
        discovered and made. My website was built using{" "}
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
          <Link>MDX.</Link>
        </NextLink>{" "}
        You can find the{" "}
        <NextLink href="https://github.com/kosinw/kosinw.com" passHref>
          <Link>source code for my website on GitHub.</Link>
        </NextLink>
      </Styled.p>
      <ArchiveList />
    </DefaultLayout>
  );
};

export default IndexPage;
