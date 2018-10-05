import React from 'react';
import KeyStats from '../../../components/keystats/KeyStats';
import renderer from 'react-test-renderer';
import testData from './keystats.data.json'


describe("keystats component", () => {
    test('keystats component should display all data fields', () => {
        const component = renderer.create(
          <KeyStats keystats={testData}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
})
