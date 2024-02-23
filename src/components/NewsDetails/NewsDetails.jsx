import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { fetchNews } from "services/newsApi";

import { MdOutlineArrowBackIos } from "react-icons/md";

const NewsDetails = () => {
  const [newsItem, setNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();

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

  // console.log(location);

  const { urlToImage, description, author } = newsItem;
  return (
    <div>
      {isLoading ? (
        <div>.....Loading news!</div>
      ) : (
        <div>
          <div>
            <Link to={state?.from}>
              <MdOutlineArrowBackIos />
              Back
            </Link>
          </div>
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
