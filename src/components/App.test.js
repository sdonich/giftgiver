import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  test('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({gifts: []});
    });

    test('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    test('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toBe(1);
    });

    test('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });
  });
});

