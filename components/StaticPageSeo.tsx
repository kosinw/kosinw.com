import { PostMetadata } from "types/PostMetadata";
import { NextSeo } from "next-seo";

const StaticPageSeo: React.FC<PostMetadata> = ({
  title,
  summary,
  date,
  slug,
}) => {
  return (
    <NextSeo
      title={`${title} - kosinw.com`}
      description={summary}
      canonical={slug}      
      openGraph={{        
        type: "article",
        article: {
          publishedTime: date! as string,
        },
        url: slug,
        title,
        description: summary,
      }}
    />
  );
};

export default StaticPageSeo;
