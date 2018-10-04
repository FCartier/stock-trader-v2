import * as React from "react";

import { SectionHeader } from "../reusables/SectionHeader";

interface NewsItem {
  url: string;
  headline: string;
  source: string;
}

interface NewsList {
  news: []
}


const News: React.SFC<NewsList> = ({news}) => {

  return news.length ? (
    <div>
      <div className="news">
        <SectionHeader title="NEWS" />
        <ul className="news-list">
          {news.map((article: NewsItem, index: number) => {
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
