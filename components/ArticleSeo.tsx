import { PostMetadata } from "types/PostMetadata";
import { BlogJsonLd } from "next-seo";
import StaticPageSeo from "components/StaticPageSeo";

const ArticleSeo: React.FC<PostMetadata> = ({ title, summary, date, slug }) => {
  return (
    <>
      <BlogJsonLd
        authorName="Kosi Nwabueze"
        dateModified={date! as string}
        datePublished={date! as string}
        description={!!summary ? summary : ""}
        title={!!title ? title : ""}
        url={!!slug ? slug : ""}
        images={[]}
      />
      <StaticPageSeo title={title} summary={summary} date={date} slug={slug} />
    </>
  );
};

export default ArticleSeo;
