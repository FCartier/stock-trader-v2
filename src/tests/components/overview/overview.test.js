import React from 'react';
import Overview from '../../../components/overview/Overview';
import renderer from 'react-test-renderer';
import testData from './overview.data.json'


describe("overview component", () => {
  test('overview component should display all data fields', () => {
    const component = renderer.create(
      <Overview overview={testData}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
