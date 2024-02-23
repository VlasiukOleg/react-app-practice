import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { fetchNews } from "services/newsApi";

const News = () => {
  const [news, setNews] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("filter") ?? "";

  useEffect(() => {
    (async () => {
      const newsList = await fetchNews(1, 20);
      console.log(newsList.articles);
      setNews([...newsList.articles]);
    })();
  }, []);

  const filtredNews = news.filter(({ title }) =>
    title.toLowerCase().includes(filter)
  );

  const onFilterChange = (e) => {
    const filterName = e.target.value;
    const nextParams =
      filterName !== "" ? { filter: filterName.toLowerCase() } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <label>
        Filter
        <input type="text" value={filter} onChange={onFilterChange}></input>
      </label>

      <ul>
        {filtredNews.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${index}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default News;
