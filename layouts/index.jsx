import Layout from "components/Layout";
import ArticleSeo from "components/ArticleSeo";

const ArticlePage = ({ frontMatter, children }) => {
  return (
    <>
      <ArticleSeo {...frontMatter} />
      <Layout>{children}</Layout>
    </>
  );
};

export default ArticlePage;
