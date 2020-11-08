import Layout from "components/Layout";
import ArticleSeo from "components/ArticleSeo";
import { PostMetadata } from "types/PostMetadata";

const ArticlePage: React.FC<{ frontMatter: PostMetadata }> = ({
  frontMatter,
  children,
}) => {
  return (
    <>
      <ArticleSeo {...frontMatter} />
      <Layout>{children}</Layout>
    </>
  );
};

export default ArticlePage;
