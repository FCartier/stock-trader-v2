import * as React from "react";

import { SectionHeader } from "../reusables/SectionHeader.tsx";
import { NewsItem, NewsList } from './types';

const News: React.SFC<NewsList> = ({news}) => {
  console.log(news);


  return renderCondition(news) ? (
    <div>
      <div className="news">
        <SectionHeader title="NEWS" />
        <ul className="news-list">
          {news
          .slice(0, 5)
          .map((article: NewsItem, index: number) => {
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

function renderCondition(news: []) {
  console.log(news.length)
  if (news.length > 0) {
    return true
  }
}

export default News;
