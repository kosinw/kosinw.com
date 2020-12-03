import { useState, useEffect, Box } from "react";
import { Styled, Divider } from "theme-ui";

const JSONView: React.FC<{}> = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17");
      const json = await data.json();
      setArticles(json);
    };

    fetchData();
  }, []);

  if (!articles) {
    return <p>Fetching data...</p>;
  }

  return (
    <Box>
      {articles.map(article => {
        return (
          <>
            <Divider />
            <Styled.h2>{article.headline}</Styled.h2>
            <Styled.p>by {article.author}</Styled.p>
            <Styled.p dangerouslySetInnerHTML={{ __html: article.body }} />
          </>
        );
      })}
    </Box>
  );
};

export default JSONView;