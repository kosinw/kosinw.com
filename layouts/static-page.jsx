import Layout from "components/Layout";
import StaticPageSeo from "components/StaticPageSeo";

const StaticPage = ({ frontMatter, children }) => {
  return (
    <>
      <StaticPageSeo {...frontMatter} />
      <Layout>{children}</Layout>
    </>
  );
};

export default StaticPage;
