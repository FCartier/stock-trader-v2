import * as React from "react";

import { SectionHeader } from "../reusables/SectionHeader";
import { NewsItem, NewsList } from './types';
import { List, Header, Footer, Container } from "./styles"

const News: React.SFC<NewsList> = ({news}) => {
  console.log(news);

  return renderCondition(news) ? (
    <div>
      <Container>
        <SectionHeader title="NEWS" />
        <List>
          {news
          .slice(0, 5)
          .map((article: NewsItem, index: number) => {
            return (
              <li key={index}>
                <Header>
                  <a href={article.url}>{article.headline}</a>
                </Header>
                <Footer>{article.source}</Footer>
              </li>
            );
          })}
        </List>
      </Container>
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
