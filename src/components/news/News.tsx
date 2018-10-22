import * as React from "react";

import { SectionHeader } from "../reusables/SectionHeader";
import { NewsItem, NewsList } from "./types";
import { List, Header, Footer, Container } from "./styles";
import NoData from "../reusables/NoData";

const News: React.SFC<NewsList> = ({ news }) => {
  return (
    <div>
      <Container>
        <SectionHeader title="NEWS" />
        {renderCondition(news) ? (
          <List>
            {news.slice(0, 5).map((article: NewsItem, index: number) => {
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
        ) : (
          <NoData componentName="news" />
        )}
      </Container>
    </div>
  );
};

function renderCondition(news: NewsItem[]) {
  if (news.length > 0) {
    return true;
  }
}

export default News;
