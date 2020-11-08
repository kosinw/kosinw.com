import Layout from "components/Layout";
import StaticPageSeo from "components/StaticPageSeo";
import { PostMetadata } from "types/PostMetadata";

const StaticPage: React.FC<{ frontMatter: PostMetadata }> = ({
  frontMatter,
  children,
}) => {
  return (
    <>
      <StaticPageSeo {...frontMatter} />
      <Layout>{children}</Layout>
    </>
  );
};

export default StaticPage;
