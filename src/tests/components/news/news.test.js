import React from 'react';
import News from '../../../components/news/News';
import renderer from 'react-test-renderer';
import testData from './news.data.json'


describe("news component", () => {
  test('news component should display all data fields', () => {
    const component = renderer.create(
      <News news={testData}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
