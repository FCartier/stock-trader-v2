import React from "react";

import { SectionHeader } from "../reusables/SectionHeader";


const News = props => {
  const { news } = props;

  return news.length ? (
    <div>
      <div className="news">
        <SectionHeader title="NEWS" />
        <ul className="news-list">
          {news.map((article, index) => {
            return (
              <li key={index}>
                <p className="article-header">
                  <a href={article.url}>{article.headline}</a>
                </p>
                <p className="article-footer">{article.source}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default News;
