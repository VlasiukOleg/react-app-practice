import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "services/newsApi";

const NewsDetails = () => {
  const [newsItem, setNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { newsId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const newsList = await fetchNews(1, 9);
      console.log(newsList.articles);

      setNews({ ...newsList.articles[newsId] });
      setIsLoading(false);
    })();
  }, [newsId]);

  const { urlToImage, description, author } = newsItem;
  return (
    <div>
      {isLoading ? (
        <div>.....Loading news!</div>
      ) : (
        <div>
          <img
            src={`${urlToImage}`}
            alt="news info"
            width="320"
            height="240"
          ></img>
          <p>{description}</p>
          {author ? <p>{author}</p> : <p>We don't find author</p>}
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
