import React, { useState, useEffect } from 'react';

function News() {
    const [country, setCountry] = useState('us');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          console.error("News API error:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_KEY]);

  if (loading) return <p>Loading news...</p>;

  return (
    <div>
      <h2>Top Headlines</h2>
      <ul>
        {articles.map((article, i) => (
          <li key={i}>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
            <p>{article.source.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
