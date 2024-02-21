import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchNews } from "services/newsApi";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const newsList = await fetchNews(1, 9);
      console.log(newsList.articles);
      setNews([...newsList.articles]);
    })();
  }, []);

  return news?.map((item, index) => {
    return (
      <ul>
        <li key={item.title}>
          <Link to={`${index}`}>{item.title}</Link>
        </li>
      </ul>
    );
  });
};

export default News;
