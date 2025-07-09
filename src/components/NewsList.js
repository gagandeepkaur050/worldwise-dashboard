import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
  const [country, setCountry] = useState('in');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${country}&language=en`
        );
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        setArticles([]);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country, API_KEY]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Top Headlines for {country.toUpperCase()}</h2>

      <select
        className="form-select mb-4 w-auto"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="us">🇺🇸 United States</option>
        <option value="ca">🇨🇦 Canada</option>
        <option value="in">🇮🇳 India</option>
        <option value="gb">🇬🇧 United Kingdom</option>
      </select>

      {loading ? (
        <p>Loading news...</p>
      ) : articles.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <div className="row">
          {articles.map((article, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="card h-100">
                {article.image_url && (
                  <img
                    src={article.image_url}
                    className="card-img-top"
                    alt={article.title || "Article image"}
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text flex-grow-1">{article.description?.split(" ")
    .slice(0, 20)
    .join(" ") + (article.description?.split(" ").length > 20 ? "..." : "")}</p>
                  <small className="text-muted">{article.source_id}</small>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
